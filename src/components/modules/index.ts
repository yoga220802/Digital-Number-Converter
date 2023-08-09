import { Binary } from "./binary/binary";
import { Octal } from "./octal/octal";
import { Decimal } from "./decimal/decimal";
import { Hexa } from "./hexa/hexa";

export class DigitalConverter {
    static Binary(binary: string) {
        return new Binary(binary)
    }

    static Octal(octal: string) {
        return new Octal(octal)
    }

    static Decimal(decimal: string) {
        return new Decimal(decimal)
    }

    static Hexa(hexa: string) {
        return new Hexa(hexa)
    }
}

const binaryToOctal  = DigitalConverter.Binary("1111").toDecimal()
console.log(binaryToOctal);
