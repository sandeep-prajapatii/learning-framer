import React from "react";
import {
  motion,
  useMotionValue,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";

const Example11 = () => {
    const pink = (saturation) => `hsl(327, ${saturation}%, 50%)`;

    const x = useMotionValue(0)
    const xSmooth = useSpring(x, { damping: 50, stiffness: 400 });
    const xVelocity = useVelocity(xSmooth);

    // Transform the velocity of x into a scale motion value
    const scale = useTransform(xVelocity, [-3000, 0, 3000], [2, 1, 2], {
      clamp: false
    });
  
    // Transform the velocity of x into a range of background color intensities
    const backgroundColor = useTransform(
      xVelocity,
      [-2000, 0, 2000],
      [pink(100), pink(0), pink(100)]
    );



  return (
    <motion.div className="h-screen w-screen flex justify-center items-center bg-red-400">
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={1}
        className="h-20 w-20 rounded-lg bg-black shadow"
        style={{x, scale, backgroundColor }}
        
      ></motion.div>
    </motion.div>
  );
};

export default Example11;
