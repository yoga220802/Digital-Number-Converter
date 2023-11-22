import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/components/screens/routes/mainScreen";
import StackNavigation from "./src/routers";
import CarouselTest from "./test/carousel";

export default function App() {
  return (
    // <View style={styles.container}>
      <StackNavigation />
      // <CarouselTest/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#1E1E1E',
    // alignItems: 'center',
    // justifyContent: "flex-start",
  },
});
