import { Result } from "../../utils/customDataTypes";
import { decimalToBinary } from "./toBinary";
import { decimalToHexa } from "./toHexa";
import { decimalToOctal } from "./toOctal";

class Decimal {
    private num: number
    private result: Result
    constructor(number: number) {
        this.num = number;
        this.result = {
            converted: "",
            explanation: "",
        };
    }

    toBinary() {
        let _toBinary = decimalToBinary(this.num);
        this.result.converted = _toBinary.converted.map((item, index) => {
            if (index > 0 && index % 4 === 0) {
                return ` ${item}`;
            } else {
                return `${item}`;
            }
        })
            .join("");
        this.result.explanation = _toBinary.explanation.join("\n");
        return this.result;
    }

    toOctal() {
        let _toOctal = decimalToOctal(this.num);
        this.result.converted = _toOctal.converted.join("");
        this.result.explanation = _toOctal.explanation.join("\n");
        return this.result;
    }

    toHexa() {
        let _toHexa = decimalToHexa(this.num);
        this.result.converted = _toHexa.converted.join("");
        this.result.explanation = _toHexa.explanation.join("\n");
        return this.result;
    }
}