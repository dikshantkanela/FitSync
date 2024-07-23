import React from "react";

const ExCard = ({ exercises }) => {
  return (
    <div className="exercise-list   w-full h-full flex-col gap-6">
      {exercises.map((exercise, index) => (
        <div
          className="exercise-card text-gray-300 mx-48 my-9 p-2 border-2  border-black bg-[#031932] rounded-lg shadow-2xl"
          key={index}
        >
          <h2 className="text-center text-white font-semibold my-2 text-3xl">
            {exercise.name}
          </h2>
          <p className="mt-1">
            <span className="font-semibold  text-white ">Type :</span> {exercise.type}
          </p>
          <p className="mt-1">
            <span className="font-semibold  text-white">Muscle :</span> {exercise.muscle}
          </p>
          <p className="mt-1">
            <span className="font-semibold  text-white">Equipment :</span>{" "}
            {exercise.equipment}
          </p>
          <p className="mt-1">
            <span className="font-semibold  text-white">Difficulty :</span>{" "}
            {exercise.difficulty}
          </p>
          <p className="mt-1">
            <span className="font-semibold  text-white ">Instructions :</span>{" "}
            <ul className="list-decimal ml-6" >
              {exercise.instructions.split(". ").map((instruction, i) => (
                <li className="mt-3 " key={i}>{instruction.trim()}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExCard;
