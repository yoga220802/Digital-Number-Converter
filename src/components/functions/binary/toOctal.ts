import { binaryFormatter } from "../../utils/binaryFormat";
import { ConverterResult } from "../../utils/customDataTypes";

export function binaryToOctal(binary:string) {
    let resultBtO: ConverterResult = {
        converted: [],
        explanation: []
    }
    let binaryDigits = binary.split("")
    binaryFormatter().addZero(3, binaryDigits)
    console.log(binaryDigits);
    binaryFormatter().binarySplit(3, binaryDigits.join(""))
    // console.log(binaryDigits);
}

binaryToOctal("110001")