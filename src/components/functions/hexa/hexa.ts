import { ConverterResult, Result } from "../../utils/customDataTypes";
import { hexaToBinary } from "./toBinary";
import { hexaToDecimal } from "./toDecimal";
import { hexaToOctal } from "./toOctal";

export class Hexa {
    private _hexaNum: string
    private result: Result 
    constructor(hexaNum: string) {
        this._hexaNum = hexaNum
        this.result = {
            converted : "",
            explanation : ""
        }
    }

    toBinary() {
        let _toBinary: ConverterResult = hexaToBinary(this._hexaNum)
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

    toDecimal() {
        let _toDecimal: ConverterResult = hexaToBinary(this._hexaNum)
        this.result.converted = _toDecimal.converted.join("")
        this.result.explanation = _toDecimal.explanation.join("\n")
        return this.result
    }

    toOctal() {
        let _toOctal:ConverterResult = hexaToOctal(this._hexaNum)
        this.result.converted = _toOctal.converted.join("")
        this.result.explanation = _toOctal.explanation.join("\n")
        return this.result
    }
}