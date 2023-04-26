import { HexaFormat } from "./customDataTypes";

export const hexaFormater = (): HexaFormat => {

  const toHexa = (char: string): string => {
    switch (char) {
      case "10":
        return "A";
        break;
      case "11":
        return "B";
        break;
      case "12":
        return "C";
        break;
      case "13":
        return "D";
        break;
      case "14":
        return "E";
        break;
      case "15":
        return "F";
      default:
        return char.toString();
        break;
    }
  };
  
  const toecimal = (char: string): string => {
      switch (char) {
        case "10":
          return "A";
          break;
        case "11":
          return "B";
          break;
        case "12":
          return "C";
          break;
        case "13":
          return "D";
          break;
        case "14":
          return "E";
          break;
        case "15":
          return "F";
        default:
          return char.toString();
          break;
      }
}

  return { toHexa, toecimal };
};
