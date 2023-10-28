import React, { useState } from "react";
import BaseConverter from "../../../utils/baseConverter";
import { Result, modeSwitch } from "../../../utils/customDataTypes";
import { DigitalConverter } from "../../modules";
import * as routerUtils from "../../../utils/routerUtils"

export const DecimalAndOctal: React.FC<modeSwitch> = ({mode, navigation}: {mode: string, navigation: routerUtils.DaOScreensNavigationProp}) => {
  const [currentMode, setCurrentMode] = useState(mode);

  const submitHandler = (inputText: string) => {
    let conversion: Result = {
      converted: "",
      explanation: "",
    };

    if (currentMode === "Decimal To Octal") {
      conversion = DigitalConverter.Decimal(inputText).toOctal();
    } else if (currentMode === "Octal To Decimal") {
      conversion = DigitalConverter.Octal(inputText).toDecimal();
    }

    return conversion;
  };

  const reverseHandler = () => {
    const newMode =
      currentMode === "Decimal To Octal"
        ? "Octal To Decimal"
        : "Decimal To Octal";

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
