import { useState } from "react";
import { ExcerciseCard } from "../ExcerciseCard";
import { sections } from "./jsSections.ts"

export const JavascriptExcersises = () => {
  const [activeSection, setActiveSection] = useState<string | null>(
    "",
  );

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="exercises-container">
      {sections.map((section) => (
        <div key={section.id} className="accordion-section">
          <button
            className={`accordion-header ${activeSection === section.id ? "active" : ""}`}
            onClick={() => toggleSection(section.id)}
          >
            <span>{section.title}</span>
            <i
              className={`bi bi-chevron-down chevron ${activeSection === section.id ? "rotate" : ""}`}
            ></i>
          </button>
          <div
            className={`accordion-content ${activeSection === section.id ? "show" : ""}`}
          >
            <div className="exercise-grid">
              {section.exercises.map((ex, idx) => (
                <ExcerciseCard key={idx} {...ex} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
