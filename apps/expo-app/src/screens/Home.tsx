import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "@/components";
import { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: FC<Props> = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-white text-2xl">Hello world</Text>
      <View className="flex gap-3 flex-row flex-wrap justify-center mt-3">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button
          onPress={() => navigation.navigate("Details")}
          variant="danger"
          size="xl"
        >
          Go To Details
        </Button>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default Home;
