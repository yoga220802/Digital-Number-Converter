import { ConverterResult } from "../../utils/customDataTypes";
import { hexaFormater } from "../../utils/hexaFormat";

export const hexaToDecimal = (hexaNum: string) => {
    let resultHtD: ConverterResult = {
        converted: [],
        explanation: []
    }
    let toDecimalFormat: string[] = []
    let hexNum: string[] = hexaNum.split("")
    let hexDigits: number[];
    let counter:number = 0
    let desimalTotal:number = 0

    resultHtD.explanation.push(`Pisahkan setiap digit bilangan hexadesimal\n${hexaNum} => ${hexNum.join(" ")}`)

    resultHtD.explanation.push(
        `Ubah format penulisan setiap digit menjadi format desimal\n${hexNum.join(
            " "
        )} => `
    );

    hexNum.forEach((element) => {
        toDecimalFormat.push(hexaFormater().toDecimal(element));
    });
    resultHtD.explanation[1] += `${toDecimalFormat.join(" ")}`;

    hexDigits = toDecimalFormat.map(Number)

    for (let i = hexDigits.length - 1; i >= 0; i--) {
        let temp: number = hexDigits[i] * (Math.pow(16, counter))
        resultHtD.explanation.push(`(${hexDigits[i]} x 2^${counter} = ${temp})`)
        resultHtD.converted.push(temp.toString())
        desimalTotal += temp
        counter++
    }
    // console.log(desimalTotal);
    resultHtD.explanation.push(`Jumlahkah hasil perkalian\n${resultHtD.converted.join("+")} = ${desimalTotal}`)
    resultHtD.converted.splice(0)
    resultHtD.converted.push(desimalTotal.toString())

    return resultHtD
}

// let coba = hexaToDecimal("3A")
// console.log(coba);

