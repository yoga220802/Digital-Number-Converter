import { hexaFormater } from "../../../utils/hexaFormat";
import { ConverterResult } from "../../../utils/customDataTypes";

export function decimalToHexa(decimalNum: string): ConverterResult {
  let resultDtH: ConverterResult = {
    converted: [],
    explanation: [],
  };
  let remainDecimal: number = parseInt(decimalNum)

  if (remainDecimal <= 15) {
    resultDtH.explanation.push("Desimal 0 sampai 15 tidak perlu dikonversi");
    resultDtH.converted.unshift(remainDecimal.toString());
  } else {
    resultDtH.explanation.push("Bagi bilangan desimal dengan 16, lalu catat sisa hasil baginya. Jika memungkinkan, ubah ke format Hexadesimal")
    resultDtH.explanation.push("Lakukan proses pembagian terhadap hasil bagi, sampai hasil baginya sudah tidak bisa lagi dibagi 16")
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

    resultDtH.explanation.push(`Urutkan sisa pembagian dari yang terakhir untuk mendapatkan bilangan hexadesimalnya => ${resultDtH.converted.join("")}`)
  }

  return resultDtH;
}

// let cobs = decimalToHexa("530");
// console.log(cobs);

// console.log(cobs.converted.join(""));
// console.log(cobs.explanation.join("\n"));
