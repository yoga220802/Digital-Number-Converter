import { binaryFormatter } from "../../utils/binaryFormat";
import { ConverterResult } from "../../utils/customDataTypes";
import { hexaFormater } from "../../utils/hexaFormat";
import { binaryToDecimal } from "./toDecimal";

export function binaryToHexa(binary: string) {
  let resultBtH: ConverterResult = {
    converted: [],
    explanation: [],
  };
  let binaryDigits: any = binary.split("");

  resultBtH.explanation.push(
    `Pertama-tama, cek apakah jumlah digit biner berjumlah kelipatan 4 atau tidak.\nJika tidak tambahkan 0 didepannya agar jumlahnya menjadi kelipatan 4.\n${binaryDigits.join(
      ""
    )}`
  );
  binaryFormatter().addZero(4, binaryDigits);
  // console.log(binaryDigits);
  resultBtH.explanation[0] += ` => ${binaryDigits.join("")}`;

  resultBtH.explanation.push(
    `Pecah bilangan biner menjadi kelompok dengan isi 4 bit biner\n`
  );
  binaryDigits = binaryFormatter().binarySplit(4, binaryDigits.join(""));
  // console.log(binaryDigits);
  for (let i = 0; i < binaryDigits.length; i++) {
    resultBtH.explanation[1] += `(${binaryDigits[i].join("")}) `;
  }
  resultBtH.explanation.push("Ubah setiap kelompok menjadi bilangan desimal");

  let temp: string[] = [];
  for (let i = 0; i < binaryDigits.length; i++) {
    resultBtH.explanation.push(
      `Kelompok ${i + 1} = ${binaryDigits[i].join("")}`
    );

    let temp2: ConverterResult = binaryToDecimal(binaryDigits[i].join(""));

    resultBtH.explanation[i + 3] += `\n${temp2.explanation.join("\n")}\n`;
    resultBtH.explanation[i + 3] += `Didapat Hasil ${temp2.converted.join("")}`;

    temp.push(temp2.converted.join(""));
  }

  resultBtH.explanation.push(
    `Gabungkan semua hasil konversi ke desimal tadi: ${temp.join(" ")}\n`
  );

  temp.forEach((item) => {
    resultBtH.converted.push(hexaFormater().toHexa(item));
  });

  resultBtH.explanation.push(
    `Ubah ke format heksadesimal: ${resultBtH.converted.join("")}`
  );

  return resultBtH;
}

// let coba = binaryToHexa("1011100");
// console.log(coba.explanation.join("\n\n"));
// console.log(coba.converted.join(""));
