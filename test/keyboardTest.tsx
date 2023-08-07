import React, {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

import {
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  Animated,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import BinaryKeyboard from "../src/components/CustomKeyboard/binaryKeyboard";
import OctalKeyboard from "../src/components/CustomKeyboard/octalKeyboard";
import DecimalKeyboard from "../src/components/CustomKeyboard/decimalKeyboard";
import HexaKeyboard from "../src/components/CustomKeyboard/hexaKeyboard";

import {
  toggleKeyboardVisibility,
  configureKeyboardListeners,
  inputFocusHandler,
} from "../src/utils/keyboardUtils";

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

  useEffect(() => {
    const cleanUpListeners = configureKeyboardListeners(
      inputTextYValue,
      keyboradYValue
    );
    return cleanUpListeners;
  }, []);

  const handleInputFocus = () => {
    inputFocusHandler(setKeyboardVisible, keyboradYValue);
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
        onPress={() =>
          toggleKeyboardVisibility(
            keyboardVisible,
            setKeyboardVisible,
            keyboradYValue
          )
        }
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
