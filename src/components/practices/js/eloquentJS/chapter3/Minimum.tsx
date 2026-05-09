import { useState } from "react";

/** Component that shows the minimum excercise */
export const Minimum = () => {
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  const minFunction = (x: number) => {
    return (number: number) => x < number;
  };

  const minimal = minFunction(first);

  return (
    <div>
      <h3>Introduce two numbers</h3>
      <h3>to find the minimum</h3>
      <input
        type="number"
        placeholder="First number"
        onChange={(e) => setFirst(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Second number"
        onChange={(e) => setSecond(Number(e.target.value))}
      />
      {first !== second && <p>The minimum is: {minimal(second) ? first : second}</p>}
    </div>
  );
};
