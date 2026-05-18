import { useState } from "react";
import { Group } from "./Group";

export const GroupManager = () => {
  const [myGroup, setMyGroup] = useState<Group<string>>(
    Group.from(["React", "TypeScript", "SCSS"]),
  );
  const [inputValue, setInputValue] = useState("");

  const handleAdd = (e: string) => {
    if (!inputValue.trim()) return;

    const newGroup = Group.from([...myGroup]) as Group<string>;
    newGroup.add(inputValue.trim());

    setMyGroup(newGroup);
    setInputValue("");
  };

  const handleDelete = (tag: string | undefined) => {
    if (!tag) return;
    const newGroup = Group.from([...myGroup]) as Group<string>;
    newGroup.delete(tag);
    setMyGroup(newGroup);
  };

  return (
    <div className="card shadow-sm p-3 mb-4" style={{ maxWidth: "400px" }}>
      <h5 className="card-title text-primary">Mis Skills (Unique Group)</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Nueva skill..."
        value={inputValue}
        onChange={(e) => {
          e.preventDefault();
          setInputValue(e.target.value);
        }}
      />
      <button
        className="btn btn-primary mb-3"
        type="submit"
        onClick={() => handleAdd(inputValue)}
      >
        Agregar
      </button>

      <div className="d-flex flex-wrap gap-2">
        {[...myGroup].map((tag) => (
          <span
            key={tag}
            className="badge bg-info text-dark d-flex align-items-center gap-2 p-2"
          >
            {tag}
            <button
              className="btn-close btn-close-white"
              style={{ fontSize: "0.6rem" }}
              onClick={() => handleDelete(tag)}
            ></button>
          </span>
        ))}

        {myGroup.has("") && (
          <p className="text-muted small">No hay etiquetas aún.</p>
        )}
      </div>

      <div className="mt-3 small text-muted border-top pt-2">
        Total de elementos únicos: <strong>{[...myGroup].length}</strong>
      </div>
    </div>
  );
};
