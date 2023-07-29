import { Converter } from "../converter/converter";
import { binaryToDecimal } from "./toDecimal";
import { binaryToHexa } from "./toHexa";
import { binaryToOctal } from "./toOctal";

export class Binary extends Converter {

  constructor(binaryNum: string) {
    super(binaryNum)
  }

  toOctal() {
    let _toOctal = binaryToOctal(this.num);
    this.result.converted = _toOctal.converted.join("");
    this.result.explanation = _toOctal.explanation.join("\n\n");

    return this.result;
  }

  toDecimal() {
    let _toDecimal = binaryToDecimal(this.num);
    this.result.converted = _toDecimal.converted.join("");
    this.result.explanation = _toDecimal.explanation.join("\n");

    return this.result;
  }

  toHexa() {
    let _toHexa = binaryToHexa(this.num);
    this.result.converted = _toHexa.converted.join("");
    this.result.explanation = _toHexa.explanation.join("\n\n");

    return this.result;
  }
}

// let coba = new Binary("1000101")
// let binary = coba.toDecimal()
// let ocatal = coba.toOctal()
// console.log(binary.converted);
// console.log(ocatal.explanation);
// let coba2 = new Binary("1000101").toDecimal();
// console.log(coba2.converted);
// console.log(coba2.explanation);
// let coba3 = new Binary("1000101").toHexa()
// console.log(coba3.converted);
// console.log(coba3.explanation);
