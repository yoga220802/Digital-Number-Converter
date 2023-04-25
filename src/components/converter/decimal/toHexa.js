const hexaFormat = require('../hexaFormat')

function decimalToHexa(decimalNum) {
    resultDtH = {
        hexa: [],
        explanation: [],
    }
    let remainDecimal = decimalNum

    if (remainDecimal <= 1) {
        resultDtH.explanation.push("Desimal 1 dan 0 tidak perlu dikonversi")
        resultDtH.hexa.unshift(remainDecimal)
    } else {
        while (remainDecimal > 0) {
            let temp1 = Math.floor(remainDecimal / 16)
            let temp2 = remainDecimal % 16

            if (temp2 >= 10 && temp2 <= 15) {
                resultDtH.hexa.unshift(hexaFormat(temp2))
                resultDtH.explanation.push(`${remainDecimal} / 16 = ${temp1}, sisa ${temp2} diubah jadi ${hexaFormat(temp2)}`)
            } else {
                resultDtH.hexa.unshift(temp2)
                resultDtH.explanation.push(`${remainDecimal} / 16 = ${temp1}, sisa ${temp2}`)
            }
            remainDecimal = temp1
        }
    }


    return resultDtH
}

// let cobs = decimalToHexa(75)
// console.log(cobs.hexa.join(""));
// console.log(cobs.explanation.join("\n"));

module.exports = decimalToHexa