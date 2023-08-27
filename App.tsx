import React , {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import MainSreen from './src/screens/mainScreen';
// import DecimalToBinary from './src/components/screens/binary/digitalToBiner';
// import KeyboardTest from './test/keyboardTest';
import TestPage from './src/components/screens/converter/octalAndBinary';
import DecimalAndBinary from './src/components/screens/converter/decimalAndBinary';
import OctalAndBinary from './src/components/screens/converter/octalAndBinary';
import HexaAndBinary from './src/components/screens/converter/hexaAndBinary';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainSreen/> */}
      {/* <DecimalToBinary/> */}
      {/* <KeyboardTest/> */}
      <HexaAndBinary mode={"Hexa To Biner"} />
      {/* <DecimalAndBinary mode={"Decimal To Biner"} /> */}
      {/* <OctalAndBinary mode={"Octal To Biner"} /> */}
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
});
