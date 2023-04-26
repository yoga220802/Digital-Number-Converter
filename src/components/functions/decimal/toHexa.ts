import { hexaFormater } from "../../utils/hexaFormat";
import { ConverterResult } from "../../utils/customDataTypes";

export function decimalToHexa(decimalNum: number): ConverterResult {
  let resultDtH: ConverterResult = {
    converted: [],
    explanation: [],
  };
  let remainDecimal: number = decimalNum;

  if (remainDecimal <= 15) {
    resultDtH.explanation.push("Desimal 0 sampai 15 tidak perlu dikonversi");
    resultDtH.converted.unshift(remainDecimal.toString());
  } else {
    while (remainDecimal > 0) {
      let temp1: number = Math.floor(remainDecimal / 16);
      let temp2: number = remainDecimal % 16;

      resultDtH.converted.unshift(hexaFormater().toHexa(temp2.toString()));
      resultDtH.explanation.push(
        `${remainDecimal} / 16 = ${temp1}, sisa ${temp2} diubah jadi ${hexaFormater().toHexa(
          temp2.toString()
        )}`
      );

      remainDecimal = temp1;
    }
  }

  return resultDtH;
}

// let cobs = decimalToHexa(15);
// console.log(cobs.converted.join(""));
// console.log(cobs.explanation.join("\n"));
