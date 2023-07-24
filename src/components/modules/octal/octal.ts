import { Result } from "../../utils/customDataTypes";
import { octalToBinary } from "./toBinary";
import {octalToDesimal} from "./toDecimal"
import {octalToHexa} from "./toHexa"

export class Octal {
    private _octalNum: string
    private result: Result

    constructor(octalNum: string) {
        this._octalNum = octalNum
        this.result = {
            converted: "",
            explanation: ""
        }
    }

    toBinary() {
        let _toBinary = octalToBinary(this._octalNum)
        this.result.converted = _toBinary.converted.join(" ")
        this.result.explanation = _toBinary.explanation.join("\n")
        return this.result
    }

    toDecimal() {
        let _toDecimal = octalToDesimal(this._octalNum)
        this.result.converted = _toDecimal.converted.join("")
        this.result.explanation = _toDecimal.explanation.join("\n")
        return this.result
    }

    toHexa() {
        let _toHexa = octalToHexa(this._octalNum)
        this.result.converted = _toHexa.converted.join("")
        this.result.explanation = _toHexa.explanation.join("\n")
        return this.result
    }
}

// let coba = new Octal("12")
// console.log(coba.toHexa());
