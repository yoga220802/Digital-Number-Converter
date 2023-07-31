import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface CustomKeyboardProps {
    onPress: (value: string) => void;
  }

const binaryKeyboard: React.FC<CustomKeyboardProps> = ({onPress}) => {
    const handleKeyPress = (value: string) => {
        onPress(value)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style = {styles.button} onPress={() => handleKeyPress("0")}>
                <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => handleKeyPress("1")}>
                <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingVertical: 10,
        },

        button: {
            backgroundColor: "#f0f0f0",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
        },
        buttonText: {
            fontSize: 18
        }
    }
)

export default binaryKeyboard