import React from "react";
import { TouchableOpacity, Text } from "react-native";

import keyboardStyles from "../../styles/keyboardStyleSheets";
import { CustomKeyboardProps } from "../customDataTypes";

const KeyboardButton: React.FC<CustomKeyboardProps> = ({ value, action }) => {
  return (
    <TouchableOpacity style={keyboardStyles.button} onPress={() => action(value)}>
      <Text style={keyboardStyles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};
export default KeyboardButton;
