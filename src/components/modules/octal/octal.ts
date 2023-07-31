import { ConverterResult } from "../../../utils/customDataTypes";
import { Converter } from "../converter/converter";
import { octalToBinary } from "./toBinary";
import {octalToDesimal} from "./toDecimal"
import {octalToHexa} from "./toHexa"

export class Octal extends Converter {
    constructor(octalNum: string) {
        super(octalNum)
    }

    toBinary() {
        let _toBinary: ConverterResult = octalToBinary(this.num)
        this.result.converted = _toBinary.converted.join(" ")
        this.result.explanation = _toBinary.explanation.join("\n")
        return this.result
    }

    toDecimal() {
        let _toDecimal: ConverterResult = octalToDesimal(this.num)
        this.result.converted = _toDecimal.converted.join("")
        this.result.explanation = _toDecimal.explanation.join("\n")
        return this.result
    }

    toHexa() {
        let _toHexa: ConverterResult = octalToHexa(this.num)
        this.result.converted = _toHexa.converted.join("")
        this.result.explanation = _toHexa.explanation.join("\n")
        return this.result
    }
}

// let coba = new Octal("12")
// console.log(coba.toHexa());
