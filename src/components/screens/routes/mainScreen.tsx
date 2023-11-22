import React from "react";
import { View, Image, ScrollView, ImageSourcePropType } from "react-native";
import * as routerUtils from "../../../utils/routerUtils";
import styles from "../../../styles/screenStyles";

const Logo: ImageSourcePropType = require("../../../../assets/images/logo/digitalConverter.png")
import { customFonts } from "../../../styles/fonts";
import CategoryButton from "../../../utils/categoryButton";

export default function MainScreen({ navigation }: { navigation: routerUtils.HomeScreenNavigationProp }) {
  const categoryButtons = [
    {
      title: "Operasi Bilangan\nBiner",
      info: "2",
      onPress: () => navigation.navigate("BinaryConverter")
    },
    {
      title: "Operasi Bilangan\nOktal",
      info: "8",
      onPress: () => navigation.navigate("OctalConverter")
    },
    {
      title: "Operasi Bilangan\nDesimal",
      info: "10",
      onPress: () => navigation.navigate("DecimalConverter")
    },
    {
      title: "Operasi Bilangan\nHeksadesimal",
      info: "16",
      onPress: () => navigation.navigate("HexaConverter")
    },
  ];

  const fontsLoaded = customFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <View style={{ padding: 10, paddingVertical: 40, backgroundColor: "#1E1E1E" }}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>
        {categoryButtons.map((button, index) => (
          <CategoryButton
            key={index}
            title={button.title}
            info={button.info}
            inMainScreen={true}
            onPressAction={button.onPress}
          />
        ))}
      </View>
    </ScrollView>
  );
}