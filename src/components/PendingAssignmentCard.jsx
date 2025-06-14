import React from "react";

const PendingAssignmentCard = ({ assignment }) => {
  const { title, marks, submittedBy, image, email } = assignment;
  return (
    <div className="flex flex-col justify-between  rounded-2xl border hover:shadow-lg shadow-sm transition  border-base-200  p-4 w-full ">
      <div>
        <img
          src={image}
          alt="Assignment thumbnail"
          className="w-full h-40 bg-gray-100 object-cover rounded-xl mb-3"
        />
        <h2 className="text-xl font-semibold mb-1 text-center">{title}</h2>
        <p className="text-center">Total Marks: {marks}</p>

        <div className="flex justify-center items-center mt-2 mb-3">
          <span className="text-sm bg-base-200 text-blue-700 px-3 py-1 rounded-full">
            {submittedBy[0]}
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex gap-2">
          <button className="bg-green-500 text-white cursor-pointer px-3 py-1 rounded-lg hover:bg-green-600">
            Give Mark
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignmentCard;
