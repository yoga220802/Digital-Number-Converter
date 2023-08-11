import React from "react";
import { View, Animated } from "react-native";

import keyboardStyles from "../../styles/keyboardStyleSheets";
import { CustomKeyboardProps, floatingKeyboardProps } from "../../utils/customDataTypes";
import KeyboardButton from "./keyboardButton";

const BinaryFloatingKeyboard: React.FC<floatingKeyboardProps> = ({
  action,
  isVisible,
}) => {
  const handleKeyPress = (value: string) => {
    action(value);
  };

  return (
    <Animated.View style={{
        ...keyboardStyles.floatingContainer,
        display: isVisible ? "flex" : "none",
      }}>
      <View style={keyboardStyles.row}>
        <KeyboardButton value="0" action={handleKeyPress} />
        <KeyboardButton value="1" action={handleKeyPress} />
      </View>
      <View style={keyboardStyles.row}>
        <KeyboardButton value="delete" action={handleKeyPress} />
        <KeyboardButton value="submit" action={handleKeyPress} />
      </View>
    </Animated.View>
  );
};

export default BinaryFloatingKeyboard;
