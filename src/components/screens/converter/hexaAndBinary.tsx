import React, { useState } from "react";
import BaseConverter from "../../../utils/baseConverter";
import { Result, modeSwitch } from "../../../utils/customDataTypes";
import { DigitalConverter } from "../../modules";
import * as routerUtils from "../../../utils/routerUtils"

export const HexaAndBinary: React.FC<modeSwitch> = ({mode, navigation}: {mode: string, navigation: routerUtils.HtBScreensNavigationProp | routerUtils.BtHScreensNavigationProp}) => {
  const [currentMode, setCurrentMode] = useState(mode);

  const submitHandler = (inputText: string) => {
    let conversion: Result = {
      converted: "",
      explanation: "",
    };

    if (currentMode === "Hexa To Biner") {
      conversion = DigitalConverter.Hexa(inputText).toBinary();
    } else if (currentMode === "Biner To Hexa") {
      conversion = DigitalConverter.Binary(inputText).toHexa();
    }

    return conversion;
  };

  const reverseHandler = () => {
    const newMode = currentMode === "Hexa To Biner" ? "Biner To Hexa" : "Hexa To Biner"

    setCurrentMode(newMode)

    return newMode
  }

  return (
    <BaseConverter mode={currentMode} submitHandler={submitHandler} reverseHandler={reverseHandler} />
  )
};