import { useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ImageSourcePropType } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const Logo: ImageSourcePropType = require("../../assets/images/logo/digitalConverter.png")
import { customFonts } from "../../styles/fonts";

export default function MainSreen() {
    const fontsLoaded = customFonts();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ScrollView>

        <View style={{ padding: 10, paddingTop: 80, backgroundColor: "#1E1E1E" }}>
            <Image source={Logo} style={styles.logo} />
            <TouchableOpacity style={styles.categoryButton}>
                <Text style={{ ...styles.buttonTittle, color: "#000000", }}>{`Operasi Bilangan\nBiner`}</Text>
                <Text style={{ ...styles.buttonText, marginTop: 17, color: "#635A5A" }}>
                    Num<Text style={{ fontSize: 14, fontWeight: "bold", }}>2</Text>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
                <Text style={{ ...styles.buttonTittle, color: "#000000", }}>{`Operasi Bilangan\nOktal`}</Text>
                <Text style={{ ...styles.buttonText, marginTop: 17, color: "#635A5A" }}>
                    Num<Text style={{ fontSize: 14, fontWeight: "bold", }}>8</Text>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
                <Text style={{ ...styles.buttonTittle, color: "#000000", }}>{`Operasi Bilangan\nDesimal`}</Text>
                <Text style={{ ...styles.buttonText, marginTop: 17, color: "#635A5A" }}>
                    Num<Text style={{ fontSize: 14, fontWeight: "bold", }}>10</Text>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
                <Text style={{ ...styles.buttonTittle, color: "#000000", }}>{`Operasi Bilangan\nHeksadesimal`}</Text>
                <Text style={{ ...styles.buttonText, marginTop: 17, color: "#635A5A" }}>
                    Num<Text style={{ fontSize: 14, fontWeight: "bold", }}>16</Text>
                </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 55.53,
        width: 250,
        marginBottom: 28
    },
    categoryButton: {
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        elevation: 10,
        borderRadius: 5,
        marginTop: 25
    },
    buttonTittle: {
        textAlign: "center",
        fontSize: 32,
        fontFamily: "JetBrainsMono_400Regular"
    },
    buttonText: {
        textAlign: "center",
        fontSize: 32,
        fontFamily: "JetBrainsMono_400Regular_Italic"
    },
})
