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
import { DecimalAndOctal } from "../components/screens/converter/decimalAndOctal";
import { DecimalAndHexa } from "../components/screens/converter/decimalAndHexa";
import { OctalAndHexa } from "../components/screens/converter/octalAndHexa";

const Stack = createStackNavigator<RootStackParamList>();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BinaryConverter"
          component={BinaryConverterRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OctalConverter"
          component={OctalConverterRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DecimalConverter"
          component={DecimalConverterRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HexaConverter"
          component={HexaConverterRoutes}
          options={{ headerShown: false }}
        />

        {/* Navigator Converter Biner */}
        <Stack.Screen name="BtD" options={{ headerShown: false }}>
          {(props) => <DecimalAndBinary {...props} mode="Biner To Decimal" />}
        </Stack.Screen>
        <Stack.Screen name="BtO" options={{ headerShown: false }}>
          {(props) => <OctalAndBinary {...props} mode="Biner To Octal" />}
        </Stack.Screen>
        <Stack.Screen name="BtH" options={{ headerShown: false }}>
          {(props) => <HexaAndBinary {...props} mode="Biner To Hexa" />}
        </Stack.Screen>

        {/* Navigator Converter Desimal */}
        <Stack.Screen name="DtB" options={{ headerShown: false }}>
          {(props) => <DecimalAndBinary {...props} mode="Decimal To Biner" />}
        </Stack.Screen>
        <Stack.Screen name="DtO" options={{ headerShown: false }}>
          {(props) => <DecimalAndOctal {...props} mode="Decimal To Octal" />}
        </Stack.Screen>
        <Stack.Screen name="DtH" options={{ headerShown: false }}>
          {(props) => <DecimalAndHexa {...props} mode="Decimal To Hexa" />}
        </Stack.Screen>

        {/* Navigator Converter Oktal */}
        <Stack.Screen name="OtB" options={{ headerShown: false }}>
          {(props) => <OctalAndBinary {...props} mode="Octal To Biner" />}
        </Stack.Screen>
        <Stack.Screen name="OtD" options={{ headerShown: false }}>
          {(props) => <DecimalAndOctal {...props} mode="Octal To Decimal" />}
        </Stack.Screen>
        <Stack.Screen name="OtH" options={{ headerShown: false }}>
          {(props) => <OctalAndHexa {...props} mode="Octal To Hexa" />}
        </Stack.Screen>

        {/* Navigator Converter Hexa */}
        <Stack.Screen name="HtB" options={{ headerShown: false }}>
          {(props) => <HexaAndBinary {...props} mode="Hexa To Biner" />}
        </Stack.Screen>
        <Stack.Screen name="HtO" options={{ headerShown: false }}>
          {(props) => <OctalAndHexa {...props} mode="Hexa To Biner" />}
        </Stack.Screen>
        <Stack.Screen name="HtD" options={{ headerShown: false }}>
          {(props) => <DecimalAndHexa {...props} mode="Hexa To Decimal" />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
