import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/components/screens/routes/mainScreen";
import StackNavigation from "./src/routers";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Main" component={MainScreen} />
    //     {/* Add more screens as needed */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    <StackNavigation/>
  );
}
