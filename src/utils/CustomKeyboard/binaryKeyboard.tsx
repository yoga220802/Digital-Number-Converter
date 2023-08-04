import React from "react";
import { View, StyleSheet } from "react-native";

import { CustomKeyboardProps } from "../customDataTypes";
import KeyboardButton from "./keyboardButton";

const binaryKeyboard: React.FC<CustomKeyboardProps> = ({ action }) => {
  const handleKeyPress = (value: string) => {
    action(value);
  };

  return (
    <View style={styles.container}>
      <KeyboardButton value="0" action={handleKeyPress} />
      <KeyboardButton value="1" action={handleKeyPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#00b2ff",
    width: 300,
    margin: 10,
    borderRadius: 10,
  },
});

export default binaryKeyboard;
