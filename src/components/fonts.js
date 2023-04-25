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
    });
    return fontsLoaded;
};
