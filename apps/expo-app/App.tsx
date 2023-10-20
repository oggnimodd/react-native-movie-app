import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "@/components";

export default function App() {
  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Text className="text-white text-2xl">Hello world</Text>
      <View className="flex gap-3 flex-row flex-wrap justify-center mt-3">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger" size="xl">
          Danger Button
        </Button>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
