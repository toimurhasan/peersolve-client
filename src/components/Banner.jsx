import React from "react";
import { Typewriter } from "react-simple-typewriter";

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
          <img
            src="https://i.ibb.co/jPsZKBpn/banner01.webp"
            alt="Group Study"
            className="w-full max-w-md mx-auto md:mx-0 rounded-3xl shadow-2xl border-l-2 border-orange-500"
          />
          <img
            src="https://i.ibb.co/MxHhh6Cp/banner02.jpg"
            alt="Group Study"
            className="-mt-30 w-full max-w-md ml-10 hidden sm:block rounded-3xl border-r-2 border-blue-500 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
