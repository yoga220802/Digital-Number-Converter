import React from "react";
import { View, Animated } from "react-native";

import keyboardStyles from "../../styles/keyboardStyleSheets";
import { CustomKeyboardProps, floatingKeyboardProps } from "../../utils/customDataTypes";
import KeyboardButton from "./keyboardButton";

const DecimalFloatingKeyboard: React.FC<floatingKeyboardProps> = ({
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
        <KeyboardButton value="1" action={handleKeyPress} />
        <KeyboardButton value="2" action={handleKeyPress} />
        <KeyboardButton value="3" action={handleKeyPress} />
      </View>
      <View style={keyboardStyles.row}>
        <KeyboardButton value="4" action={handleKeyPress} />
        <KeyboardButton value="5" action={handleKeyPress} />
        <KeyboardButton value="6" action={handleKeyPress} />
      </View>
      <View style={keyboardStyles.row}>
        <KeyboardButton value="7" action={handleKeyPress} />
        <KeyboardButton value="8" action={handleKeyPress} />
        <KeyboardButton value="9" action={handleKeyPress} />
      </View>
      <View style={keyboardStyles.row}>
        <KeyboardButton value="0" action={handleKeyPress} />
        <KeyboardButton value="delete" action={handleKeyPress} />
        <KeyboardButton value="submit" action={handleKeyPress} />
      </View>
    </Animated.View>
  );
};

export default DecimalFloatingKeyboard;
