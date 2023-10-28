import React, { useState } from "react";
import BaseConverter from "../../../utils/baseConverter";
import { Result, modeSwitch } from "../../../utils/customDataTypes";
import { DigitalConverter } from "../../modules";
import * as routerUtils from "../../../utils/routerUtils"

export const OctalAndBinary: React.FC<modeSwitch> = ({mode, navigation}: {mode: string, navigation: routerUtils.OaBScreensNavigationProp}) => {
  const [currentMode, setCurrentMode] = useState(mode);

  const submitHandler = (inputText: string) => {
    let conversion: Result = {
      converted: "",
      explanation: "",
    };

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
      submitHandler={submitHandler}
      reverseHandler={reverseHandler}
    />
  );
};