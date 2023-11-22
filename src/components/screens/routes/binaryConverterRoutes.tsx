import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import * as RouterUtils from "../../../utils/routerUtils";

import { customFonts } from "../../../styles/fonts";
import CategoryButton from "../../../utils/categoryButton";

export default function BinaryConverterRoutes({
  navigation,
}: {
  navigation: RouterUtils.BinaryConverterScreensNavigationProp;
}) {
const categoryButtons = [
  {
    title: "Biner\nKe",
    info: "Oktal",
    navigation: () => navigation.navigate("BtO")
  },
  {
    title: "Biner\nKe",
    info: "Desimal",
    navigation: () => navigation.navigate("BtD")
  },
  {
    title: "Biner\nKe",
    info: "Heksadesimal",
    navigation: () => navigation.navigate("BtH")
  },
];

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
            onPressAction={button.navigation}
          />
        ))}
      </View>
    </ScrollView>
  );
}