import { useMemo, useState } from "react";

export const SumOfRange = () => {
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  const handleStepChange = (e: number) => {
    setStep(isNaN(e) || e <= 0 ? 1 : e);
  }

  /**
   * a useMemo that calculates an array of numbers from start number to end number
   */
  const sum = useMemo(() => {
    if (isNaN(start) || isNaN(end) || isNaN(step)) return;
    if (start == end) return ;

    const startRange = start < end ? start : end;
    const endRange = start > end ? start : end;
    const array: number[] = [];

    for (let i = startRange; i <= endRange; i += step) {
      array.push(i);
    }
    let result = 0;
    for (let num of array) result += num;
    return result;
  }, [start, end, step]);

  return (
    <div>
      <input
        className="form-control mb-3"
        type="number"
        placeholder="Enter the start of the range"
        onChange={(e) => setStart(Number(e.target.value))}
      />
      <input
        className="form-control mb-3"
        type="number"
        placeholder="Enter the end of the range"
        onChange={(e) => setEnd(Number(e.target.value))}
      />
      <input
        className="form-control mb-3"
        type="number"
        placeholder="(optional) you can enter a custom step for the array calculation"
        onChange={(e) => handleStepChange(Number(e.target.value))}
      />
      {sum !== undefined && <p>The sum of the range is: {sum}</p>}
    </div>
  );
};
