import React from "react";
import { motion } from "motion/react";
import quotes from "quotesy";

const defaultAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Title = () => {
  const state = {
    quote: quotes.random(),
  };

  const animatedText = `${state.quote.text} — ${state.quote.author}`;
  return (
    <div className="text-2xl pt-1 mt-16 top-16 lg:top-0 sticky  xl:rounded-b-2xl text-center shadow-sm  bg-base-100">
      <motion.p
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.06 }}
        className="hidden lg:block italic bg-gradient-to-r text-[1.35rem] py-4 text-transparent bg-clip-text  from-blue-600 via-red-500 to-purple-500"
      >
        {animatedText.split("").map((char, index) => (
          <motion.span key={index} variants={defaultAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.p>
      <div
        className="
       py-2  lg:py-3 block lg:border-t border-gradient-three border-dashed text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-orange-500 to-pink-800 
        "
      >
        <span>All Assignments</span>
      </div>
    </div>
  );
};

export default Title;
