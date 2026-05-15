import { useState } from "react";

/** A component that shows the excercise of MyOwnLoop which consist in creating a custom loop function */
export const MyOwnLoop = () => {
  const [logs, setLogs] = useState<string[]>([]);
  //   const loop = <T,>(
  //     value: T,
  //     condition: (val: T) => boolean,
  //     update: (val: T) => T,
  //     body: (val: T) => void,
  //   ) => {
  //     let val = value;

  //     const id = setInterval(() => {
  //       if (condition(val)) {
  //         body(val);
  //         val = update(val);
  //       } else {
  //         clearInterval(id);
  //       }
  //     }, 500);

  //     return () => clearInterval(id);
  //   };

  const loop = <T,>(
    value: T,
    condition: (val: T) => boolean,
    update: (val: T) => T,
    body: (val: T) => void,
  ) => {
    for (let val = value; condition(val); val = update(val)) {
      body(val);
    }
  };

  const runTest = () => {
    const newLogs: string[] = [];

    // Ejecutamos tu loop
    // Le pasamos una función que guarda mensajes en lugar de solo hacer console.log
    loop(
      3,
      (n) => n > 0,
      (n) => n - 1,
      (n) => newLogs.push(`Iteración: el valor es ${n}`),
    );

    setLogs(newLogs);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #4A90E2",
        borderRadius: "12px",
        backgroundColor: "#f9f9f9",
        maxWidth: "450px",
        fontFamily: "monospace",
      }}
    >
      <h3 style={{ color: "#4A90E2" }}>🛠️ Custom Loop Engine</h3>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        This function abstracts a <code>for</code> using higher-order functions.
      </p>

      <button
        onClick={runTest}
        style={{
          backgroundColor: "#4A90E2",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Run Loop (3 to 1)
      </button>

      {logs.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#282c34",
            color: "#abb2bf",
            padding: "15px",
            borderRadius: "8px",
            fontSize: "0.85rem",
          }}
        >
          {logs.map((log, i) => (
            <div
              key={i}
              style={{
                borderLeft: "2px solid #61dafb",
                paddingLeft: "10px",
                marginBottom: "5px",
              }}
            >
              {log}
            </div>
          ))}
          <div style={{ color: "#98c379", marginTop: "10px" }}>
            ✓ False condition: Loop completed.
          </div>
        </div>
      )}
    </div>
  );
};
