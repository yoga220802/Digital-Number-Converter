import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const screenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
    },
    contentContainer: {
        flexGrow: 1,
    },
    contentLayer: {
        flex: 1,
        paddingTop: 75,
        paddingHorizontal: 100,
        marginBottom: 70,
        alignItems: "center",
        alignContent: "center",
    },
    textStyle: {
        fontFamily: "JetBrainsMono_800ExtraBold",
        fontSize: responsiveFontSize(1.75),
        color: "white",
    },
    button: {
        marginTop: 10,
        padding: 10,
        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: 5,
    },
    input: {
        backgroundColor: "#fff",
        height: "auto",
        width: responsiveWidth(75),
        borderRadius: 10,
        padding: 10,
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    convertButtonText: {
        textAlign: "center",
        color: "#ffffff",
        fontFamily: "JetBrainsMono_300Light",
    },
    showHideButton: {
        bottom: 10,
        backgroundColor: "#a2cee0",
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: responsiveWidth(30),
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "white",
        borderTopColor: "red",
        borderBottomColor: "red",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 10,
    },
    overlayLayer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        alignItems: "center",
    },
    logoContainer: {
        alignItems: "center",
    },
    logo: {
        height: responsiveHeight(10),
        width: responsiveWidth(75),
        marginBottom: 28,
        marginTop: 10
    },
    categoryButton: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        elevation: 10,
        borderRadius: 5,
        marginTop: 25,
        backgroundColor: "#4d4d4d"
    },
    buttonTitle: {
        textAlign: "center",
        fontSize: responsiveFontSize(4),
        fontFamily: "Poppins_500Medium",
    },
    buttonText: {
        textAlign: "center",
        fontSize: responsiveFontSize(4),
        fontFamily: "JetBrainsMono_400Regular_Italic",
    },
});

export default screenStyles