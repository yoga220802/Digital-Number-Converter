import React, { useState, useEffect, useRef } from "react";
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

import { customFonts } from "../../../styles/fonts";
import {
  toggleKeyboardVisibility,
  configureKeyboardListeners,
  inputFocusHandler,
} from "../../../utils/keyboardUtils";
import { DigitalConverter } from "../../modules/index";
import DecimalKeyboard from "../../CustomKeyboard/decimalKeyboard";
import DecimalFloatingKeyboard from "../../CustomKeyboard/decimalKeyboard";

const reverseIcon: ImageSourcePropType = require("../../../../assets/images/icons/reverseIcon.png");

// Move font loading logic outside the component

const DecimalToBinary: React.FC = () => {
  const [desimal, setDesimal] = useState("");
  const [biner, setBiner] = useState("");
  const [penjelasan, setPenjelasan] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const keyboradYValue = useRef(new Animated.Value(0)).current;
  const inputTextYValue = useRef(new Animated.Value(0)).current;

  //   const fontsLoaded = customFonts();

  const handleSubmit = () => {
    const decimalToBinary = DigitalConverter.Decimal(desimal).toBinary();
    setBiner(decimalToBinary.converted);
    setPenjelasan(decimalToBinary.explanation);
  };

  const handleKeyPress = (value: string) => {
    if (value === "delete") {
      setDesimal(desimal.slice(0, -1));
    } else if (value === "submit") {
      handleSubmit();
    } else {
      setDesimal(desimal + value);
    }
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

  const handleReset = () => {
    setDesimal("");
    setBiner("Hasil Konversi");
    setPenjelasan("");
  };
  //   if (!fontsLoaded) {
  //     // Return a loading indicator or fallback UI
  //     return null;
  //   }

  return (
    <ScrollView>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        extraHeight={150}
      >
        <View>
          <Text
            style={{
              ...styles.textPenjelasan,
              fontFamily: "JetBrainsMono_800ExtraBold",
            }}
          >
            Desimal Ke Biner
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "#00C2FF" }}
          >
            <Image source={reverseIcon} style={{ height: 15, width: 19.22 }} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={handleInputFocus}>
              <View>
                <TextInput
                  style={styles.input}
                  value={desimal}
                  placeholder="Input bilangan desimal"
                  keyboardType="numeric"
                  editable={false}
                />
              </View>
          </TouchableWithoutFeedback>
        </View>
        <TouchableOpacity
          onPress={() => {
            toggleKeyboardVisibility(
              keyboardVisible,
              setKeyboardVisible,
              keyboradYValue
            );
          }}
          style={{ ...styles.showHide, opacity: keyboardVisible ? 1 : 0.3 }}
        >
          <Text style={styles.buttonText}>
            {keyboardVisible ? "Hide\nKeyboard" : "Show\nKeyboard"}
          </Text>
        </TouchableOpacity>
        {/* <Animated.View
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
              <>
                <DecimalFloatingKeyboard
                  isVisible={keyboardVisible}
                  action={handleKeyPress}
                />
              </>
            </Animated.View>
          )}
        </Animated.View> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "#00C637" }}
            onPress={handleSubmit}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              marginLeft: 10,
              backgroundColor: "#ff0000",
            }}
            onPress={handleReset}
          >
            <Text style={{ color: "white" }}>Reset</Text>
          </TouchableOpacity>
          T A
        </View>
        <View>
          <Text style={styles.textPenjelasan}>{biner}</Text>
        </View>
        <View>
          <View style={styles.hasil}>
            <Text style={styles.textPenjelasan}>{penjelasan}</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
    padding: 10,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  hasil: {
    marginHorizontal: 15,
  },
  textPenjelasan: {
    fontFamily: "JetBrainsMono_300Light",
    marginTop: 25,
    color: "white",
  },
  input: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
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

export default DecimalToBinary;
