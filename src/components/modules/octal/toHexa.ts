import { ConverterResult } from "../../../utils/customDataTypes";
import { octalToBinary } from "./toBinary";
import { Binary } from '../binary/binary'

export const octalToHexa = (octalNum: string) => {
  let resultOtH: ConverterResult = {
    converted: [],
    explanation: [],
  };

  let octalDigits: string = octalNum;
  let toBinary = octalToBinary(octalDigits)
  resultOtH.explanation.push(toBinary.explanation.join("\n"))
  octalDigits = toBinary.converted.join("")

  let temp: any = octalDigits.split("")
  
    let toHexa = new Binary(temp.join("")).toHexa()
    resultOtH.explanation.push(toHexa.explanation)
    resultOtH.converted = toHexa.converted.split("")
    resultOtH.converted.shift()
    resultOtH.explanation.push(`Didapatkan hasil konversi: ${resultOtH.converted.join("")}`)

  return resultOtH;
};

let coba = octalToHexa("252")
console.log(coba);
// console.log(coba.converted.join(""));


