import { Text, View, ActivityIndicator } from "react-native";
import { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { useQuery } from "@tanstack/react-query";
import { api, MovieResult } from "@/api";
import { FlashList } from "@shopify/flash-list";
import { MovieCard } from "@/components";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: FC<Props> = ({ navigation }) => {
  const { isLoading, data } = useQuery<MovieResult>({
    queryKey: ["popular"],
    queryFn: async () => {
      const res = await api.get("/movie/popular", {
        params: {
          sort_by: "popularity",
          page: 1,
        },
      });

      return res.data;
    },
  });

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (!data) {
    return (
      <View className="flex items-center justify-center">
        <Text>No Data</Text>
      </View>
    );
  }

  return (
    <View className="flex-1" style={{ minHeight: 2 }}>
      <FlashList
        data={data.results}
        renderItem={({ item }) => {
          return (
            <MovieCard
              title={item.title}
              releaseDate={item.release_date}
              posterPath={item.poster_path}
              onPress={() =>
                navigation.navigate("Details", {
                  movieId: item.id,
                })
              }
            />
          );
        }}
        estimatedItemSize={20}
      />
    </View>
  );
};

export default Home;
