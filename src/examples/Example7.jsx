import React from "react";
import {motion } from "framer-motion"


const Example7 = () => {
  return (
    <motion.div
      className={` h-screen w-screen flex justify-center items-center`}
      animate={{backgroundColor: ["#0af", "rgba(0,0,0,0)", "#fa0"]}}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2
          }}
    >
      <motion.div
        className="h-[10em] w-[10em] rounded-xl bg-red-600 cursor-grab"
        animate={{rotate: [0,180]}}
        transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
        }}
      ></motion.div>
    </motion.div>
  );
};

export default Example7;