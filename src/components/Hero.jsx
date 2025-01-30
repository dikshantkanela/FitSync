import React from 'react';
import { Text, Button } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { MdCall } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import heroImg from '../assets/hero.jpeg';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Start your fitness journey with","Get a personalized fitness advisor with","Explore all exercises at a glance with","Access nutritional info and calorie details with","Set daily targets with","Track fitness progress with","Get your fitness reports with"],
    loop: true,
  });

  return (
    <div className='font-sans flex flex-col mt-10 lg:flex-row my-[80px] h-auto lg:h-[80vh] mx-[20px] md:mx-[42px] gap-8 lg:gap-0'>
      
      <div className='flex flex-col lg:mr-5 lg:w-1/2'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-[50px] sm:leading-[60px] lg:leading-[70px]'>
          <span className='text-white'>{text}</span>
          <Cursor />
          <Text bgClip="text" bgGradient="linear(to-r,blue.400,purple.400)">FitSync</Text>
        </h1>
        <p className='text-base sm:text-lg text-gray-300 my-6 sm:my-8 w-full lg:w-[699px]'>
          Welcome to FitSync, your starting point for a healthier lifestyle. Dive into diverse exercise options, receive personalized guidance from experts, and track your progress with detailed insights. Discover nutritional information, monitor calories, and achieve your fitness goals and enhance your wellness journey.
        </p>
      </div>

     
      <motion.div
        className='lg:w-1/2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <img src={heroImg} className=' md:pl-10 shadow-2xl w-full h-auto max-h-[400px] lg:max-h-[500px] object-cover rounded-md' alt="Hero" />
      </motion.div>
    </div>
  );
};

export default Hero;