import { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    SafeAreaView,
    ScrollView,
    Image,
    ImageSourcePropType
} from "react-native";
import { customFonts } from "../../styles/fonts"

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        padding: 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        marginTop: 10,
        padding: 10,
        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    hasil: {
        marginHorizontal: 15
    },
    textPenjelasan: {
        fontFamily: "JetBrainsMono_300Light",
        marginTop: 25,
        color: "white"
    },
    input: {
        backgroundColor: "#fff",
        height: 50,
        borderRadius: 10,
        padding: 10,
        marginTop: 25
    }
});

const reverseIcon: ImageSourcePropType = require("../../../assets/images/icons/reverseIcon.png");
const DecimalToBinary: React.FC = () => {
    const [desimal, setDesimal] = useState<number|undefined>();
    const [biner, setBiner] = useState<string>("Hasil Konversi");
    const [penjelasan, setPenjelasan] = useState<string>()

    const fontsLoaded = customFonts();

    if (!fontsLoaded) {
        return null;
    }

    const handleInput = (text: string) => {
        if (text) {
            setDesimal(Number(text));
        } else { setDesimal(undefined) }
    };

    const handleSubmit = () => {
        if (!desimal) {
            setBiner("Input tidak boleh kosong");
            setPenjelasan("")
            return;
        } else if (desimal === 0 || desimal === 1) {
            setPenjelasan("Desimal 0 dan 1 tidak perlu dikonversi")
            return;
        }
        let _penjelasan = ["Penjelasan"]
        let binaryArray = [];
        let temp = desimal;
        let temp2 = desimal
        while (temp > 0) {
            binaryArray.unshift(temp % 2);
            temp = Math.floor(temp / 2);
            if (temp >= 1) {
                _penjelasan.push(`${temp2} / 2 = ${temp} sisa ${temp2 % 2}`)
            }
            temp2 = temp
        }

        while (binaryArray.length % 4 !== 0) {
            binaryArray.unshift(0);
        }
        let binaryResult = binaryArray.map((digit, index) => (index !== 0 && (index + 1) % 4 === 0 ? `${digit} ` : digit)).join("")
        setBiner(binaryResult);
        _penjelasan.push(`\nUrutkan hasil bagi dan sisa dari hasil baginya dimulai dari akhir\nHasilnya ${desimal} desimal = ${binaryResult} biner`)

        setPenjelasan(_penjelasan.join("\n"))
    };

    const handleReset = () => {
        setDesimal(undefined);
        setBiner("Hasil Konversi");
        setPenjelasan("")
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{...styles.textPenjelasan, fontFamily: "JetBrainsMono_800ExtraBold"}}>DESIMAL KE BINER</Text>
                <View>
                    <TouchableOpacity style={{ ...styles.button, backgroundColor: "#00C2FF" }}>
                        <Image source={reverseIcon} style={{ height: 15, width: 19.22 }} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="Input bilangan desimal"
                    onChangeText={handleInput}
                    value={desimal === undefined ? "" : String(desimal)}
                    style={styles.input}
                    keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={{ ...styles.button, backgroundColor: "#00C637" }}
                        onPress={handleSubmit}
                    >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.button, marginLeft: 10, backgroundColor: "#ff0000" }}
                        onPress={handleReset}
                    >
                        <Text style={{ color: "white" }}>Reset</Text>
                    </TouchableOpacity>
                </View>
                <SafeAreaView>
                    <Text style={styles.textPenjelasan}>{biner}</Text>
                </SafeAreaView>
                <View>
                    <SafeAreaView style={styles.hasil}>
                        <Text style={styles.textPenjelasan}>{penjelasan}</Text>
                    </SafeAreaView>
                </View>
            </View>
        </ScrollView>
    );

};



export default DecimalToBinary;
