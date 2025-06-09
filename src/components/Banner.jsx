import { scale } from "motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <section className=" py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Every friend is a{" "}
            <span className="italic text-blue-600">
              <Typewriter
                words={["teammate.", "study buddy.", "collaborator.", "partner.", "grader."]}
                loop={0} // Set to 0 for infinite
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <p className="text-lg md:text-2xl mb-6">Collaborate. Learn. Achieve.</p>
          <button className="px-6 py-3 cursor-pointer bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition">
            Start Your First Assignment
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <div>
            <motion.img
              animate={{
                scale: [0.5, 1.04],
                rotate: [0, -3],
              }}
              transition={{
                duration: 0.5,
              }}
              src="https://i.ibb.co/jPsZKBpn/banner01.webp"
              alt="Group Study"
              className="sticky top-18 cursor-not-allowed w-full max-w-md mx-auto md:mx-0 rounded-3xl shadow-2xl border-2 border-gray-200"
            />
          </div>
          <div className="tooltip tooltip-bottom" data-tip="i am dragable!">
            <motion.img
              drag
              dragConstraints={{
                left: -50,
                right: 0,
                top: -10,
                bottom: 10,
              }}
              animate={{
                scale: [0.7, 1.06],
                rotate: [0, 3],
              }}
              transition={{
                duration: 0.5,
              }}
              src="https://i.ibb.co/Y4JtsxD5/aa.jpg"
              alt="Group Study"
              className="w-full cursor-grab active:cursor-grabbing ml-3 h-64 object-cover  -mt-28 max-w-md hidden sm:block rounded-3xl  border-2 border-gray-200 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
