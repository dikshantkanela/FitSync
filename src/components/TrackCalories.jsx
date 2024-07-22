import React from 'react'
import calories from '../assets/calories.jpg'
import NaturalExercise from './NutriComp/ExToCal'
const TrackCalories = () => {
  return (
    <>
    <div className='flex flex-row justify-around font-sans h-[80vh] p-3'>
   <div className='left'>
<img src={calories} className='rounded-md w-[600px] h-[400px]' alt="calorieImage" />
   </div>
   <div className='right flex flex-col  '>
    <h2 className='text-white font-bold text-5xl'>Track Calories by Activity </h2>
  <p className= 'text-gray-300 text-xl ml-2 text-justify h-[180px] w-[600px] mb-[-50px] mt-6'>Effortlessly track and analyze your calorie expenditure for every activity with precision and ease, ensuring you stay informed and motivated on your fitness journey. Monitor detailed insights and progress to achieve your health and wellness goals more effectively.</p>
    <div>
        <NaturalExercise/>
    </div>
   </div>
    </div>

    </>
  )
}

export default TrackCalories
