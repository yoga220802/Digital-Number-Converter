import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import * as RouterUtils from "../../../utils/routerUtils";

import { customFonts } from "../../../styles/fonts";
import CategoryButton from "../../../utils/categoryButton";


export default function OctalConverterRoutes({
  navigation,
}: {
  navigation: RouterUtils.OctalConverterScreensNavigationProp;
}) {
  const categoryButtons = [
    {
      title: "Oktal\nKe",
      info: "Biner",
      navigation: () => navigation.navigate("OtB")
    },
    {
      title: "Oktal\nKe",
      info: "Desimal",
      navigation: () => navigation.navigate("OtD")
    },
    {
      title: "Oktal\nKe",
      info: "Heksadesimal",
      navigation: () => navigation.navigate("OtH")
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