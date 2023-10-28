import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

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
        ? "#61EB3D"
        : (title.includes("Oktal") && inMainScreen) || info.includes("Oktal")
        ? "#EBA93D"
        : (title.includes("Desimal") && inMainScreen) || info.includes("Desimal")
        ? "#3D95EB"
        : (title.includes("Heksa") && inMainScreen) || info.includes("Heksa")
        ? "#EB3D3A"
        : "#597896",
        borderStyle: "dotted",
        borderWidth: 5,
        borderRadius: 20,
        borderColor: "#597896",
    }}
    onPress={onPressAction}
  >
    <Text
      style={{
        ...styles.buttonTitle,
        fontSize: 30,
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

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    height: 55.53,
    width: 250,
    marginBottom: 28,
  },
  categoryButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    elevation: 10,
    borderRadius: 5,
    marginTop: 25,
    backgroundColor: "#4d4d4d",
  },
  buttonTitle: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: "JetBrainsMono_400Regular",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: "JetBrainsMono_400Regular_Italic",
  },
});

export default CategoryButton;
