import { ConverterResult } from "../../../utils/customDataTypes";
import { hexaFormater } from "../../../utils/hexaFormat";
import { binaryFormatter } from "../../../utils/binaryFormat";
import { Decimal } from "../decimal/decimal";

export function hexaToBinary(hexaNum: string) {
  let resultHtB: ConverterResult = {
    converted: [],
    explanation: [],
  };
  let toDecimalFormat: string[] = [];
  let hexNum: string[] = hexaNum.split("");
  resultHtB.explanation.push(
    `Pisahkan setiap digit bilangan hexadesimal\n${hexaNum} => ${hexNum.join(
      " "
    )}`
  );

  resultHtB.explanation.push(
    `Ubah format penulisan setiap digit menjadi format desimal\n${hexNum.join(
      " "
    )} => `
  );

  hexNum.forEach((element) => {
    toDecimalFormat.push(hexaFormater().toDecimal(element));
  });

  resultHtB.explanation[1] += `${toDecimalFormat.join(" ")}`;

  resultHtB.explanation.push(
    "Ubah setiap bilangan desimal menjadi biner 4 bit dengan cara : "
  );

  toDecimalFormat.forEach((element) => {
    let temp = new Decimal(element).toBinary();
    let explanation: string[];
    let converted: string[] = temp.converted.split("");

    binaryFormatter().addZero(4, converted);
    resultHtB.converted.push(converted.join(""));
    explanation = temp.explanation.split("\n");
    if (explanation.length > 1) {
      explanation.shift();
      explanation.pop();
      explanation.push(`Didapat hasil: ${converted.join("")}`);
      resultHtB.explanation.push(explanation.join("\n"));
    } else {
      explanation.unshift("");
      resultHtB.explanation.push(explanation.join("\n"));
    }
  });

  resultHtB.explanation.push(
    `Gabungkan semua hasil konversi per digit desimal`
  );
  resultHtB.explanation.push(
    `${hexaNum} hexa = ${resultHtB.converted.join(" ")} biner`
  );

  return resultHtB;
}

// let coba = hexaToBinary("3C5");
// console.log(coba.explanation.join("\n"));
