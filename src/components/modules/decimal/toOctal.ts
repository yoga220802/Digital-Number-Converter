import { ConverterResult } from "../../utils/customDataTypes";

export function decimalToOctal(decimalNum: string) {
  let resultDtO: ConverterResult = {
    converted: [],
    explanation: [],
  };
  let remainDecimal: number = parseInt(decimalNum)

  if (remainDecimal <= 7) {
    resultDtO.explanation.push("Desimal 0 sampai 7 tidak perlu dikonversi");
    resultDtO.converted.unshift(remainDecimal.toString());
  } else {
    resultDtO.explanation.push("Bagi bilangan desimal dengan 8, lalu catat sisa hasil baginya.")
    resultDtO.explanation.push("Lakukan proses pembagian terhadap hasil bagi, sampai hasil baginya sudah tidak bisa lagi dibagi 8")

    while (remainDecimal > 0) {
      let temp1 = Math.floor(remainDecimal / 8);
      let temp2 = remainDecimal % 8;

      resultDtO.explanation.push(
        `${remainDecimal} / 8 = ${temp1}, sisa ${temp2}`
      );
      resultDtO.converted.unshift(temp2.toString());
      remainDecimal = temp1;
    }

    resultDtO.explanation.push(`Urutkan sisa pembagian dari yang terakhir untuk mendapatkan bilangan hexadesimalnya => ${resultDtO.converted.join("")}`)
  }

  return resultDtO;
}

// let cobs = decimalToOctal("100");
// console.log(cobs);

// console.log(cobs.converted.join(""));
// console.log(cobs.explanation.join("\n"));
