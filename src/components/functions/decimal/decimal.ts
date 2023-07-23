import { ConverterResult, Result } from "../../utils/customDataTypes"
import { decimalToBinary } from "./toBinary"
import { decimalToHexa } from "./toHexa"
import { decimalToOctal } from "./toOctal"

export class Decimal {
    private _DecimalNum: string
    private result: Result
    constructor(decimalNum: string) {
        this._DecimalNum = decimalNum
        this.result = {
            converted: "",
            explanation: "",
        }
    }

    toBinary() {
        let _toBinary: ConverterResult = decimalToBinary(this._DecimalNum)
        this.result.converted = _toBinary.converted.map((item, index) => {
            if (index > 0 && index % 4 === 0) {
                return ` ${item}`
            } else {
                return `${item}`
            }
        }).join("")
        this.result.explanation = _toBinary.explanation.join("\n")
        return this.result
    }

    toOctal() {
        let _toOctal: ConverterResult = decimalToOctal(this._DecimalNum)
        this.result.converted = _toOctal.converted.join("")
        this.result.explanation = _toOctal.explanation.join("\n")
        return this.result
    }

    toHexa() {
        let _toHexa = decimalToHexa(this._DecimalNum)
        this.result.converted = _toHexa.converted.join("")
        this.result.explanation = _toHexa.explanation.join("\n")
        return this.result
    }
}

// let coba = new Decimal("100")
// console.log(coba.toBinary());
