const decimalToBinary = require("./toBinary");
const decimalToHexa = require("./toHexa");
const decimalToOctal = require("./toOctal");

class Decimal {
    constructor(number) {
        this.number = number;
        this.result = {
            converted: null,
            explanation: null,
        };
    }

    toBinary() {
        let _toBinary = decimalToBinary(this.number);
        this.result.converted = _toBinary.binary.map((item, index) => {
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
        let _toOctal = decimalToOctal(this.number);
        this.result.converted = _toOctal.octal.join("");
        this.result.explanation = _toOctal.explanation.join("\n");
        return this.result;
    }

    toHexa() {
        let _toHexa = decimalToHexa(this.number);
        this.result.converted = _toHexa.hexa.join("");
        this.result.explanation = _toHexa.explanation.join("\n");
        return this.result;
    }
}

let coba = new Decimal(100);
let coba1 = coba.toBinary();
console.log(coba1.converted);
console.log(coba1.explanation);

let coba2 = coba.toOctal();
// console.log(coba2)
// console.log(coba2.converted);
// console.log(coba2.explanation);

let coba3 = coba.toHexa();
// console.log(coba3);
// console.log(coba3.converted);
// console.log(coba3.explanation);
