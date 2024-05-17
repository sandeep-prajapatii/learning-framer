import React from 'react'
import {motion, useTransform, useMotionValue} from "framer-motion"

const Example6 = () => {
    const x = useMotionValue(0);
    const background = useTransform(
        x,
        [-100, 0, 100],
        ["#a0d", "rgba(0,0,0,0)", "#0bf"]
    );


  return (
    <motion.div style={{backgroundColor: background }} className={` h-screen w-screen flex justify-center items-center`}>
        <motion.div  
        className='h-[13em] w-[13em] rounded-full bg-red-600 cursor-grab' 
        style={{x}}
        whileDrag={{cursor: "grabbing"}}
        drag="x"
        dragConstraints={{ right: 0, left: 0 }}
        onClick={()=>console.log(background, x)}
        >

        </motion.div>
    </motion.div>
  )
}   

export default Example6