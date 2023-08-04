import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { CustomKeyboardProps } from "../customDataTypes";

const KeyboardButton: React.FC<CustomKeyboardProps> = ({ value, action }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => action(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default KeyboardButton;
