interface IArray {
  /**
   * The value of the array
   */
  value: number;
  /**
   * The rest of the object
   */
  rest: IArray | null;
}

/** component that shows the list excersise */
export const List = () => {
  const array = [1, 2, 3];

  const prepend = (num: number, obj: IArray | null) => {
    return { value: num, rest: obj };
  };

  const arrayToList = (arr: number[]) => {
    let obj = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      obj = prepend(arr[i], obj);
    }
    return obj;
  };

  const list = arrayToList(array);

  const listToArray = (obj: IArray | null) => {
    const newArray = [];
    for (let node = obj; node !== null; node = node.rest) {
      newArray.push(node.value);
    }
    return newArray;
  };

  const nth = (obj: IArray, index: number) => {
    let num = 0;
    for (let i = 0; i <= index; i++) {
      const { value, rest } = obj;
      if (i === index) num = rest?.value ?? value;
    }
    return num;
  };

  const nthR = (obj: IArray | null, index: number) => {
    if (obj === null) return undefined;
    if (index <= 0) return obj?.value;
    return nthR(obj.rest ?? null, index - 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h2>List Exercise</h2>

      <section>
        <h3>1. Array to List (Objeto anidado):</h3>
        <pre style={{ background: "#f4f4f4", padding: "10px" }}>
          {JSON.stringify(list, null, 2)}
        </pre>
      </section>

      <section>
        <h3>2. List back to Array:</h3>
        <p>Resultado: {JSON.stringify(listToArray(list))}</p>
      </section>
    </div>
  );
};
