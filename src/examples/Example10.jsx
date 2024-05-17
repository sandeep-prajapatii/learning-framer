import React, { useRef } from "react";
import { motion } from "framer-motion";

const Example10 = () => {
  return (
    < motion.div className="h-screen w-screen flex justify-center items-center bg-red-400">

        <motion.div className="h-[18em] w-[18em] flex justify-center items-center bg-white rounded-3xl">
            <motion.div className="h-[8em] w-[8em] rounded-3xl bg-red-600" drag dragConstraints={{top:0 , bottom: 0,right: 0, left: 0}}>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Example10