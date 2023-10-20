import { createPosterUrl } from "@/api";
import { FC } from "react";
import { Text, Image, Pressable } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

export interface MovieCardProps {
  title: string;
  releaseDate: string;
  posterPath: string;
  onPress: () => void;
}

const MovieCard: FC<MovieCardProps> = ({
  title,
  releaseDate,
  posterPath,
  onPress,
}) => {
  return (
    <Pressable
      onPress={() => onPress()}
      className="flex flex-col gap-4 rounded-md p-5 bg-black mb-20 mx-4"
    >
      <Text className="text-2xl font-bold text-white">{title}</Text>
      <Text className="text-white">{releaseDate}</Text>
      <Image
        style={{
          width: screenWidth - 7 * 16,
          height: 300,
        }}
        source={{
          uri: createPosterUrl(posterPath),
        }}
      />
    </Pressable>
  );
};

export default MovieCard;
