import {
    FiEdit,
    FiChevronDown,
    FiTrash,
    FiShare,
    FiPlusSquare,
  } from "react-icons/fi";
  import { FaHeartbeat, FaBullseye, FaDumbbell, FaAppleAlt, FaClipboard  } from 'react-icons/fa';
  import { motion } from "framer-motion";
  import { Dispatch, SetStateAction, useState } from "react";
 
  
  const Dropdown = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="my-[-10px] flex items-center justify-center ">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-[#114880] hover:bg-[#20346d] transition-colors"
          >
            <span className="font-medium text-sm">Features</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-[#021020] shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            <Option setOpen={setOpen} Icon={FaHeartbeat} text="Fitness Advisor" />
            <Option setOpen={setOpen} Icon={FaBullseye} text="Set Daily Goals" />
            <Option setOpen={setOpen} Icon={FaDumbbell} text="All Exercises" />
            <Option setOpen={setOpen} Icon={FaAppleAlt} text="Food Nutritional Info" />
            <Option setOpen={setOpen} Icon={FaClipboard} text="Fitness Report" />
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({ text, Icon, setOpen }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-[#192582fe] text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };
export default Dropdown