import { ConverterResult } from "../../../utils/customDataTypes";

export const octalToDesimal = (octalNum: string) => {
  let resultOtD: ConverterResult = {
    converted: [],
    explanation: [],
  };

  let octalDigits: number[] = octalNum.split("").map(Number);
  let counter: number = 0;
  let desimalTotal: number = 0;
  let multiplicationResult: string[] = []

  resultOtD.explanation.push(
    "Kalikan setiap digit bilangan oktal dengan 8 pangkat i\nDimana i merupakan posisi digit bilangan oktal dari kanan ke kiri dimulai dari angka 0"
  );

  for (let i = octalDigits.length - 1; i >= 0; i--) {
    let temp: number = octalDigits[i] * Math.pow(8, counter);
    // console.log(temp);
    resultOtD.explanation.push(
      `(${octalDigits[i]} x 8 ^ ${counter} = ${temp})`
    );
    multiplicationResult.push(temp.toString())
    desimalTotal += temp;
    counter++;
  }
  // console.log(desimalTotal);
  resultOtD.converted.push(desimalTotal.toString());
  resultOtD.explanation.push(`Tambahkan semua hasil perkalian`);
  resultOtD.explanation.push(`${multiplicationResult.join("+")} = ${resultOtD.converted.join("")}`)
  return resultOtD;
};

// let coba = octalToDesimal("102");
// console.log(coba);

// console.log(coba.explanation.join("\n"));
// console.log(coba.converted);
