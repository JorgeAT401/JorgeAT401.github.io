import { useState } from "react";

/** A component that loads the result of a function that tells
 * if a number is even by sustracting 2 until it reaches 0 or 1. If it reaches 0 it's even, if it reaches 1 it's odd.
 */
export const Recursion = () => {
  const [input, setInput] = useState<number>(0);

  const isEven = (num: number) => {
    if (num === 1) return false;

    if (num < 0) return isEven(-num);

    const sustracted = num - 2;
    if (sustracted === 0) return true;
    else return isEven(sustracted);
  };

  const handleChange = (num: number) => {
    if(num < 0) setInput(0);
    else if(num > 20000) setInput(20000);
    else setInput(num);
  }

  return (
    <div>
      <h3>Introduce a Number</h3>
      <input
        value={input}
        type="number"
        min={0}
        max={20000}
        onChange={(e) => handleChange(Number(e.target.value)) }
      />
      <p>{input} is {isEven(input) ? "Even" : "Odd"}</p>
    </div>
  );
};
