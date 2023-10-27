import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import * as RouterUtils from "../../../utils/routerUtils";

import { customFonts } from "../../../styles/fonts";
import CategoryButton from "../../../utils/categoryButton";

const categoryButtons = [
  {
    title: "Desimal\nKe",
    info: "Biner",
  },
  {
    title: "Desimal\nKe",
    info: "Oktal",
  },
  {
    title: "Desimal\nKe",
    info: "Heksadesimal",
  },
];

export default function DecimalConverterRoutes({
  navigation,
}: {
  navigation: RouterUtils.DecimalConverterScreensNavigationProp;
}) {
  const fontsLoaded = customFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <View
        style={{ padding: 10, paddingVertical: 60, backgroundColor: "#1E1E1E" }}
      >
        {categoryButtons.map((button, index) => (
          <CategoryButton
            key={index}
            title={button.title}
            info={button.info}
            inMainScreen={false}
            onPressAction={() => navigation.goBack()}
          />
        ))}
      </View>
    </ScrollView>
  );
}

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
