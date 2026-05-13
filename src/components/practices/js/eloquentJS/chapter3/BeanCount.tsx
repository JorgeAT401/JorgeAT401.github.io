import { useMemo, useState } from "react";

/**
 * A component that counts the number of an specified character in a given string.
 * The component takes two props: the string to search through and the character to count.
 * It then displays the count of the specified character in the string.
 */
export const BeanCount = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [pickedChar, setPickedChar] = useState<string>("");
  const options = useMemo(
    () => [...new Set([...input].filter((c) => c.trim()))],
    [input],
  );

  const beanCount = useMemo(() => {
    let count = 0;
    [...input].forEach((char) => {
      if (char === pickedChar) count++;
    });
    return count;
  }, [input, pickedChar]); 
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setPickedChar("");
  };

  return (
    <div>
      <h2>Bean Count</h2>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Enter a sentence or a word"
        onChange={handleInputChange}
      />

      <div className="dropdown mb-3">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="dropdown"
          onClick={() => setIsOpened(!isOpened)}
        >
          Pick a character to count: {pickedChar || "Select a character"}
        </button>

        <ul className={`dropdown-menu ${isOpened ? "show" : ""}`}>
          {options.map((option, idx) => (
            <li key={idx}>
              <a
                className="dropdown-item"
                onClick={(e) => {
                  e.preventDefault();
                  setPickedChar(option);
                  setIsOpened(false);
                }}
              >
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h3>
        {" "}
        {pickedChar &&
          `The number of ${pickedChar} are ${beanCount}`}{" "}
      </h3>
    </div>
  );
};
