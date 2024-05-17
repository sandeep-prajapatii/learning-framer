import React from "react";
import { motion, useCycle } from "framer-motion";

const Example9 = () => {
    const [animate, cycle] = useCycle("off", "on")
  return (
    <motion.div
      className={`h-screen w-screen flex justify-center items-center bg-red-400`}
    >
      <motion.div className="h-[10em] w-[18em] rounded-full bg-white cursor-grab relative flex items-center"
      onTapStart={cycle}
      animate={animate}
      >
        <motion.div className="h-full w-full rounded-full bg-green-400" 
        variants={{"off" : {scale: 0}, "on": {scale: 1}}} 
        ></motion.div>

        <motion.div className="h-[8em] w-[8em] rounded-full bg-white border shadow-lg absolute  cursor-grab"
        variants={{ off: { x: "1.8em" }, on: { x: "8em" } }}
        ></motion.div>
      </motion.div>

    </motion.div>
  );
};

export default Example9;
