import { ConverterResult } from "../../utils/customDataTypes";

export function decimalToBinary(decimalNum: string) {
  let resultDtB: ConverterResult = {
    converted: [],
    explanation: [],
  };
  let remainDecimal: number = parseInt(decimalNum);

  if (remainDecimal <= 1) {
    resultDtB.explanation.push("Desimal 1 dan 0 tidak perlu dikonversi");
    resultDtB.converted.unshift(remainDecimal.toString());
  } else {
    resultDtB.explanation.push("Bagi dua secara terus menerus setiap sisa hasil bagi, sampai tersisa 1\n")
    while (remainDecimal > 0) {
      let temp1 = Math.floor(remainDecimal / 2);
      let temp2 = remainDecimal % 2;

      resultDtB.explanation.push(
        `${remainDecimal} / 2 = ${temp1}, sisa ${temp2}`
      );
      resultDtB.converted.unshift(temp2.toString());
      remainDecimal = temp1;
    }

    resultDtB.explanation.push(`Didapat hasil: ${resultDtB.converted.join("")}`)
  }

  return resultDtB;
}

// let cobs = decimalToBinary("10");
// console.log(cobs);

// console.log(cobs.converted.join(""));
// console.log(cobs.explanation.join("\n"));
