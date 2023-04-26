export const binaryFormatter = () => {
  const addZero = (multiples: number, obj: any) => {
    while (obj.length % multiples !== 0) {
      obj.unshift("0");
    }
  };

  const binarySplit = (sumOfElement: number = 1, obj: string = "1") => {
    const str: string = obj;
    let pattern;
    sumOfElement === 3 ? pattern = /.{1,3}/g : pattern = /.{1,4}/g
const result = str.match(pattern)?.map((sub) => [sub]);
  
    console.log(result); // [["110"], ["001"]]
  };
  

  return { addZero, binarySplit };
};
