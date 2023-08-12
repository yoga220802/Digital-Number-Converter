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
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Import komponen floating keyboard
import BinaryFloatingKeyboard from "../src/components/CustomKeyboard/binaryKeyboard";
import OctalFloatingKeyboard from "../src/components/CustomKeyboard/octalKeyboard";
import DecimalFloatingKeyboard from "../src/components/CustomKeyboard/decimalKeyboard";
import HexaFloatingKeyboard from "../src/components/CustomKeyboard/hexaKeyboard";

// Import fungsi utilitas keyboard
import {
  toggleKeyboardVisibility,
  configureKeyboardListeners,
  inputFocusHandler,
} from "../src/utils/keyboardUtils";

// Import modul konversi digital
import { DigitalConverter } from "../src/components/modules/index";

const KeyboardTest = () => {
  const [desimal, setDesimal] = useState("");
  const [biner, setBiner] = useState("");
  const [penjelasan, setPenjelasan] = useState("");
  const [mode, setMode] = useState("binary");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const keyboradYValue = useRef(new Animated.Value(0)).current;
  const inputTextYValue = useRef(new Animated.Value(0)).current;

  const handleKeyPress = (value: string) => {
    if (value === "delete") {
      setDesimal(desimal.slice(0, -1));
    } else if (value === "submit") {
      handleSubmit();
    } else {
      setDesimal(desimal + value);
    }
  };

  const handleSubmit = () => {
    const decimalToBinary = DigitalConverter.Decimal(desimal).toBinary();
    setBiner(decimalToBinary.converted);
    setPenjelasan(decimalToBinary.explanation);
    // Tampilkan bagian hasil konversi dan penjelasan
    setConversionVisible(true);
    setKeyboardVisible(false);
  };

  const switchModeToBinary = () => {
    setMode("binary");
    setDesimal("");
    setKeyboardVisible(false);
  };

  const switchModeToOctal = () => {
    setMode("octal");
    setDesimal("");
    setKeyboardVisible(false);
  };

  const switchModeToDecimal = () => {
    setMode("decimal");
    setDesimal("");
    setKeyboardVisible(false);
  };

  const switchModeToHexa = () => {
    setMode("hexa");
    setDesimal("");
    setKeyboardVisible(false);
  };

  const handleInputFocus = () => {
    inputFocusHandler(setKeyboardVisible, keyboradYValue);
  };

  // State untuk mengendalikan visibilitas hasil konversi dan penjelasan
  const [conversionVisible, setConversionVisible] = useState(false);

  useEffect(() => {
    const cleanUpListeners = configureKeyboardListeners(
      inputTextYValue,
      keyboradYValue
    );
    return cleanUpListeners;
  }, []);

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
              value={desimal}
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
      {/* Tombol-tombol untuk berpindah mode keyboard */}
      <View style={styles.modeButtons}>
        <Button title="Binary" onPress={switchModeToBinary} />
        <Button title="Octal" onPress={switchModeToOctal} />
        <Button title="Decimal" onPress={switchModeToDecimal} />
        <Button title="Hexa" onPress={switchModeToHexa} />
      </View>
      {/* Bagian hasil konversi */}
      
        <Animated.View
          style={{
            ...styles.inputContainer,
            opacity: 1,
          }}
        >
          <SafeAreaView>
            <Text>{biner === "" ? "Hasil Konversi" : biner}</Text>
          </SafeAreaView>
        </Animated.View>
      
      {/* Bagian penjelasan */}
      
        <View
          style={{
            ...styles.inputContainer,
            opacity: 1,
          }}
        >
          <SafeAreaView>
            <Text>{penjelasan === "" ? "Penjelasan" : penjelasan}</Text>
          </SafeAreaView>
        </View>
      
      {/* Floating Binary Keyboard */}
      <BinaryFloatingKeyboard
        isVisible={keyboardVisible && mode === "binary"}
        action={handleKeyPress}
      />
      {/* Floating Octal Keyboard */}
      <OctalFloatingKeyboard
        isVisible={keyboardVisible && mode === "octal"}
        action={handleKeyPress}
      />
      {/* Floating Decimal Keyboard */}
      <DecimalFloatingKeyboard
        isVisible={keyboardVisible && mode === "decimal"}
        action={handleKeyPress}
      />
      {/* Floating Hexa Keyboard */}
      <HexaFloatingKeyboard
        isVisible={keyboardVisible && mode === "hexa"}
        action={handleKeyPress}
      />
      
      
      
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
    backgroundColor: "white",
  },
  input: {
    fontSize: 18,
  },
  showHide: {
    position: "absolute",
    bottom: 10,
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
  modeButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default KeyboardTest;
