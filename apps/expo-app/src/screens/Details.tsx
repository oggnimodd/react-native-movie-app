import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { FC } from "react";
import { Button } from "@/components";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const Details: FC<Props> = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Hello from details</Text>
      <View className="flex justify-center mt-3">
        <Button variant="secondary" onPress={() => navigation.navigate("Home")}>
          Go Home
        </Button>
      </View>
    </View>
  );
};

export default Details;
