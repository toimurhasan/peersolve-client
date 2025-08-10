import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-65px-200px)] justify-center  container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-2">
        PeerSolve is a platform dedicated to helping students collaborate, solve assignments, and
        learn together. Our mission is to foster a community of learners who support each other and
        grow academically.
      </p>
      <p className="text-md">
        Founded in 2025, PeerSolve aims to make learning more interactive and accessible for
        everyone.
      </p>
    </div>
  );
};

export default AboutUs;
