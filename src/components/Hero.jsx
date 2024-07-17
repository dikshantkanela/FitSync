import React from 'react';
import { Text, Button } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { MdCall } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import heroImg from '../assets/hero.jpeg'
import { motion } from 'framer-motion'
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Start your fitness journey with","Get a personalized fitness advisor with","Explore all exercises at a glance with","Access nutritional info and calorie details with","Set daily targets with","Track fitness progress with","Get your fitness reports with"],
    loop: true,
  });

  return (
    <div className='font-sans flex flex-row my-[80px] h-[100vh] mx-[42px]'>
      <div className='left flex flex-col mr-5 '>
    
<h1 className='text-6xl font-bold leading-[70px] '>
<span className='text-6xl font-bold text-white'>{text}</span>
<Cursor />
<Text bgClip="text"bgGradient="linear(to-r,blue.400,purple.400)">FitSync</Text>
</h1> 
<p className='text-lg text-gray-300 my-8 w-[699px]'> Welcome to FitSync, your starting point for a healthier lifestyle. Dive into diverse exercise options, receive personalized guidance from experts, and track your progress with detailed insights. Discover nutritional information, monitor calories, and achieve your fitness goals and enhance your wellness journey</p>

<div className="reviews flex flex-row gap-5">

</div>

      </div>
      <motion.div
        className='right'
        initial={{ opacity: 0 }} // Initial state: invisible
        animate={{ opacity: 1 }} // Animate to opacity 1 (visible) on scroll
        variants={{
          visible: { opacity: 1 }, // Define animation variants
          hidden: { opacity: 0 },
        }}
      >
        <img src={heroImg } className='shadow-2xl bg-cover w-[1400px] h-[380px] rounded-md' alt="" />
      </motion.div>
    </div>
  );
}


export default Hero;