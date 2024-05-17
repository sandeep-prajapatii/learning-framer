import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Example1 = () => {
    const [visible, setVisible] = useState(false)

  return (
    <motion.div
      className="flex justify-center items-center h-24 w-24 bg-red-400 rounded-2xl"
      onTap={() => setVisible(!visible)}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            className="h-20 w-20 bg-slate-200 rounded-2xl"
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Example1;
