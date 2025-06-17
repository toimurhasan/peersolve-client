import React, { use } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

const SubmittedAssignmentCard = ({ assignment }) => {
  const { currentUser } = use(AuthContext);
  const { markingComplete, submittedBy, title, marks } = assignment;

  // Check if current user is in submittedBy
  const hasSubmitted = submittedBy.some((entry) => entry.email === currentUser?.email);

  // Find marking info for current user
  const markInfo = markingComplete.find((entry) => entry.email === currentUser?.email);

  const givenMark = markInfo?.givenMark;
  const feedback = markInfo?.feedback;

  // Determine status
  const status = hasSubmitted && markInfo ? "completed" : "pending";

  // Tailwind-friendly badge colours by status
  const badgeClasses = {
    pending: "bg-yellow-100 text-yellow-700",
    completed: "bg-green-100 text-green-700",
  };

  return (
    <div className="flex flex-col justify-center rounded-2xl border border-base-300 p-4 w-full shadow-sm transition">
      {/* ---------- Top section ---------- */}
      <div>
        <h2 className="text-xl text-center mb-2">{title}</h2>

        <p className="text-sm mb-2 text-center flex flex-col ">
          <span className="text-sm font-medium">Total Marks: {marks}</span>
          {givenMark && <span className="font-medium">Your Obtained Marks:&nbsp; {givenMark}</span>}
        </p>

        {/* Show feedback only if it exists */}
        {feedback && (
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-medium text-center block text-my-gray">Feedback:</span>
            <span className="p-4 bg-base-200 block text-my-gray rounded-xl"> {feedback}</span>
          </p>
        )}
      </div>

      {/* ---------- Status badge ---------- */}
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
