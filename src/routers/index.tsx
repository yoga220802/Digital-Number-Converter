import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../components/screens/routes/mainScreen";
import BinaryConverterRoutes from "../components/screens/routes/binaryConverterRoutes";
import { RootStackParamList } from "../utils/routerUtils";
import OctalConverterRoutes from "../components/screens/routes/octalConverterRoutes";
import DecimalConverterRoutes from "../components/screens/routes/decimalConverterRoutes";
import HexaConverterRoutes from "../components/screens/routes/hexaConverterRoutes";
import { DecimalAndBinary } from "../components/screens/converter/decimalAndBinary";
import { HexaAndBinary } from "../components/screens/converter/hexaAndBinary";
import { OctalAndBinary } from "../components/screens/converter/octalAndBinary";

// function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//       <Button
//         color="red"
//         title="Go to Profile"
//         onPress={() => navigation.navigate("Profiles")}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }: { navigation: DetailsScreenNavigationProp }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push("Details")}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to the first screen in the stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

// function ProfilesScreen({ navigation }: { navigation: ProfilesScreenNavigationProp }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Profile Screen</Text>
//       <Button
//         color="black"
//         title="Go to Home"
//         onPress={() => navigation.navigate("Home")}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         color="green"
//         title="Go back to the first screen in the stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

const Stack = createStackNavigator<RootStackParamList>();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
  <Stack.Screen name="BinaryConverter" component={BinaryConverterRoutes} options={{ headerShown: false }} />
  <Stack.Screen name="OctalConverter" component={OctalConverterRoutes} options={{ headerShown: false }} />
  <Stack.Screen name="DecimalConverter" component={DecimalConverterRoutes} options={{ headerShown: false }} />
  <Stack.Screen name="HexaConverter" component={HexaConverterRoutes} options={{ headerShown: false }} />
  <Stack.Screen name="DaB" options={{headerShown: false}}>
    {(props) => <DecimalAndBinary {...props} mode="Biner To Decimal" />}
    
  </Stack.Screen>
</Stack.Navigator>

    </NavigationContainer>
  );
}

export default StackNavigation;
