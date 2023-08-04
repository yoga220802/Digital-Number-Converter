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
    onPress: (value: string) => void;
  }

export {ConverterResult, HexaFormat, Result, CustomKeyboardProps}