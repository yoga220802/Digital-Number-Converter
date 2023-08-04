import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import { CustomKeyboardProps } from "../customDataTypes";

const octalKeyboard: React.FC<CustomKeyboardProps> = ({onPress}) => {
    const handleKeyPress = (value: string) => {
        onPress(value)
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleKeyPress("0")}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleKeyPress("1")}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleKeyPress("2")}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleKeyPress("3")}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleKeyPress("4")}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleKeyPress("5")}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.centeredRow}>
                <TouchableOpacity style={styles.button} onPress={() => handleKeyPress("6")}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleKeyPress("7")}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      width: 300,
      backgroundColor: "#00b2ff",
      margin: 10,
      borderRadius: 10
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    centeredRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    button: {
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    buttonText: {
      fontSize: 18,
    },
  });
  
  export default octalKeyboard;