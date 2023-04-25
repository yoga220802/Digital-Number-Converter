function decimalToHexa(decimalNum) {
    resultDtB = {
        hexa: [],
        explanation: [],
    }
    let remainDecimal = decimalNum

    if (remainDecimal <= 1) {
        resultDtB.explanation.push("Desimal 1 dan 0 tidak perlu dikonversi")
        resultDtB.hexa.unshift(remainDecimal)
    } else {
        while (remainDecimal > 0) {
            let temp1 = Math.floor(remainDecimal / 16)
            let temp2 = remainDecimal % 16

            resultDtB.explanation.push(`${remainDecimal} / 2 = ${temp1}, sisa ${temp2}`)
            resultDtB.hexa.unshift(temp2)
            remainDecimal = temp1
        }
    }


    return resultDtB
}

let cobs = decimalToHexa(500)
console.log(cobs.hexa.join(""));
console.log(cobs.explanation.join("\n"));

// export default decimalToHexa;