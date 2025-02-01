import React from "react";

const ExCard = ({ exercises }) => {
  return (
    <div className="exercise-list w-full h-full flex flex-col gap-6 px-4 sm:px-8 lg:px-12">
      {exercises.map((exercise, index) => (
        <div
          className="exercise-card mx-auto p-6 border-2 border-black bg-[#031932] rounded-lg shadow-2xl w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12"
          key={index}
        >
          <h2 className="text-center text-white font-semibold my-3 text-3xl sm:text-4xl">
            {exercise.name}
          </h2>
          <p className="mt-2">
            <span className="font-semibold text-white">Type:</span> {exercise.type}
          </p>
          <p className="mt-2">
            <span className="font-semibold text-white">Muscle:</span> {exercise.muscle}
          </p>
          <p className="mt-2">
            <span className="font-semibold text-white">Equipment:</span> {exercise.equipment}
          </p>
          <p className="mt-2">
            <span className="font-semibold text-white">Difficulty:</span> {exercise.difficulty}
          </p>
          <p className="mt-2">
            <span className="font-semibold text-white">Instructions:</span>
            <ul className="list-decimal ml-6 mt-2">
              {exercise.instructions.split(". ").map((instruction, i) => (
                <li className="mt-2 text-white" key={i}>
                  {instruction.trim()}
                </li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExCard;
