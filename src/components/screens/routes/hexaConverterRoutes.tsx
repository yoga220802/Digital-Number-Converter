import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import * as RouterUtils from "../../../utils/routerUtils";

import { customFonts } from "../../../styles/fonts";
import CategoryButton from "../../../utils/categoryButton";


export default function HexaConverterRoutes({
  navigation,
}: {
  navigation: RouterUtils.HexaConverterScreensNavigationProp;
}) {
  const categoryButtons = [
    {
      title: "Heksadesimal\nKe",
      info: "Biner",
      navigation: () => navigation.navigate("HtB")
    },
    {
      title: "Heksadesimal\nKe",
      info: "Oktal",
      navigation: () => navigation.navigate("HtO")
    },
    {
      title: "Heksadesimal\nKe",
      info: "Desimal",
      navigation: () => navigation.navigate("HtD")
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