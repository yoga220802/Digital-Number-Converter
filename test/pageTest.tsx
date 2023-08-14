import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
  ImageSourcePropType,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { customFonts } from "../src/styles/fonts";
import { DigitalConverter } from "../src/components/modules";
import {
  configureKeyboardListeners,
  inputFocusHandler,
  toggleKeyboardVisibility,
} from "../src/utils/keyboardUtils";
import BinaryFloatingKeyboard from "../src/components/CustomKeyboard/binaryKeyboard";
import DecimalFloatingKeyboard from "../src/components/CustomKeyboard/decimalKeyboard";
import { Result, converterScreen } from "../src/utils/customDataTypes";

const reverseIcon: ImageSourcePropType = require("../assets/images/icons/reverseIcon.png");

const TestPage: React.FC<converterScreen> = ({ mode }) => {
  const [inputText, setInputText] = useState("");
  const [konversi, setKonversi] = useState("");
  const [penjelasan, setPenjelasan] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [currentMode, setCurrentMode] = useState(mode);

  const keyboardYValue = useRef(new Animated.Value(0)).current;
  const inputTextYValue = useRef(new Animated.Value(0)).current;

  const fontsLoaded = customFonts();

  const handleReverse = () => {
    if (currentMode === "Decimal To Biner") {
      setCurrentMode("Biner To Decimal");
    } else if (currentMode === "Biner To Decimal") {
      setCurrentMode("Decimal To Biner");
    }
    handleClear()
    setInputText(konversi);
  };

  const handleSubmit = () => {
    let conversion: Result = {
      converted: "",
      explanation: "",
    };
    if (currentMode === "Decimal To Biner") {
      conversion = DigitalConverter.Decimal(inputText).toBinary();
    } else if (currentMode === "Biner To Decimal") {
      conversion = DigitalConverter.Binary(inputText).toDecimal();
    }

    setKonversi(conversion.converted);
    setPenjelasan(conversion.explanation);
    setKeyboardVisible(false);
  };

  const handleClear = () => {
    setInputText("")
    setKonversi("")
    setPenjelasan("")
  }

  const handleKeyPress = (value: string) => {
    if (value === "delete") {
      setInputText(inputText.slice(0, -1));
    } else if (value === "submit") {
      handleSubmit();
    } else {
      setInputText(inputText + value);
    }
  };

  useEffect(() => {
    const cleanUpListeners = configureKeyboardListeners(
      inputTextYValue,
      keyboardYValue
    );

    return cleanUpListeners;
  }, []);

  const handleInputFocus = () => {
    inputFocusHandler(setKeyboardVisible, keyboardYValue);
  };

  if (!fontsLoaded) {
    return <Text>Fonts Is loading</Text>;
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        extraHeight={150}
      >
        <View style={styles.contentLayer}>
          <Text style={styles.textPenjelasan}>{currentMode}</Text>
          <View>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: "#00C2FF" }}
              onPress={() => {
                handleReverse();
              }}
            >
              <Image
                source={reverseIcon}
                style={{ height: 15, width: 19.22 }}
              />
            </TouchableOpacity>
          </View>
          <TouchableWithoutFeedback onPress={handleInputFocus}>
            <View style={styles.input}>
              <Text>
                {inputText === "" ? "Masukan Bilangan Desimal" : inputText}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <SafeAreaView style={styles.input}>
            <Text>{konversi}</Text>
          </SafeAreaView>
          <SafeAreaView
            style={{
              ...styles.input,
              height: "auto",
            }}
          >
            <Text>{penjelasan}</Text>
          </SafeAreaView>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.overlayLayer}>
        <View
          style={{
            ...styles.showHideButton,
            opacity: keyboardVisible ? 1 : 0.3,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              toggleKeyboardVisibility(
                keyboardVisible,
                setKeyboardVisible,
                keyboardYValue
              );
            }}
          >
            <Text style={styles.buttonText}>
              {keyboardVisible ? "Hide\nKeyboard" : "Show\nKeyboard"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          {currentMode === "Decimal To Biner" && (
            <DecimalFloatingKeyboard
              isVisible={keyboardVisible}
              action={handleKeyPress}
            />
          )}
          {currentMode === "Biner To Decimal" && (
            <BinaryFloatingKeyboard
              isVisible={keyboardVisible}
              action={handleKeyPress}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "background color",
  },
  contentContainer: {
    flexGrow: 1,
  },
  contentLayer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 100,
    marginBottom: 50,
    alignItems: "center",
    alignContent: "center",
  },
  overlayLayer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  textPenjelasan: {
    fontFamily: "JetBrainsMono_800ExtraBold",
    marginTop: 25,
    color: "white",
  },
  button: {
    marginTop: 10,
    padding: 10,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 5,
  },
  input: {
    backgroundColor: "#fff",
    height: 50,
    width: 250,
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#000000",
  },
  showHideButton: {
    // position: "absolute",
    bottom: 10, // Sesuaikan posisi vertikal tombol
    backgroundColor: "#a2cee0",
    // paddingVertical: 5,
    // paddingHorizontal: 10,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
    borderTopColor: "red",
    borderBottomColor: "red",
  },
});

export default TestPage;
