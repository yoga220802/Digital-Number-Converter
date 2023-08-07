import React from "react";
import { View } from "react-native";

import keyboardStyles from "../../styles/keyboardStyleSheets";
import { CustomKeyboardProps } from "../../utils/customDataTypes";
import KeyboardButton from "./keyboardButton";

const binaryKeyboard: React.FC<CustomKeyboardProps> = ({ action }) => {
  const handleKeyPress = (value: string) => {
    action(value);
  };

  return (
    <View style={keyboardStyles.container}>
      <View style={keyboardStyles.row}>
      <KeyboardButton value="0" action={handleKeyPress} />
      <KeyboardButton value="1" action={handleKeyPress} />
      </View>
      <View style={keyboardStyles.row}>
        <KeyboardButton value="delete" action={handleKeyPress} />
      </View>
    </View>
  );
};

export default binaryKeyboard;
