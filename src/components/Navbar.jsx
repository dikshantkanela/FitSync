  import React from 'react'
  import logo from '../assets/logo.png'
  import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
  import { FaSearch } from "react-icons/fa";
  import Dropdown from './Dropdown'
  const Navbar = () => {
    return (
    <div className='font-sans '>
  <nav className='flex flex-row items-center justify-around bg-[#021020] text-white mb-10'>
    <a href="">
    <div className='flex flex-row items-center  ml-[-100px] '>
          <img className='w-[80px]' src={logo} alt="" />
          <h1 className='text-3xl font-semibold'>FitSync</h1>
      </div>
      </a>  
      <div>
          <ul className='flex flex-row gap-6'>
              <li  className='hover:text-gray-400 text-gray-400'><a href="">Home</a> </li>
              <li className='hover:text-gray-400'>About Us </li>
              <li className='hover:text-gray-400'>Contact Us </li>
              <Dropdown/>
          </ul>
      </div>
      <div className='mr-[-90px]'>
        <InputGroup height="35px" width="300px">
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FaSearch} color="white" className="mt-[-8px] ml-3" w={6} h={18} />}
          />
          
          <Input
            type="text"
            size="md"
            height="100%"
            width="100%"
            className="rounded-md border border-gray-700"
            bg="#031932"
            placeholder="Search..."
            textAlign="center" // This will align the placeholder text to the right
          />
        </InputGroup>
      </div>
  </nav>
  </div>
  
    )
  }

  export default Navbar


