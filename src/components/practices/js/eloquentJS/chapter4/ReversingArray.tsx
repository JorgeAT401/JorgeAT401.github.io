/** Component of the excercise Reversing array that shows 2 methods that reverse the order of an array
 * One by creating a new array and the other by mutating the original array
 */
export const ReversingArray = () => {
  const array1 = [..."FirstArray"];
  const array2 = [..."SecondArray"];

  const reversingFirst = (arr: string[]) => {
    if (arr === undefined) return;
    if (arr.length <= 0) return;
    let newArray: string[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  };

  const reversingSecond = (arr: string[]) => {
    if (arr === undefined) return;
    if (arr.length <= 0) return;
    let temp = "";
    let tempIndex = 0;
    for (let i = arr.length - 1; i >= arr.length / 2; i--) {
      temp = arr[i];
      arr[i] = arr[tempIndex];
      arr[tempIndex] = temp;
      tempIndex++;
    }
    return arr;
  };

  return (
    <div>
      <h2>Reversing this array:{`[${array1.toString()}]`}</h2>
      <h2>by creating a new one: </h2>
      <h3>[{reversingFirst(array1)?.toString()}]</h3>
      <h2>Reversing this other array:{`[${array2.toString()}]`}</h2>
      <h2>by mutating the original one: </h2>
      <h3>[{reversingSecond(array2)?.toString()}]</h3>
    </div>
  );
};
