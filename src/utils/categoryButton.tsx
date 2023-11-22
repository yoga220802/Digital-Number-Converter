import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "../styles/screenStyles";

const CategoryButton = ({
  title,
  info,
  inMainScreen,
  onPressAction,
}: {
  title: string;
  info: string;
  inMainScreen: boolean;
  onPressAction: () => void;
}) => (
  <TouchableOpacity
    style={{
      ...styles.categoryButton,
      backgroundColor: (title.includes("Biner") && inMainScreen) || info.includes("Biner")
        ? "#4cc9f0"
        : (title.includes("Oktal") && inMainScreen) || info.includes("Oktal")
        ? "#2ec4b6"
        : (title.includes("Desimal") && inMainScreen) || info.includes("Desimal")
        ? "#e71d36"
        : (title.includes("Heksa") && inMainScreen) || info.includes("Heksa")
        ? "#ff9f1c"
        : "#4cc9f0",
        borderStyle: "solid",
        borderWidth: 5,
        borderRadius: 5,
        borderColor: "#fff",
    }}
    onPress={onPressAction}
  >
    <Text
      style={{
        ...styles.buttonTitle,
      }}
    >
      {title}
    </Text>
    <Text style={{ ...styles.buttonText, marginTop: 17, color: "#ffffff" }}>
      {inMainScreen ? "Num" : undefined}
      <Text style={{ fontSize: inMainScreen ? 14 : 25, fontWeight: "bold" }}>
        {info}
      </Text>
    </Text>
  </TouchableOpacity>
);


export default CategoryButton;
