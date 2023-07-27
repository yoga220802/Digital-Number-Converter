import { ConverterResult, Result } from "../../utils/customDataTypes";
import { hexaToDecimal } from "./toDecimal";
import { Decimal } from "../decimal/decimal";


export const hexaToOctal = (hexNum: string) => {
    let resultHtO: ConverterResult = {
        converted: [],
        explanation: []
    }

    resultHtO = hexaToDecimal(hexNum)
    let _decimalToOctal: Result = new Decimal(resultHtO.converted.join("")).toOctal()
    // console.log(_decimalToOctal.explanation);
    resultHtO.converted = _decimalToOctal.converted.split(" ")
    resultHtO.explanation.push("Ubah bilangan hasil konversi desimal ke oktal")
    resultHtO.explanation.push(_decimalToOctal.explanation)
    resultHtO.explanation.push(`Susun sisa hasil bagi dari yang terbawah => ${_decimalToOctal.converted.split("")}`)    

    return resultHtO
}

// let coba = hexaToOctal("ABC")
// console.log(coba);

// console.log(`Converted : ${coba.converted}`);
// console.log(`Explenation : 
// ${coba.explanation.join("\n")}`);

