import React, { useState } from "react";
import BaseConverter from "./baseConverter";
import DecimalFloatingKeyboard from "../src/components/CustomKeyboard/decimalKeyboard";
import { Result } from "../src/utils/customDataTypes";
import { DigitalConverter } from "../src/components/modules";

interface modeSwitch {
    mode: string
  }
const DecimalAndBinary: React.FC<modeSwitch> = ({mode}) => {
  const [currentMode, setCurrentMode] = useState(mode);

  const submitHandler = (inputText: string) => {
    let conversion: Result = { converted: "", explanation: "" };

    if (currentMode === "Decimal To Biner") {
      conversion = DigitalConverter.Decimal(inputText).toBinary();
    } else if (currentMode === "Biner To Decimal") {
      conversion = DigitalConverter.Binary(inputText).toDecimal();
    }

    return conversion;
  };

  const reverseHandler = () => {
    const newMode =
      currentMode === "Decimal To Biner" ? "Biner To Decimal" : "Decimal To Biner";

    setCurrentMode(newMode);

    return newMode;
  };

  return (
    <BaseConverter
      mode={currentMode}
      inputPlaceholder="Masukan Bilangan Decimal"
      submitHandler={submitHandler}
      reverseHandler={reverseHandler}
    />
  );
};

export default DecimalAndBinary;
