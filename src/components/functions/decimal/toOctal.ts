import { ConverterResult } from "../../utils/customDataTypes";

export function decimalToOctal(decimalNum: number) {
  let resultDtO: ConverterResult = {
    converted: [],
    explanation: [],
  };
  let remainDecimal: number = decimalNum;

  if (remainDecimal <= 7) {
    resultDtO.explanation.push("Desimal 0 sampai 7 tidak perlu dikonversi");
    resultDtO.converted.unshift(remainDecimal.toString());
  } else {
    while (remainDecimal > 0) {
      let temp1 = Math.floor(remainDecimal / 8);
      let temp2 = remainDecimal % 8;

      resultDtO.explanation.push(
        `${remainDecimal} / 8 = ${temp1}, sisa ${temp2}`
      );
      resultDtO.converted.unshift(temp2.toString());
      remainDecimal = temp1;
    }
  }

  return resultDtO;
}

// let cobs = decimalToOctal(5);
// console.log(cobs.converted.join(""));
// console.log(cobs.explanation.join("\n"));
