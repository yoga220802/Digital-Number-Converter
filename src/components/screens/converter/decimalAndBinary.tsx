import React, { useState } from "react";
import BaseConverter from "../../../utils/baseConverter";
import { Result } from "../../../utils/customDataTypes";
import { DigitalConverter } from "../../modules";

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
      submitHandler={submitHandler}
      reverseHandler={reverseHandler}
    />
  );
};

export default DecimalAndBinary;
