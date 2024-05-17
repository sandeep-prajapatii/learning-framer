import React, { useState } from "react";
import {motion } from "framer-motion"

const Example8 = () => {
    const [hover, setHovered] = useState(false)
  return (
    <motion.div
    className={`h-screen w-screen flex justify-center items-center`}
    animate = {{backgroundColor: hover ? "#4c0519" : "#fb7185"}}
    transition={{duration: 0.5}}
  >
    <motion.div
      className="h-[10em] w-[10em] rounded-3xl bg-red-600 cursor-grab"
      animate = {{rotate: hover ? 0 : 180, scale: hover ? 1 : 0.75}}
      transition={{duration: 0.5}}
      onHoverStart={()=>setHovered(true)}
      onHoverEnd={()=>setHovered(false)}
    ></motion.div>
  </motion.div>
  )
}

export default Example8