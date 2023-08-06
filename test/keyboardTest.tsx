import React, { useState, useRef, useEffect } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  Animated,
  Easing,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import BinaryKeyboard from "../src/utils/CustomKeyboard/binaryKeyboard";
import OctalKeyboard from "../src/utils/CustomKeyboard/octalKeyboard";
import DecimalKeyboard from "../src/utils/CustomKeyboard/decimalKeyboard";
import HexaKeyboard from "../src/utils/CustomKeyboard/hexaKeyboard";

const KeyboardTest = () => {
  const [inputValue, setInputValue] = useState("");
  const [mode, setMode] = useState("binary");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const keyboradYValue = useRef(new Animated.Value(0)).current;
  const inputTextYValue = useRef(new Animated.Value(0)).current;

  const handleKeyPress = (value: string) => {
    if (value !== "delete") {
      setInputValue(inputValue + value);
    } else {
      setInputValue(inputValue.slice(0, -1));
    }
  };

  const switchModeToBinary = () => {
    setMode("binary");
    setInputValue("");
    setKeyboardVisible(false);
  };

  const switchModeToOctal = () => {
    setMode("octal");
    setInputValue("");
    setKeyboardVisible(false);
  };

  const switchModeToDecimal = () => {
    setMode("decimal");
    setInputValue("");
    setKeyboardVisible(false);
  };

  const switchModeToHexa = () => {
    setMode("hexa");
    setInputValue("");
    setKeyboardVisible(false);
  };

  const toggleKeyboardVisibility = () => {
    if (keyboardVisible) {
      Animated.timing(keyboradYValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start(() => {
        setKeyboardVisible(false);
      });
    } else {
      setKeyboardVisible(true);
      Animated.timing(keyboradYValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }).start();
    }
  };

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      Animated.timing(inputTextYValue, {
        toValue: -1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.cubic),
      }).start();
    });

    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      Animated.timing(inputTextYValue, {
        toValue: 10,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.cubic),
      }).start();
    });

    return () => {
      keyboardHideListener.remove();
      keyboardShowListener.remove();
    };
  }, []);

  const handleInputFocus = () => {
    setKeyboardVisible(true);
    Animated.timing(keyboradYValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraHeight={150}
    >
      <TouchableWithoutFeedback onPress={handleInputFocus}>
        <Animated.View
          style={{
            transform: [
              { translateY: inputTextYValue }, // Animasi input text
              {
                translateY: keyboradYValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -30],
                }), // Animasi keyboard
              },
            ],
          }}
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
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        onPress={toggleKeyboardVisibility}
        style={{ ...styles.showHide, opacity: keyboardVisible ? 1 : 0.3 }}
      >
        <Text style={styles.buttonText}>
          {keyboardVisible ? "Hide\nKeyboard" : "Show\nKeyboard"}
        </Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          transform: [
            {
              translateY: keyboradYValue.interpolate({
                inputRange: [0, 1],
                outputRange: [30, -30],
              }),
            },
          ],
        }}
      >
        {keyboardVisible && (
          <Animated.View style={{ opacity: keyboradYValue }}>
            {mode === "binary" ? (
              <>
                <BinaryKeyboard action={handleKeyPress} value="" />
                <Button title="Switch To Octal" onPress={switchModeToOctal} />
                <Button
                  title="Switch To Decimal"
                  onPress={switchModeToDecimal}
                />
                <Button title="Switch To Hexa" onPress={switchModeToHexa} />
              </>
            ) : mode === "octal" ? (
              <>
                <OctalKeyboard action={handleKeyPress} value="" />
                <Button title="Switch To Binary" onPress={switchModeToBinary} />
                <Button
                  title="Switch To Decimal"
                  onPress={switchModeToDecimal}
                />
                <Button title="Switch To Hexa" onPress={switchModeToHexa} />
              </>
            ) : mode === "decimal" ? (
              <>
                <DecimalKeyboard action={handleKeyPress} value="" />
                <Button title="Switch To Binary" onPress={switchModeToBinary} />
                <Button title="Switch To Octal" onPress={switchModeToOctal} />
                <Button title="Switch To Hexa" onPress={switchModeToHexa} />
              </>
            ) : (
              <>
                <HexaKeyboard action={handleKeyPress} value="" />
                <Button title="Switch To Binary" onPress={switchModeToBinary} />
                <Button title="Switch To Octal" onPress={switchModeToOctal} />
                <Button
                  title="Switch To Decimal"
                  onPress={switchModeToDecimal}
                />
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
    padding: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "white",
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
