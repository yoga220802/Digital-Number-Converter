import { Result } from "../../utils/customDataTypes";

export class Converter {
    protected num: string
    protected result : Result;

    constructor(digitalNumber: string) {
        this.num = digitalNumber
        this.result = {
            converted : "",
            explanation : ""
        }
    }
}