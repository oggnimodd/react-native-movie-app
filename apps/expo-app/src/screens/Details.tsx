import { View, Text, ActivityIndicator, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { FC } from "react";
import { Button } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { MovieDetails, api, createPosterUrl } from "@/api";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const Details: FC<Props> = ({ navigation, route }) => {
  const { movieId } = route.params;

  const { data, isLoading } = useQuery<MovieDetails>({
    queryKey: ["movie", movieId],
    queryFn: async () => {
      const response = await api.get(`/movie/${movieId}`, {
        params: {
          append_to_response: ["credits", "videos", "recommendations"],
        },
      });

      return response.data;
    },
    enabled: !!movieId,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (!data) {
    return <View className="flex-1 items-center justify-center">No Data</View>;
  }

  return (
    <View className="flex-1 px-4 py-4">
      <Text className="font-bold text-2xl text-blue-600">{data.title}</Text>
      <Text className="my-2">{data.overview}</Text>

      <Image
        style={{
          width: "100%",
          height: 400,
        }}
        source={{
          uri: createPosterUrl(data.poster_path),
        }}
      />
      <View className="flex justify-center mt-3">
        <Button variant="secondary" onPress={() => navigation.navigate("Home")}>
          Go Home
        </Button>
      </View>
    </View>
  );
};

export default Details;
