import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import { CustomKeyboardProps } from "../customDataTypes";
import KeyboardButton from "./keyboardButton";

const octalKeyboard: React.FC<CustomKeyboardProps> = ({ action }) => {
  const handleKeyPress = (value: string) => {
    action(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <KeyboardButton value="0" action={handleKeyPress} />
        <KeyboardButton value="1" action={handleKeyPress} />
        <KeyboardButton value="2" action={handleKeyPress} />
      </View>
      <View style={styles.row}>
        <KeyboardButton value="3" action={handleKeyPress} />
        <KeyboardButton value="4" action={handleKeyPress} />
        <KeyboardButton value="5" action={handleKeyPress} />
      </View>
      <View style={styles.centeredRow}>
        <KeyboardButton value="6" action={handleKeyPress} />
        <KeyboardButton value="7" action={handleKeyPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    width: 300,
    backgroundColor: "#00b2ff",
    margin: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  centeredRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

export default octalKeyboard;
