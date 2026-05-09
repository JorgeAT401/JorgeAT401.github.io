import { useState } from "react";
import { ExcerciseCard } from "../ExcerciseCard";

export const JavascriptExcersises = () => {
  const [activeSection, setActiveSection] = useState<string | null>(
    "",
  );

  const sections = [
    {
      id: "EloquentJS",
      title: "Eloquent JavaScript",
      exercises: [
        {
          title: "Looping a triangle",
          description: "Write a loop that makes a triangle of # that is 7 lines tall.",
          level: "Easy",
          link: "triangle",
        },
        {
          title: "FizzBuzz",
          description: "Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print “Fizz” instead of the number, and for numbers divisible by 5 (and not 3), print “Buzz” instead.",
          level: "Easy",
          link: "fizzbuzz",
        },
        {
          title: "Chessboard",
          description: "Write a program that renders a chessboard grid.",
          level: "Medium",
          link: "chessboard",
        },
        {
          title: "Minimum",
          description: "Write a function that takes two numbers and returns the smallest one.",
          level: "Easy",
          link: "minimum",
        },
        {
          title: "Recursion",
          description: "if a number is even by sustracting 2 until it reaches 0 or 1. If it reaches 0 it's even, if it reaches 1 it's odd.",
          level: "Easy",
          link: "recursion",
        },
        {
          title: "Bean Count",
          description: "Count the number of occurrences of a specific character in a string.",
          level: "Easy",
          link: "bean-count",
        },
      ],
    },
  ];

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
