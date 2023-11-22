import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import * as RouterUtils from "../../../utils/routerUtils";

import { customFonts } from "../../../styles/fonts";
import CategoryButton from "../../../utils/categoryButton";

export default function DecimalConverterRoutes({
  navigation,
}: {
  navigation: RouterUtils.DecimalConverterScreensNavigationProp;
}) {
  const categoryButtons = [
    {
      title: "Desimal\nKe",
      info: "Biner",
      navigation: () => navigation.navigate("DtB"),
    },
    {
      title: "Desimal\nKe",
      info: "Oktal",
      navigation: () => navigation.navigate("DtO"),
    },
    {
      title: "Desimal\nKe",
      info: "Heksadesimal",
      navigation: () => navigation.navigate("DtH"),
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
