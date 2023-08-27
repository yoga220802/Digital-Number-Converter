import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageSourcePropType,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { customFonts } from "../styles/fonts";
import { DigitalConverter } from "../components/modules";
import {
  configureKeyboardListeners,
  inputFocusHandler,
  toggleKeyboardVisibility,
} from "./keyboardUtils";
import BinaryFloatingKeyboard from "../components/CustomKeyboard/binaryKeyboard";
import DecimalFloatingKeyboard from "../components/CustomKeyboard/decimalKeyboard";
import { Result, ConverterScreen } from "./customDataTypes";
import OctalFloatingKeyboard from "../components/CustomKeyboard/octalKeyboard";
import HexaFloatingKeyboard from "../components/CustomKeyboard/hexaKeyboard";

const reverseIcon: ImageSourcePropType = require("../assets/images/icons/reverseIcon.png");

const BaseConverter: React.FC<ConverterScreen> = ({
  mode,
  submitHandler,
  reverseHandler,
}) => {
  const [inputText, setInputText] = useState("");
  const [konversi, setKonversi] = useState("");
  const [penjelasan, setPenjelasan] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [currentMode, setCurrentMode] = useState(mode);

  const keyboardYValue = useRef(new Animated.Value(0)).current;
  const inputTextYValue = useRef(new Animated.Value(0)).current;

  const opacityReverse = useRef(new Animated.Value(1)).current;
  const opacityTextPenjelasan = useRef(new Animated.Value(1)).current;
  const opacityKonversi = useRef(new Animated.Value(1)).current;
  const opacityCurrentMode = useRef(new Animated.Value(1)).current;

  const fontsLoaded = customFonts();

  const handleReverse = () => {
    const newMode = reverseHandler();

    Animated.parallel([
      Animated.timing(opacityReverse, { toValue: 0, duration: 500, useNativeDriver: false }),
      Animated.timing(opacityTextPenjelasan, { toValue: 0, duration: 500, useNativeDriver: false }),
      Animated.timing(opacityKonversi, { toValue: 0, duration: 500, useNativeDriver: false }),
      Animated.timing(opacityCurrentMode, { toValue: 0, duration: 500, useNativeDriver: false }),
    ]).start(() => {
      handleReset();
      setInputText(konversi.split(" ").join(""));

      Animated.parallel([
        Animated.timing(opacityReverse, { toValue: 1, duration: 500, useNativeDriver: false }),
        Animated.timing(opacityTextPenjelasan, { toValue: 1, duration: 500, useNativeDriver: false }),
        Animated.timing(opacityKonversi, { toValue: 1, duration: 500, useNativeDriver: false }),
        Animated.timing(opacityCurrentMode, { toValue: 1, duration: 500, useNativeDriver: false }),
      ]).start();

      setCurrentMode(newMode);
    });
  };

  const handleSubmit = () => {
    const conversion = submitHandler(inputText);

    setKonversi(conversion.converted);
    setPenjelasan(conversion.explanation);
    setKeyboardVisible(false);
  };

  const handleReset = () => {
    setInputText("");
    setKonversi("");
    setPenjelasan("");
  };

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
          <View
            style={{
              ...styles.input,
              backgroundColor: undefined,
            }}
          >
            <Animated.Text
              style={{
                ...styles.textStyle,
                fontSize: 23,
                opacity: opacityCurrentMode,
              }}
            >
              {currentMode}
            </Animated.Text>
          </View>
          <View>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: "#00C2FF" }}
              onPress={handleReverse}
            >
              <Image source={reverseIcon} style={{ height: 15, width: 19.22 }} />
            </TouchableOpacity>
          </View>
          <TouchableWithoutFeedback onPress={handleInputFocus}>
            <View style={styles.input}>
              <Text
                style={{
                  ...styles.textStyle,
                  fontSize: 10,
                  marginBottom: 10,
                  color: "#b6b2b2",
                }}
              >
                Masukan Bilangan Digital
              </Text>
              <Text style={{ ...styles.textStyle, color: "#000" }}>
                {inputText === "" ? "Masukan Bilangan Digital" : inputText}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: "#00C637" }}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: "#ff0000",
                marginLeft: 25,
              }}
              onPress={handleReset}
            >
              <Text style={styles.buttonText}>RESET</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              ...styles.input,
              backgroundColor: "#2f2f30",
            }}
          >
            <Text
              style={{
                ...styles.textStyle,
                fontSize: 10,
                marginBottom: 10,
                color: "#888686",
              }}
            >
              Hasil Konversi
            </Text>
            <Animated.Text
              style={{
                ...styles.textStyle,
                opacity: opacityKonversi,
              }}
            >
              {konversi}
            </Animated.Text>
          </View>
          <View
            style={{
              ...styles.input,
              backgroundColor: "#4e4c4c",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                ...styles.textStyle,
                fontSize: 10,
                marginBottom: 10,
                color: "#888686",
              }}
            >
              Penjelasan
            </Text>
            <Animated.Text
              style={{
                ...styles.textStyle,
                opacity: opacityTextPenjelasan,
              }}
            >
              {penjelasan}
            </Animated.Text>
          </View>
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
            <Text
              style={{
                ...styles.buttonText,
                color: keyboardVisible ? "#000" : "#fff",
              }}
            >
              {keyboardVisible ? "Hide\nKeyboard" : "Show\nKeyboard"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
        {currentMode.split(" ")[0] === "Biner"  && (
            <BinaryFloatingKeyboard
              isVisible={keyboardVisible}
              action={handleKeyPress}
            />
          )}
          {currentMode.split(" ")[0] === "Octal"  && (
            <OctalFloatingKeyboard
              isVisible={keyboardVisible}
              action={handleKeyPress}
            />
          )}
          {currentMode.split(" ")[0] === "Decimal"  && (
            <DecimalFloatingKeyboard
              isVisible={keyboardVisible}
              action={handleKeyPress}
            />
          )}
          {currentMode.split(" ")[0] === "Hexadecimal"  && (
            <HexaFloatingKeyboard
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
    paddingTop: 75,
    paddingHorizontal: 100,
    marginBottom: 70,
    alignItems: "center",
    alignContent: "center",
  },
  textStyle: {
    fontFamily: "JetBrainsMono_800ExtraBold",
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
    height: "auto",
    width: 250,
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "JetBrainsMono_300Light",
  },
  showHideButton: {
    bottom: 10,
    backgroundColor: "#a2cee0",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
    borderTopColor: "red",
    borderBottomColor: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  overlayLayer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
});

export default BaseConverter;
