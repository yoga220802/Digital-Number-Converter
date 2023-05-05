import { HexaFormat } from "./customDataTypes";

export const hexaFormater = (): HexaFormat => {

  const toHexa = (char: string): string => {
    switch (char) {
      case "10":
        return "A";
      case "11":
        return "B";
      case "12":
        return "C";
      case "13":
        return "D";
      case "14":
        return "E";
      case "15":
        return "F";
      default:
        return char.toString();
    }
  };
  
  const toecimal = (char: string): string => {
      switch (char) {
        case "10":
          return "A";
        case "11":
          return "B";
        case "12":
          return "C";
        case "13":
          return "D";
        case "14":
          return "E";
        case "15":
          return "F";
        default:
          return char.toString();
      }
}

  return { toHexa, toecimal };
};
