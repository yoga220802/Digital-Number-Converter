import { binaryFormatter } from "../../utils/binaryFormat";
import { ConverterResult } from "../../utils/customDataTypes";
import { binaryToDecimal } from "./toDecimal";

export function binaryToOctal(binaryNum: string) {
  let resultBtO: ConverterResult = {
    converted: [],
    explanation: [],
  };
  let binaryDigits: any = binaryNum.split("");

  resultBtO.explanation.push(
    `Cek apakah jumlah digit biner berjumlah kelipatan 3 atau tidak.\nJika tidak tambahkan 0 didepannya agar jumlahnya menjadi kelipatan 3.\n${binaryDigits.join(
      ""
    )}`
  );
  binaryFormatter().addZero(3, binaryDigits);
  resultBtO.explanation[0] += ` => ${binaryDigits.join("")}`;

  binaryDigits = binaryFormatter().binarySplit(3, binaryDigits.join(""));
  resultBtO.explanation.push(
    `Pecah bilangan biner menjadi kelompok dengan isi 3 bit biner\n`
  );
  for (let i = 0; i < binaryDigits.length; i++) {
    resultBtO.explanation[1] += `(${binaryDigits[i].join("")})`;
  }

  resultBtO.explanation.push("Ubah setiap kelompok menjadi bilangan desimal");
  for (let i = 0; i < binaryDigits.length; i++) {
    resultBtO.explanation.push(
      `Kelompok ${i + 1} = ${binaryDigits[i].join("")}`
    );

    let temp: ConverterResult = binaryToDecimal(binaryDigits[i].join(""));

    temp.explanation.shift()

    resultBtO.explanation[i + 3] += `\n${temp.explanation.join("\n")}\n`;
    resultBtO.explanation[i + 3] += `Didapat Hasil ${temp.converted.join("")}`;
    resultBtO.converted.push(temp.converted.join(""));
  }
  resultBtO.explanation.push(
    `Gabungkan semua hasil konversi ke desimal tadi: ${resultBtO.converted.join(
      ""
    )}`
  );

  return resultBtO;
}

// let coba = binaryToOctal("1011");
// console.log(coba);