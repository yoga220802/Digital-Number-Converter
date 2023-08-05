import React, { useState, useRef } from "react";
import { TextInput, View, StyleSheet, Button, TouchableOpacity, Text, Animated } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import BinaryKeyboard from "../src/utils/CustomKeyboard/binaryKeyboard";
import OctalKeyboard from "../src/utils/CustomKeyboard/octalKeyboard";
import DecimalKeyboard from "../src/utils/CustomKeyboard/decimalKeyboard";
import HexaKeyboard from "../src/utils/CustomKeyboard/hexaKeyboard";

const KeyboardTest = () => {
  const [inputValue, setInputValue] = useState("");
  const [mode, setMode] = useState("binary");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const opacityValue = useRef(new Animated.Value(0)).current;

  const handleKeyAdd = (value: string) => {
    setInputValue(inputValue + value);
  };

  const switchModeToBinary = () => {
    setMode("binary");
    setInputValue("");
  };

  const switchModeToOctal = () => {
    setMode("octal");
    setInputValue("");
  };

  const switchModeToDecimal = () => {
    setMode("decimal");
    setInputValue("");
  };

  const switchModeToHexa = () => {
    setMode("hexa");
    setInputValue("");
  };

  const toggleKeyboardVisibility = () => {
    if (keyboardVisible) {
      Animated.timing(opacityValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setKeyboardVisible(false);
      });
    } else {
      setKeyboardVisible(true);
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraHeight={150}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          placeholder={
            mode === "binary"
            ? "Masukan Binary"
            : mode === "octal"
            ? "Masukan Octal"
            : mode === "decimal"
            ? "Masukan Desimal"
            : "Masukan Hexa"
          }
          keyboardType="numeric"
          editable={false}
        />
      </View>
      <TouchableOpacity onPress={toggleKeyboardVisibility} style={{...styles.showHide, opacity: keyboardVisible ? 1 : 0.1}}>
        <Text style={styles.buttonText}>{keyboardVisible ? "Hide\nKeyboard" : "Show\nKeyboard"}</Text>
      </TouchableOpacity>
      <Animated.View style={{ opacity: opacityValue }}>
        {keyboardVisible && (
          <Animated.View style={{ opacity: opacityValue }}>
            {mode === "binary" ? (
              <>
                <BinaryKeyboard action={handleKeyAdd} value="" />
                <Button title="Switch To Octal" onPress={switchModeToOctal} />
                <Button title="Switch To Decimal" onPress={switchModeToDecimal} />
                <Button title="Switch To Hexa" onPress={switchModeToHexa} />
              </>
            ) : mode === "octal" ? (
              <>
                <OctalKeyboard action={handleKeyAdd} value="" />
                <Button title="Switch To Binary" onPress={switchModeToBinary} />
                <Button title="Switch To Decimal" onPress={switchModeToDecimal} />
                <Button title="Switch To Hexa" onPress={switchModeToHexa} />
              </>
            ) : mode === "decimal" ? (
              <>
                <DecimalKeyboard action={handleKeyAdd} value="" />
                <Button title="Switch To Binary" onPress={switchModeToBinary} />
                <Button title="Switch To Octal" onPress={switchModeToOctal} />
                <Button title="Switch To Hexa" onPress={switchModeToHexa} />
              </>
            ) : (
              <>
                <HexaKeyboard action={handleKeyAdd} value="" />
                <Button title="Switch To Binary" onPress={switchModeToBinary} />
                <Button title="Switch To Octal" onPress={switchModeToOctal} />
                <Button title="Switch To Decimal" onPress={switchModeToDecimal} />
              </>
            )}
          </Animated.View>
        )}
      </Animated.View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
  },

  showHide: {
    position: "absolute",
    bottom: 10, // Sesuaikan posisi vertikal tombol
    backgroundColor: "#a2cee0",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
    borderTopColor: "red",
    borderBottomColor: "red",
  },

  buttonText: {
    textAlign: "center",
    color: "#000000",
  },
});

export default KeyboardTest;
