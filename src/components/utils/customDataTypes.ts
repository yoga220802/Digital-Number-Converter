interface ConverterResult {
    converted: string[]
    explanation: string[]
}

type HexaFormat = {
    toHexa: (char: string) => string
    toecimal: (char: string) => string
}

interface Result {
    converted: string
    explanation: string
}

// interface DecimalResult {
//     toBinary: () => Result
//     toOctal: () => Result
//     toHexa: () => Result
// }

export {ConverterResult, HexaFormat, Result}