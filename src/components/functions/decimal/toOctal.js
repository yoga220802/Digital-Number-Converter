function decimalToOctal(decimalNum) {
    resultDtB = {
        octal: [],
        explanation: [],
    }
    let remainDecimal = decimalNum

    if (remainDecimal <= 1) {
        resultDtB.explanation.push("Desimal 1 dan 0 tidak perlu dikonversi")
        resultDtB.octal.unshift(remainDecimal)
    } else {
        while (remainDecimal > 0) {
            let temp1 = Math.floor(remainDecimal / 8)
            let temp2 = remainDecimal % 8

            resultDtB.explanation.push(`${remainDecimal} / 2 = ${temp1}, sisa ${temp2}`)
            resultDtB.octal.unshift(temp2)
            remainDecimal = temp1
        }
    }


    return resultDtB
}

let cobs = decimalToOctal(8)
console.log(cobs.octal.join(""));
console.log(cobs.explanation.join("\n"));

export default decimalToOctal;