import {
    useFonts,
    JetBrainsMono_100Thin,
    JetBrainsMono_200ExtraLight,
    JetBrainsMono_300Light,
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
    JetBrainsMono_600SemiBold,
    JetBrainsMono_700Bold,
    JetBrainsMono_800ExtraBold,
    JetBrainsMono_100Thin_Italic,
    JetBrainsMono_200ExtraLight_Italic,
    JetBrainsMono_300Light_Italic,
    JetBrainsMono_400Regular_Italic,
    JetBrainsMono_500Medium_Italic,
    JetBrainsMono_600SemiBold_Italic,
    JetBrainsMono_700Bold_Italic,
    JetBrainsMono_800ExtraBold_Italic,
} from '@expo-google-fonts/jetbrains-mono';

import {
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic
} from "@expo-google-fonts/poppins";

export const customFonts = () => {
    const [fontsLoaded] = useFonts({
        JetBrainsMono_100Thin,
        JetBrainsMono_200ExtraLight,
        JetBrainsMono_300Light,
        JetBrainsMono_400Regular,
        JetBrainsMono_500Medium,
        JetBrainsMono_600SemiBold,
        JetBrainsMono_700Bold,
        JetBrainsMono_800ExtraBold,
        JetBrainsMono_100Thin_Italic,
        JetBrainsMono_200ExtraLight_Italic,
        JetBrainsMono_300Light_Italic,
        JetBrainsMono_400Regular_Italic,
        JetBrainsMono_500Medium_Italic,
        JetBrainsMono_600SemiBold_Italic,
        JetBrainsMono_700Bold_Italic,
        JetBrainsMono_800ExtraBold_Italic,
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic
    });
    return fontsLoaded;
};
