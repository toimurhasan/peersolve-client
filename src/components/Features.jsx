import React from "react";
import { BookOpenCheck, Users, PenLine, Star } from "lucide-react";
import { motion } from "motion/react";

const Features = () => {
  return (
    <section className="py-16 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why You'll Love Studying Here</h2>
        <p className="mb-12">Everything you need for stress-free group assignments with friends.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <motion.div
            whileHover={{
              rotate: -5,
              scale: 1.01,
            }}
            transition={{
              duration: 0.01,
            }}
            className="bg-base-200  p-6 cursor-pointer select-none rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <Users className="h-10 w-10 mx-auto text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Study with Friends</h3>
            <p>Every user is automatically a friend—build your learning squad easily.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{
              rotate: -5,
              scale: 1.01,
            }}
            transition={{
              duration: 0.01,
            }}
            className=" bg-base-200 p-6 cursor-pointer select-none rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <PenLine className="h-10 w-10 mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Create Assignments</h3>
            <p>Quickly set up group assignments and share them with everyone.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{
              rotate: -5,
              scale: 1.01,
            }}
            transition={{
              duration: 0.01,
            }}
            className="bg-base-200 p-6 cursor-pointer select-none rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <BookOpenCheck className="h-10 w-10 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Submit & Track</h3>
            <p>Submit your work and keep track of your progress in real-time.</p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            whileHover={{
              rotate: -5,
              scale: 1.01,
            }}
            transition={{
              duration: 0.01,
            }}
            className=" xl:tooltip-right bg-base-200 p-6 cursor-pointer select-none rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <Star className="h-10 w-10 mx-auto text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Peer Grading</h3>
            <p>Grade your friends' submissions and help each other improve.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
