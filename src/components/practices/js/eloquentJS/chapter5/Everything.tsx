/** A local custom card style function */
const cardStyle = (passed: boolean) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  borderRadius: "6px",
  backgroundColor: passed ? "#d4edda" : "#f8d7da",
  color: passed ? "#155724" : "#721c24",
  border: `1px solid ${passed ? "#c3e6cb" : "#f5c6cb"}`,
});
/**Component that shows the Everything excercise that
 * implement every and some functions that behave like the standard Array.prototype.every and Array.prototype.some.
 */
export const Everything = () => {
  const numbers = [2, 4, 6, 8, 10];

  const every = <T,>(arr: T[], test: (val: T) => boolean) => {
    for (const element of arr) {
      if (!test(element)) return false;
    }
    return true;
  };

  const some = <T,>(arr: T[], test: (val: T) => boolean) => {
    for (const element of arr) {
      if (test(element)) return true;
    }
    return false;
  };

  const allEven = every(numbers, (n) => n % 2 === 0);
  const hasGreaterFive = some(numbers, (n) => n > 5);
  const allGreaterTen = every(numbers, (n) => n > 10);

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        border: "1px solid #eaeaea",
        maxWidth: "500px",
      }}
    >
      <h3
        style={{
          color: "#ff4757",
          borderBottom: "2px solid #ff4757",
          paddingBottom: "10px",
        }}
      >
        🔍 Predicados de Array: Every & Some
      </h3>

      <p>
        Array actual: <code>[{numbers.join(", ")}]</code>
      </p>

      <div style={{ display: "grid", gap: "10px", marginTop: "15px" }}>
        <div style={cardStyle(allEven)}>
          <span>¿Todos son pares?</span>
          <strong>{allEven ? "SÍ" : "NO"}</strong>
        </div>

        <div style={cardStyle(hasGreaterFive)}>
          <span>¿Hay alguno mayor a 5?</span>
          <strong>{hasGreaterFive ? "SÍ" : "NO"}</strong>
        </div>

        <div style={cardStyle(allGreaterTen)}>
          <span>¿Todos son mayores a 10?</span>
          <strong>{allGreaterTen ? "SÍ" : "NO"}</strong>
        </div>
      </div>
    </div>
  );
};
