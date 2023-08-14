interface ConverterResult {
    converted: string[]
    explanation: string[]
}

type HexaFormat = {
    toHexa: (char: string) => string
    toDecimal: (char: string) => string
}

interface Result {
    converted: string
    explanation: string
}

interface CustomKeyboardProps {
    value: string;
    action: (value: string) => void;
}

interface floatingKeyboardProps {
    action: (value: string) => void;
    isVisible: boolean
}

interface converterScreen {
    mode: string
}

export { ConverterResult, HexaFormat, Result, CustomKeyboardProps, floatingKeyboardProps , converterScreen}