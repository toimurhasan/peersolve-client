import React from "react";

const AssignmentCard = ({ assignment, onView, onUpdate, onDelete }) => {
  const { title, marks, difficulty, description, image } = assignment;

  return (
    <div className="bg-white rounded-2xl border hover:shadow-2xl cursor-pointer hover:scale-101 shadow-lg transition border-gray-200 p-4 w-full ">
      <img
        src={image}
        alt="Assignment thumbnail"
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-2 line-clamp-2">{description}</p>

      <div className="flex justify-between items-center mb-4">
        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full capitalize">
          {difficulty}
        </span>
        <span className="text-sm text-gray-700 font-medium">{marks} Marks</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onView(assignment)}
          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
        >
          View
        </button>
        <button
          onClick={() => onUpdate(assignment)}
          className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(assignment)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AssignmentCard;
