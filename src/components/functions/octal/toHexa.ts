import { ConverterResult } from "../../utils/customDataTypes";
import { octalToBinary } from "./toBinary";

export const octalToHexa = (octalNum: string) => {
  let resultOtH: ConverterResult = {
    converted: [],
    explanation: [],
  };

  let octalDigits: string = octalNum;
  let toBinary = octalToBinary(octalDigits)
  return resultOtH;
};
