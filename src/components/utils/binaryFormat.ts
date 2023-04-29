export const binaryFormatter = () => {
  const addZero = (multiples: number, obj: any) => {
    while (obj.length % multiples !== 0) {
      obj.unshift("0");
    }
  };

  const binarySplit = (sumOfElement: number, obj: string) => {
    const str: string = obj;
    let pattern: any;
    sumOfElement === 3 ? (pattern = /.{1,3}/g) : (pattern = /.{1,4}/g);
    const result = str.match(pattern)?.map((sub) => [sub]);
    return result;
    // console.log(result); // [["110"], ["001"]]
  };

  return { addZero, binarySplit };
};
