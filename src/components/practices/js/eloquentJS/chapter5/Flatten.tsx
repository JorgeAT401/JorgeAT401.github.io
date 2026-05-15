/** A component that shows the excercise of Flatten which consist in flattening an array of arrays using reduce and concat */
export const Flatten = () => {
  const arrays = [[1, 2, 3], [4, 5], [6]];

  const flattening = (arr: any[]): number[] => {
    const flatData = arr.reduce((acc, element) => {
      return acc.concat(element);
    }, [] as number[]);
    console.log(flatData);
    return flatData;
  };

  const result = flattening(arrays);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontFamily: "sans-serif",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h3 style={{ marginTop: 0, color: "#333" }}>Exercise: Flattening</h3>

      <div style={{ marginBottom: "15px" }}>
        <strong>Input:</strong>
        <code
          style={{
            display: "block",
            background: "#f4f4f4",
            padding: "5px",
            borderRadius: "4px",
          }}
        >
          {JSON.stringify(arrays)}
        </code>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <strong>Output:</strong>
        <div style={{ display: "flex", gap: "8px", marginTop: "5px" }}>
          {result.map((num, i) => (
            <span
              key={i}
              style={{
                background: "#007bff",
                color: "white",
                padding: "5px 10px",
                borderRadius: "50%",
                fontSize: "14px",
              }}
            >
              {num}
            </span>
          ))}
        </div>
      </div>

      <p style={{ fontSize: "12px", color: "#666", fontStyle: "italic" }}>
        Made with <code>reduce</code> and <code>concat</code>.
      </p>
    </div>
  );
};
