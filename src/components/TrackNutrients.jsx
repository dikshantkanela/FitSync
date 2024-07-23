import React from 'react'
import Nutri from '../assets/nutri.jpeg'
const TrackNutrients = () => {
  return (
    <div id='food' className='flex flex-row justify-around font-sans gap-8 h-[80vh] mt-[50px] p-3'>
   <div className='left'>
<img src={Nutri} className='rounded-md w-[600px] h-[400px]' alt="calorieImage" />
   </div>
   <div className='right flex flex-col  '>
    <h2 className='text-white font-bold text-5xl'>Get Nutrional Information  </h2>
  <p className= 'text-gray-300 text-justify text-xl ml-2 h-[180px] w-[600px] mb-[-50px] mt-6'>Our Nutritional Information tool provides detailed insights into the food you enter, giving you precise data to support your dietary goals. For each item, you’ll receive a complete breakdown, including calories, total fat, saturated fat, cholesterol, sodium, carbohydrates, fiber, sugar, and protein. This comprehensive information helps you stay aware of health factors and track your calorie, protein, and other nutritional goals, making it easier to make informed and balanced dietary choices.</p>
  <button className= "flex items-center my-[157px] gap-2 px-3 w-[120px] py-2 rounded-md text-indigo-50 bg-[#114880] hover:bg-[#20346d] transition-colors">
            <span className="font-medium text-md">Explore</span>
            <svg
    xmlns="http://www.w3.org/2000/svg"   //ARROW IMAGE
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-right"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>   
          </button>
    <div>
    
    </div>
   </div>
    </div>
  )
}

export default TrackNutrients
