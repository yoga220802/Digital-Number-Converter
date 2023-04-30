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

    // if (addZero) {
    //   binaryFormatter().addZero(4, resultDtB.converted)
    //   resultDtB.explanation.push("Agar tampilannya lebih in")
    // }
    resultDtB.explanation.push(`Didapat hasil: ${resultDtB.converted.join("")}`)
    // while (resultDtB.converted.length % 4 !== 0) {
    //   resultDtB.converted.unshift("0");
    // }
  }

  return resultDtB;
}

// let cobs = decimalToBinary("4");
// console.log(cobs.converted.join(""));
// console.log(cobs.explanation.join("\n"));
