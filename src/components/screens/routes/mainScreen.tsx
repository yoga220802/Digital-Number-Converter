import React from "react";
import { View, Image, StyleSheet, ScrollView, ImageSourcePropType } from "react-native";
import categoryButton from "../../../utils/categoryButton"
import * as routerUtils from "../../../utils/routerUtils";

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
    backgroundColor:"#4d4d4d"
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
