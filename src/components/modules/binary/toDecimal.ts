import { ConverterResult } from "../../utils/customDataTypes"

export function binaryToDecimal(binaryNum: string) {
    let resultBtD: ConverterResult = {
        converted: [],
        explanation: []
    }

    let binaryDigits: number[] = binaryNum.split("").map(Number)
    // console.log(binaryDigits);
    // console.log(binaryDigits.length);
    let counter:number = 0
    let desimalTotal: number = 0
    for (let i = binaryDigits.length - 1; i >= 0; i--) {
        let temp: number = binaryDigits[i] * (Math.pow(2, counter))
        // console.log(temp);
        resultBtD.explanation.push(`(${binaryDigits[i]} x 2^${counter} = ${temp})`)
        desimalTotal += temp
        counter++
        // resultBtD.explanation.push(`(${binaryDigits[i]} x 2<sup>${counter}</sup> = ${temp})`)
    }
    resultBtD.converted.push(desimalTotal.toString())
    // console.log(`Total : ${desimalTotal}`);
    return resultBtD
}

// let coba1 = binaryToDecimal("11")
// console.log(coba1)
// console.log(coba1.converted.join(""))
// console.log(coba1.explanation.join("+\n"))

// let coba2 = binaryToDecimal("1010")
// console.log(coba2)
// console.log(coba2.converted.join(""))
// console.log(coba2.explanation.join("+\n"))