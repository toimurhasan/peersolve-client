import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

const SubmittedAssignmentCard = ({ assignment }) => {
  const { currentUser } = use(AuthContext);
  const { markingComplete, title, marks } = assignment;
  const [index, setIndex] = useState();
  const [status, setStatus] = useState("pending");

  // get feedback from markingComplete
  const feedback = "";

  useEffect(() => {
    markingComplete.forEach((mark, index) => {
      Object.entries(mark).forEach(([key, value]) => {
        if (value === "2imur.hasan@gmail.comd") {
          setStatus("completed");
          setIndex(index);
        }
      });
    });
  }, []);

  const assignmentMark = markingComplete[index]?.mark;
  //   console.log(assignmentMark);

  // Tailwind-friendly badge colours by status
  const badgeClasses = {
    pending: "bg-yellow-100 text-yellow-700",
    completed: "bg-green-100 text-green-700",
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-base-300 p-4 w-full shadow-sm transition">
      {/* ---------- Top section ---------- */}
      <div>
        <h2 className="text-xl text-center mb-2">{title}</h2>

        <p className="text-sm mb-2 text-center flex flex-col ">
          <span className="text-sm font-medium">Total Marks: {marks}</span>
          {assignmentMark && (
            <span className="font-medium">Your Obtained Marks:&nbsp; {assignmentMark}</span>
          )}
        </p>

        {/* Show feedback only if it exists */}
        {feedback && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">Feedback:&nbsp;</span>
            {feedback}
          </p>
        )}
      </div>
      <div className="flex justify-center items-center">
        <span
          className={`text-sm px-3 py-1 rounded-full capitalize ${
            badgeClasses[status] ?? "bg-gray-100 text-gray-600"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default SubmittedAssignmentCard;
