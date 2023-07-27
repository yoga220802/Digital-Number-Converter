import { ConverterResult, Result } from "../../utils/customDataTypes";
import { Converter } from "../converter/converter";
import { hexaToBinary } from "./toBinary";
import { hexaToDecimal } from "./toDecimal";
import { hexaToOctal } from "./toOctal";

export class Hexa extends Converter {
    constructor(hexaNum: string) {
        super(hexaNum)
    }

    toBinary() {
        let _toBinary: ConverterResult = hexaToBinary(this.num)
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
        let _toDecimal: ConverterResult = hexaToDecimal(this.num)
        this.result.converted = _toDecimal.converted.join("")
        this.result.explanation = _toDecimal.explanation.join("\n")
        return this.result
    }

    toOctal() {
        let _toOctal:ConverterResult = hexaToOctal(this.num)
        this.result.converted = _toOctal.converted.join("")
        this.result.explanation = _toOctal.explanation.join("\n")
        return this.result
    }
}