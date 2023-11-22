import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";

const keyboardStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    margin: 10,
    borderRadius: 10,
  },
  floatingContainer: {
    width: responsiveWidth(95),
    backgroundColor: "#0487c4",
    position: "absolute",
    bottom: 70,
    // left: 20,
    // right: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    
    borderRadius: 10,
    elevation: 4,
    // zIndex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 7,
    paddingVertical: 7,
    borderRadius: 5,
    margin: 2,
    width: responsiveWidth(20),
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    textAlign: "center",
    fontFamily: "JetBrainsMono_500Medium"
  },
});

export default keyboardStyles;
