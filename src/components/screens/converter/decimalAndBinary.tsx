import React, { useState } from "react";
import BaseConverter from "../../../utils/baseConverter";
import { Result, modeSwitch } from "../../../utils/customDataTypes";
import { DigitalConverter } from "../../modules";
import * as routerUtils from "../../../utils/routerUtils"

export const DecimalAndBinary: React.FC<modeSwitch> = ({mode, navigation}: {mode: string, navigation: routerUtils.BtDScreensNavigationProp | routerUtils.DtBScreensNavigationProp}) => {
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