import React , {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import MainSreen from './src/screens/mainScreen';
import DecimalToBinary from './src/components/screens/binary/digitalToBiner';
import KeyboardTest from './test/keyboardTest';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainSreen/> */}
      {/* <DecimalToBinary/> */}
      <KeyboardTest/>
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
