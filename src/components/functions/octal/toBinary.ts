import { binaryFormatter } from "../../utils/binaryFormat";
import { ConverterResult } from "../../utils/customDataTypes";
import { Decimal } from "../decimal/decimal";

export const octalToBinary = (octalNum: string) => {
  let resultOtB: ConverterResult = {
    converted: [],
    explanation: [],
  };

  let octalDigits: string[] = octalNum.split("");
  // console.log(octalDigits);

  resultOtB.explanation.push(
    "Ubah setiap digit bilangan oktal menjadi bilangan biner 3 bit.\n(Ubah satu persatu, anggap setiap digit sebagai bilangan desimal)"
  );

  for (let i = 0; i < octalDigits.length; i++) {
    let temp = new Decimal(octalDigits[i]).toBinary();
    let temp2 = temp.converted.split("")
    binaryFormatter().addZero(3, temp2)
    // console.log(temp);
    resultOtB.explanation.push(`Digit ke${i + 1}: ${octalDigits[i]}\n${temp.explanation}`);
    resultOtB.converted.push(temp2.join(""))
  }

  resultOtB.explanation.push(`Gabungkan hasil konversi tadi: ${resultOtB.converted.join("")}`)
  return resultOtB;
};

// let coba = octalToBinary("24");
// console.log(coba.explanation.join("\n\n"));
// console.log(coba.converted.join(""));
