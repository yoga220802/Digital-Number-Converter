import { StyleSheet } from "react-native";

const keyboardStyles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      width: 320,
      backgroundColor: "#00b2ff",
      margin: 10,
      borderRadius: 10,
    },
    row: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        margin: 2,
        width: 70,
      },
      buttonText: {
        fontSize: 18,
        textAlign: "center"
      },
  });
  
  export default keyboardStyles