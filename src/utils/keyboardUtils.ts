import { Animated, Easing, Keyboard } from "react-native";

export const toggleKeyboardVisibility = (
    keyboardVisible: boolean,
    setKeyboardVisible: React.Dispatch<React.SetStateAction<boolean>>,
    keyboradYValue: Animated.Value
) => {
    const targetValue = keyboardVisible ? 0 : 1;

    Animated.timing(keyboradYValue, {
        toValue: targetValue,
        duration: 300,
        useNativeDriver: true,
        easing: keyboardVisible ? Easing.out(Easing.ease) : Easing.inOut(Easing.ease),
    }).start(() => {
        setKeyboardVisible(!keyboardVisible);
    });
};

export const configureKeyboardListeners = (
    inputTextYValue: Animated.Value,
    keyboradYValue: Animated.Value
) => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
        Animated.timing(inputTextYValue, {
            toValue: -1,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.cubic),
        }).start();
    });

    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
        Animated.timing(inputTextYValue, {
            toValue: 10,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.cubic),
        }).start();
    });

    return () => {
        keyboardHideListener.remove();
        keyboardShowListener.remove();
    };
};

export const inputFocusHandler = (
    setKeyboardVisible: React.Dispatch<React.SetStateAction<boolean>>,
    keyboradYValue: Animated.Value
) => {
    setKeyboardVisible(true);
    Animated.timing(keyboradYValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
    }).start();
};
