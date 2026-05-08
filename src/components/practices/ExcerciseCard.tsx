import { Link } from "react-router-dom";
import type { IExcersiseCard } from "../../interfaces/IExcersiseCard";

/**
 * ExcerciseCard component - A card to display an exercise with its details.
 */
export const ExcerciseCard = ({ title, description, level, link }: IExcersiseCard) => {
  return (
    <div className="exercise-grid">
      <div className="exercise-card">
        <span className="badge">{level}</span>
        <h3>{title}</h3>
        <p>
          {description}         
        </p>
        <Link to={link} className="btn-exercise">
          Ver ejercicio →
        </Link>
      </div>
    </div>
  );
};
