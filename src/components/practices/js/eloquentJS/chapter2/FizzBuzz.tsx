import "../eloquentJS.scss";

/**all the numbers from 1 to 100 with two eceptions. Numbers divisible by 3 are fizz and numbers divisible by 5 and not 3 are buzz */
export const FizzBuzz = () => {
  /** This function determines whether a number is fizz, buzz, or neither */
  const fizzOrBuzz = (number: number | string) => {
    const toNumber = Number(number);
    if(toNumber === 0) return "0";
    if (isNaN(toNumber)) return "0";

    if (toNumber % 3 == 0) return "Fizz";
    else if (toNumber % 5 == 0) return "Buzz";
    else return toNumber.toString();
  };

  /** This function determines whether a number is fizz, buzz, fizzbuzz, or neither */
  const fizzBuzz = (number: number | string) => {
    const toNumber = Number(number);
    if(toNumber === 0) return "0";
    if (isNaN(toNumber)) return "0";

    if (toNumber % 3 == 0 && toNumber % 5 == 0) return "FizzBuzz";
    else if (toNumber % 3 == 0) return "Fizz";
    else if (toNumber % 5 == 0) return "Buzz";
    else return toNumber.toString();
  };

  const renderFizzOrBuzz = () => {
    const array: string[] = [];
    for (let i = 0; i <= 100; i++) {
      array.push(fizzOrBuzz(i).toString());
    }

    return (
      <div className="fizz-container">
        {array.map((x, idx) => (
          <div key={idx} className={`item ${x.toLowerCase()}`}>
            {x}
          </div>
        ))}
      </div>
    );
  };

  const renderFizzBuzz = () => {
    const array: string[] = [];
    for (let i = 0; i <= 100; i++) {
      array.push(fizzBuzz(i).toString());
    }

    return (
      <div className="fizz-container">
        {array.map((x, idx) => (
          <div key={idx} className={`item ${x.toLowerCase()}`}>
            {x}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <h3>Fizz or Buzz</h3>
      {renderFizzOrBuzz()}
      <h3>FizzBuzz</h3>
      {renderFizzBuzz()}
    </>
  );
};
