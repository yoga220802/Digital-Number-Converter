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

import styles from "../styles/screenStyles"
import { customFonts } from "../styles/fonts";
import {
  configureKeyboardListeners,
  inputFocusHandler,
  toggleKeyboardVisibility,
} from "./keyboardUtils";
import BinaryFloatingKeyboard from "../components/CustomKeyboard/binaryKeyboard";
import DecimalFloatingKeyboard from "../components/CustomKeyboard/decimalKeyboard";
import { ConverterScreen } from "./customDataTypes";
import OctalFloatingKeyboard from "../components/CustomKeyboard/octalKeyboard";
import HexaFloatingKeyboard from "../components/CustomKeyboard/hexaKeyboard";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const reverseIcon: ImageSourcePropType = require("../../assets/images/icons/reverseIcon.png");

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
      Animated.timing(opacityReverse, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(opacityTextPenjelasan, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(opacityKonversi, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(opacityCurrentMode, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(() => {
      handleReset();
      setInputText(konversi.split(" ").join(""));

      Animated.parallel([
        Animated.timing(opacityReverse, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(opacityTextPenjelasan, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(opacityKonversi, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(opacityCurrentMode, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
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
        extraHeight={responsiveHeight(45)}
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
                fontSize: responsiveFontSize(3),
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
              <Image
                source={reverseIcon}
                style={{ height: responsiveHeight(3), width: responsiveWidth(5.7) }}
              />
            </TouchableOpacity>
          </View>
          <TouchableWithoutFeedback onPress={handleInputFocus}>
            <View style={styles.input}>
              <Text
                style={{
                  ...styles.textStyle,
                  fontSize: responsiveFontSize(1.4),
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
              <Text style={styles.convertButtonText}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: "#ff0000",
                marginLeft: 25,
              }}
              onPress={handleReset}
            >
              <Text style={styles.convertButtonText}>RESET</Text>
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
                fontSize: responsiveFontSize(1.4),
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
                fontSize: responsiveFontSize(1.4),
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
                ...styles.convertButtonText,
                color: keyboardVisible ? "#000" : "#fff",
              }}
            >
              {keyboardVisible ? "Hide\nKeyboard" : "Show\nKeyboard"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          {currentMode.split(" ")[0] === "Biner" && (
            <BinaryFloatingKeyboard
              isVisible={keyboardVisible}
              action={handleKeyPress}
            />
          )}
          {currentMode.split(" ")[0] === "Octal" && (
            <OctalFloatingKeyboard
              isVisible={keyboardVisible}
              action={handleKeyPress}
            />
          )}
          {currentMode.split(" ")[0] === "Decimal" && (
            <DecimalFloatingKeyboard
              isVisible={keyboardVisible}
              action={handleKeyPress}
            />
          )}
          {currentMode.split(" ")[0] === "Hexa" && (
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

export default BaseConverter;
