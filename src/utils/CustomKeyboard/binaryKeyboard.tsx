import React from "react";
import { View } from "react-native";

import keyboardStyles from "../../styles/keyboardStyleSheets";
import { CustomKeyboardProps } from "../customDataTypes";
import KeyboardButton from "./keyboardButton";

const binaryKeyboard: React.FC<CustomKeyboardProps> = ({ action }) => {
  const handleKeyPress = (value: string) => {
    action(value);
  };

  return (
    <View style={{...keyboardStyles.container, flexDirection: "row"}}>
      <KeyboardButton value="0" action={handleKeyPress} />
      <KeyboardButton value="1" action={handleKeyPress} />
    </View>
  );
};

export default binaryKeyboard;
