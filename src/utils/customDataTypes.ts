interface ConverterResult {
  converted: string[];
  explanation: string[];
}

type HexaFormat = {
  toHexa: (char: string) => string;
  toDecimal: (char: string) => string;
};

interface Result {
  converted: string;
  explanation: string;
}

interface CustomKeyboardProps {
  value: string;
  action: (value: string) => void;
}

interface floatingKeyboardProps {
  action: (value: string) => void;
  isVisible: boolean;
}

interface ConverterScreen {
  mode: string; // Tambahkan mode sebagai string
  submitHandler: (inputText: string) => Result; // Tambahkan submitHandler
  reverseHandler: () => string; // Tambahkan reverseHandler
}

interface modeSwitch {
  mode: string;
  navigation: any
}
export {
  ConverterResult,
  HexaFormat,
  Result,
  CustomKeyboardProps,
  floatingKeyboardProps,
  ConverterScreen,
  modeSwitch
};
