import React from "react";
import { easeInOut, motion } from "framer-motion";

const Example2 = () => {
  return (
  <motion.div className="h-28 w-28 rounded-2xl cursor-grab bg-cyan-400 border border-black"
  whileTap={{cursor: "grabbing"}}
  drag="x"
  whileDrag={{rotate: [0 , 360]}}
  transition={{repeat: Infinity, ease: "easeInOut", duration: 2}}
  >

  </motion.div>
)};

export default Example2;
