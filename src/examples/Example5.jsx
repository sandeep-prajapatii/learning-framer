import React, { useState } from 'react'
import { motion } from "framer-motion"

const Example5 = () => {

  const [toggle, setToggle] = useState(true)
  return (
    <div className='border p-4 bg-red-300 rounded-xl text-xl font-semibold'>
        <div className={`${toggle ? "flex-row" : "flex-row-reverse"} flex gap-2`}>
          <motion.div layout >Im left,</motion.div>
          <motion.div layout>You sure about that? 🤔</motion.div>
        </div>
        <button className='p-2 mt-2 bg-black text-white block mx-auto rounded ' onClick={()=>setToggle(!toggle)}>Toggle Direction</button>
    </div>
  )
}

export default Example5