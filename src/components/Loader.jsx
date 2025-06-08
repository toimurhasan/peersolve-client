import React from "react";

const Loader = () => {
  return (
    <div className="h-[calc(100vh-349px)] flex justify-center">
      <span className="loading loading-spinner loading-xl text-error"></span>
    </div>
  );
};

export default Loader;
