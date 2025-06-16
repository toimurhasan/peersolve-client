import React, { use, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

const AssignmentCard = ({ assignment, onDelete }) => {
  const { currentUser } = use(AuthContext);
  const { title, marks, difficulty, description, image, _id, likedBy, email } = assignment;
  const [btnAvailable, setBtnAvailable] = useState(false);
  useEffect(() => {
    if (currentUser?.email === email) setBtnAvailable(true);
  }, [currentUser]);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between  rounded-2xl border hover:shadow-lg shadow-sm transition  border-base-200  p-4 w-full ">
      <div>
        <img
          src={image}
          alt="Assignment thumbnail"
          className="w-full h-40 bg-gray-100 object-cover rounded-xl mb-3"
        />
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mb-4">
          <span className="text-sm bg-base-200 text-blue-700 px-3 py-1 rounded-full capitalize">
            {difficulty}
          </span>
          <span className="text-sm text-gray-700 font-medium">{marks} Marks</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/assignment/${_id}`)}
            className="bg-green-500 text-white cursor-pointer px-3 py-1 rounded-lg hover:bg-green-600"
          >
            View
          </button>

          {btnAvailable && (
            <>
              <button
                onClick={() => navigate(`/update-assignment/${_id}`)}
                className="bg-yellow-500 text-white cursor-pointer px-3 py-1 rounded-lg hover:bg-yellow-600"
              >
                Update
              </button>
              <button
                onClick={() => onDelete(_id)}
                className="bg-red-500 text-white cursor-pointer px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </>
          )}
        </div>
        <div className="flex gap-1">
          <span>{likedBy.length}</span>
          <FaHeart className=" text-red-500" size={20} />
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
