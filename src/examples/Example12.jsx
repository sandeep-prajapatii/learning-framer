import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Example12() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null);

  const handleMouseMove = (e) => {
    if (eyeRef.current) {
      const { left, top, width, height } = eyeRef.current.getBoundingClientRect();
      const eyeRadius = 46; // half the width/height of the white circle

      const x = e.clientX - left;
      const y = e.clientY - top;

      // Constrain the mouse position to the bounds of the eye div
      const constrainedX = Math.min(Math.max(x, eyeRadius), width - eyeRadius);
      const constrainedY = Math.min(Math.max(y, eyeRadius), height - eyeRadius);

      setMousePosition({ x: constrainedX, y: constrainedY });
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-cyan-400" onMouseMove={handleMouseMove}>
      <div
        ref={eyeRef}
        className="h-28 w-[11rem] rounded-[50%] relative bg-black flex justify-center items-center"
      >
        <motion.div
          className="absolute h-16 w-16 top-0 left-0 bg-white rounded-full"
          animate={{
            x: mousePosition.x - 24, // 24 is half the width/height of the white circle to center it
            y: mousePosition.y - 24,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </div>
    </div>
  );
}
