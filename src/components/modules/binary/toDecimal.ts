import { ConverterResult } from "../../utils/customDataTypes"

export function binaryToDecimal(binaryNum: string) {
    let resultBtD: ConverterResult = {
        converted: [],
        explanation: []
    }

    let binaryDigits: number[] = binaryNum.split("").map(Number)

    resultBtD.explanation.push("Kalikan setiap digit bilangan biner dengan 2 pangkat i dimulai dari sebelah kanan.\n Dengan i merupakan posisi digit dari kanan ke kiri dimulai dari 0")

    let counter: number = 0
    let desimalTemp: number[] = []
    let desimalTotal: number = 0
    for (let i = binaryDigits.length - 1; i >= 0; i--) {
        let temp: number = binaryDigits[i] * (Math.pow(2, counter))
        resultBtD.explanation.push(`(${binaryDigits[i]} x 2^${counter} = ${temp})`)
        desimalTemp.push(temp)
        counter++
    }

    resultBtD.explanation.push(`Jumlahkan semua hasil perkalian sebelumnya.`)
    desimalTemp.forEach((item) => {
        desimalTotal += item
    })
    resultBtD.explanation.push(`${desimalTemp.join(" + ")} = ${desimalTotal}`)
    resultBtD.converted.push(desimalTotal.toString())
    return resultBtD
}

// let coba1 = binaryToDecimal("1101")
// console.log(coba1)
// console.log(coba1.converted.join(""))
// console.log(coba1.explanation.join("+\n"))

// let coba2 = binaryToDecimal("1010")
// console.log(coba2)
// console.log(coba2.converted.join(""))
// console.log(coba2.explanation.join("+\n"))