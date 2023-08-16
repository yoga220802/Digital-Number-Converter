import { StyleSheet } from "react-native";

const keyboardStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    margin: 10,
    borderRadius: 10,
  },
  floatingContainer: {
    width: 320,
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
    width: 75,
  },
  buttonText: {
    fontSize: 17,
    textAlign: "center",
    fontFamily: "JetBrainsMono_500Medium"
  },
});

export default keyboardStyles;
