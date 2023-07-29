import { Binary } from "../modules/binary/binary"

export class NumberValidation {
    private isValid: boolean
    private digitalNumber
    
    constructor(adigitalNumber: string) {
        this.isValid = true
        this.digitalNumber = adigitalNumber
    }

    isBinary() {
        let _isBinary = this.digitalNumber.split("").map(Number)
        _isBinary.forEach(item => {
            if (item < 0 || item > 1) {
                this.isValid = false
            }
        });
        return this.isValid
    }
}
let data = "abc"
let abc = new NumberValidation(data).isBinary()
if (abc) {
    let test = new Binary(data).toDecimal()
    console.log(test.converted);
    console.log(test.explanation);
    
} else {
    console.log(data.concat(" Bukan bilangan biner"));
    
}
