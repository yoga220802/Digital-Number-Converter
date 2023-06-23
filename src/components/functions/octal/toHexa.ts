import { ConverterResult } from "../../utils/customDataTypes";
import { octalToBinary } from "./toBinary";
import { binaryFormatter } from "../../utils/binaryFormat";
import { Binary } from '../binary/binary'
import { binaryToHexa } from "../binary/toHexa";

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
  // console.log(temp.join(""));
  binaryFormatter().addZero(4, temp)
  // console.log("Format : ", temp.join(""));

  temp = binaryFormatter().binarySplit(4, temp.join(""))
  // console.log(temp[0]);

  // for (let i = 0; i < temp.length; i++) {
    let toHexa = binaryToHexa(temp.join(""))
    resultOtH.explanation.push(toHexa.explanation.join("\n"))
    resultOtH.converted = toHexa.converted
    resultOtH.converted.shift()
    resultOtH.explanation.pop()
    resultOtH.explanation.push(`Ubah ke format heksadesimal: ${resultOtH.converted.join("")}`)
  // }

  
  
  

  return resultOtH;
};

// let coba = octalToHexa("252")
// console.log(coba);
// console.log(coba.converted.join(""));


