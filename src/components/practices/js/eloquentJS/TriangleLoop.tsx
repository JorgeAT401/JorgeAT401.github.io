/** The component of the triangle loop excersice */
export const TriangleLoop = () => {
  const triangleForLoop = (): React.JSX.Element => {
    const triangle: string[] = [];
    let row = "";
    for (let i = 0; i <= 7; i++) {
      row += "#";
      triangle.push(row);
    }
    return (
      <>
        {triangle.map((x) => (
          <div>{x}</div>
        ))}
      </>
    );
  };

  const triangleWhileLoop = (): React.JSX.Element => {
    const triangle: string[] = [];
    let row = "";
    let i = 0;
    while (i <= 7) {
      row += "#";
      triangle.push(row);
      i++;
    }
    return (
      <>
        {triangle.map((x) => (
          <div>{x}</div>
        ))}
      </>
    );
  };

  const triangleDoWhileLoop = (): React.JSX.Element => {
    const triangle: string[] = [];
    let row = "";
    let i = 0;
    do {
      row += "#";
      triangle.push(row);
      i++;
    } while (i <= 7);
    return (
      <>
        {triangle.map((x) => (
          <div>{x}</div>
        ))}
      </>
    );
  };

  return (
    <div>
      <h4>Looping a triangle with for loop</h4>
      {triangleForLoop()}
      <h4>Looping a triangle with while loop</h4>
      {triangleWhileLoop()}
      <h4>Looping a triangle with do while loop</h4>
      {triangleDoWhileLoop()}
    </div>
  );
};
