import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
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

const reverseIcon: ImageSourcePropType = require("../assets/images/icons/reverseIcon.png");

const TestPage: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [konversi, setKonversi] = useState("");
  const [penjelasan, setPenjelasan] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const keyboardYValue = useRef(new Animated.Value(0)).current;
  const inputTextYValue = useRef(new Animated.Value(0)).current;

  const fontsLoaded = customFonts();

  const handleSubmit = () => {
    const decimalToBinary = DigitalConverter.Decimal(inputText).toBinary();
    setKonversi(decimalToBinary.converted);
    setPenjelasan(decimalToBinary.explanation);

    setKeyboardVisible(false);
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
          <Text style={styles.textPenjelasan}>Desimal Ke Biner</Text>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "#00C2FF" }}
          >
            <Image source={reverseIcon} style={{ height: 15, width: 19.22 }} />
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={handleInputFocus}>
            <TextInput
              style={styles.input}
              value={inputText}
              placeholder="Masukan Bilangan Desimal"
              keyboardType="numeric"
              editable={false}
            />
          </TouchableWithoutFeedback>
          <SafeAreaView style={{ ...styles.input, width: 200 }}>
            <Text>{konversi}</Text>
          </SafeAreaView>
          <SafeAreaView style={{ ...styles.input, width: 200, height: "auto", marginBottom: 100 }}>
            <Text>{penjelasan}</Text>
          </SafeAreaView>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.overlayLayer}>
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

        <DecimalFloatingKeyboard
          isVisible={keyboardVisible}
          action={handleKeyPress}
        />
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
    paddingHorizontal: 50,
    alignItems: "center",
  },
  overlayLayer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
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
    maxWidth: 200,
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
  },
  buttonText: {
    textAlign: "center",
    color: "#000000",
  },
});

export default TestPage;
