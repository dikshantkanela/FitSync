import React from "react";

const ExCard = ({ exercises }) => {
  return (
    <div className="exercise-list bg-green-100 w-full h-full flex-col gap-3">
      {exercises.map((exercise, index) => (
        <div
          className="exercise-card mx-48 my-4 p-2 border-2 border-black bg-pink-100 rounded-lg shadow-2xl"
          key={index}
        >
          <h2 className="text-center font-semibold my-2 text-lg">
            {exercise.name}
          </h2>
          <p className="mt-1">
            <span className="font-semibold ">Type :</span> {exercise.type}
          </p>
          <p className="mt-1">
            <span className="font-semibold ">Muscle :</span> {exercise.muscle}
          </p>
          <p className="mt-1">
            <span className="font-semibold ">Equipment :</span>{" "}
            {exercise.equipment}
          </p>
          <p className="mt-1">
            <span className="font-semibold ">Difficulty :</span>{" "}
            {exercise.difficulty}
          </p>
          <p className="mt-1">
            <span className="font-semibold ">Instructions :</span>{" "}
            <ul className="list-disc ml-6">
              {exercise.instructions.split(". ").map((instruction, i) => (
                <li key={i}>{instruction.trim()}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExCard;
