import React from 'react'
import { motion, spring } from 'framer-motion'

const Example3 = () => {
  return (
    <motion.div className='h-28 w-28 rounded-xl example3-bg'
    
    initial={{backgroundSize: "100%"}}
    animate={{backgroundSize: "200%"}}
    transition={{  
        repeat: Infinity, 
        type: "spring", 
        stiffness: 400, 
        damping: 40, 
        repeatDelay: 0.2, 
        repeatType: "mirror",}}
    >

    </motion.div>
  )
}

export default Example3