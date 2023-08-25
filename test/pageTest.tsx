import React, { useState } from "react";
import BaseConverter from "./baseConverter";
import OctalFloatingKeyboard from "../src/components/CustomKeyboard/octalKeyboard";
import { Result } from "../src/utils/customDataTypes";
import { DigitalConverter } from "../src/components/modules";

interface modeSwitch {
  mode: string
}
const OctalAndBinary: React.FC<modeSwitch> = ({mode}) => {
  const [currentMode, setCurrentMode] = useState(mode);

  const submitHandler = (inputText: string) => {
    let conversion: Result = { converted: "", explanation: "" };

    if (currentMode === "Octal To Biner") {
      conversion = DigitalConverter.Octal(inputText).toBinary();
    } else if (currentMode === "Biner To Octal") {
      conversion = DigitalConverter.Binary(inputText).toOctal();
    }

    return conversion;
  };

  const reverseHandler = () => {
    const newMode =
      currentMode === "Octal To Biner" ? "Biner To Octal" : "Octal To Biner";

    setCurrentMode(newMode);

    return newMode;
  };

  return (
    <BaseConverter
      mode={currentMode}
      inputPlaceholder="Masukan Bilangan Octal"
      submitHandler={submitHandler}
      reverseHandler={reverseHandler}
    />
  );
};

export default OctalAndBinary;
