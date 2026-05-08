import { useState } from "react";
import "./eloquentJS.scss";
import { greaterThanZero } from "../../../../helpers/numbersHelper";

/** Excersise that renders a grid that initially has the dimensions of a chessboard but can render any sized grid */
export const Chessboard = () => {
  const [sizes, setSizes] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const tile = (tileNumber: number, rowNumber: number): string => {
    const evenRow = rowNumber % 2 === 0;
    if (evenRow) {
      return tileNumber % 2 ? "dark" : "light";
    }
    return tileNumber % 2 ? "light" : "dark";
  };

  const chessboard = (x: number, y: number) => {
    let rows = x || 0;
    let columns = y || 0;

    const board: number[][] = [];
    let n = 0;
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let z = 0; z < columns; z++) {
        board[i][z] = n;
        n++;
      }
    }

    return (
      <div
        className="chessboard"
        style={
          {
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
          } as React.CSSProperties
        }
      >
        {board.map((row, rowIdx) =>
          row.map((cell, cellIdx) => (
            <div
              key={`${rowIdx}-${cellIdx}`}
              className={`square ${tile(cell, rowIdx)}`}
            >
              {tile(cell, rowIdx) === "light" ? "\u00A0\u00A0" : "#"}
            </div>
          )),
        )}
      </div>
    );
  };

  return (
    <div>
      <h3>Chessboard</h3>
      {chessboard(8, 8)}
      <h3>Sizeable grid</h3>
      <input
        type="number"
        placeholder="Rows"
        value={sizes.x}
        onChange={(e) => setSizes({ ...sizes, x: greaterThanZero(Number(e.target.value)) ? Number(e.target.value) : 0 })}
      />
      <input
        type="number"
        placeholder="Columns"
        value={sizes.y}
        onChange={(e) => setSizes({ ...sizes, y: greaterThanZero(Number(e.target.value)) ? Number(e.target.value) : 0 })}
      />
      {sizes.x > 0 && sizes.y > 0 && chessboard(sizes.x, sizes.y)}
    </div>
  );
};
