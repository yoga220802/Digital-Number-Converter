import React, { useState } from "react";
import BaseConverter from "../../../utils/baseConverter";
import { Result, modeSwitch } from "../../../utils/customDataTypes";
import { DigitalConverter } from "../../modules";

export const OctalAndHexa: React.FC<modeSwitch> = ({ mode }) => {
  const [currentMode, setCurrentMode] = useState(mode);

  const submitHandler = (inputText: string) => {
    let conversion: Result = {
      converted: "",
      explanation: "",
    };

    if (currentMode === "Octal To Hexa") {
      conversion = DigitalConverter.Octal(inputText).toHexa();
    } else if (currentMode === "Hexa To Octal") {
      conversion = DigitalConverter.Hexa(inputText).toOctal();
    }

    return conversion;
  };

  const reverseHandler = () => {
    const newMode = currentMode === "Octal To Hexa" ? "Hexa To Octal" : "Octal To Hexa"

    setCurrentMode(newMode)

    return newMode
  }

  return (
    <BaseConverter mode={currentMode} submitHandler={submitHandler} reverseHandler={reverseHandler} />
  )
};
