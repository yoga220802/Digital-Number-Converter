function decimalToOctal(decimalNum) {
    resultDtO = {
        octal: [],
        explanation: [],
    }
    let remainDecimal = decimalNum

    if (remainDecimal <= 1) {
        resultDtO.explanation.push("Desimal 1 dan 0 tidak perlu dikonversi")
        resultDtO.octal.unshift(remainDecimal)
    } else {
        while (remainDecimal > 0) {
            let temp1 = Math.floor(remainDecimal / 8)
            let temp2 = remainDecimal % 8

            resultDtO.explanation.push(`${remainDecimal} / 8 = ${temp1}, sisa ${temp2}`)
            resultDtO.octal.unshift(temp2)
            remainDecimal = temp1
        }
    }


    return resultDtO
}

// let cobs = decimalToOctal(8)
// console.log(cobs.octal.join(""));
// console.log(cobs.explanation.join("\n"));

module.exports = decimalToOctal