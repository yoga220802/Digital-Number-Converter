import { StyleSheet } from "react-native";

const keyboardStyles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      width: 300,
      backgroundColor: "#00b2ff",
      margin: 10,
      borderRadius: 10,
    },
    row: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
    centeredRow: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
    button: {
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
      },
      buttonText: {
        fontSize: 18,
      },
  });
  
  export default keyboardStyles