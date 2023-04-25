function decimalToBinary(decimalNum) {
    let resultDtB = {
        binary: [],
        explanation: [],
    }
    let remainDecimal = decimalNum

    if (remainDecimal <= 1) {
        resultDtB.explanation.push("Desimal 1 dan 0 tidak perlu dikonversi")
        resultDtB.binary.unshift(remainDecimal)
    } else {
        while (remainDecimal > 0) {
            let temp1 = Math.floor(remainDecimal / 2)
            let temp2 = remainDecimal % 2

            resultDtB.explanation.push(`${remainDecimal} / 2 = ${temp1}, sisa ${temp2}`)
            resultDtB.binary.unshift(temp2)
            remainDecimal = temp1
        }

        while (resultDtB.binary.length % 4 !== 0) {
            resultDtB.binary.unshift(0)
        }
    }


    return resultDtB
}

module.exports = decimalToBinary
// let cobs = decimalToBinary(10)
// console.log(cobs.binary.join(""));
// console.log(cobs.explanation.join("\n"));

