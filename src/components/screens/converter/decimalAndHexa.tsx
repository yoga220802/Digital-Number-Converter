import React, { useState } from "react";
import BaseConverter from "../../../utils/baseConverter";
import { Result, modeSwitch } from "../../../utils/customDataTypes";
import { DigitalConverter } from "../../modules";
import * as routerUtils from "../../../utils/routerUtils"

export const DecimalAndHexa: React.FC<modeSwitch> = ({mode, navigation}: {mode: string, navigation: routerUtils.DaHScreensNavigationProp}) => {
  const [currentMode, setCurrentMode] = useState(mode);

  const submitHandler = (inputText: string) => {
    let conversion: Result = {
      converted: "",
      explanation: "",
    };

    if (currentMode === "Decimal To Hexa") {
      conversion = DigitalConverter.Decimal(inputText).toHexa();
    } else if (currentMode === "Hexa To Decimal") {
      conversion = DigitalConverter.Hexa(inputText).toDecimal();
    }

    return conversion;
  };

  const reverseHandler = () => {
    const newMode =
      currentMode === "Decimal To Hexa" ? "Hexa To Decimal" : "Decimal To Hexa";

    setCurrentMode(newMode);

    return newMode;
  };

  return (
    <BaseConverter mode={currentMode} submitHandler={submitHandler} reverseHandler={reverseHandler} />
  )
};
