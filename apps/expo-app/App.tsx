import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Details } from "@/screens";
import type { RootStackParamList } from "@/screens";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          screenOptions={{
            animation: "none",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
