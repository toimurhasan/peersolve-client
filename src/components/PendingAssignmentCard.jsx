import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";

const PendingAssignmentCard = ({ assignment }) => {
  const { submittedBy = [], image, markingComplete = [] } = assignment;
  const { currentUser } = use(AuthContext);
  const navigate = useNavigate();

  // Create a set of already marked emails for faster lookup
  const markedEmails = new Set(markingComplete.map((entry) => entry.email));

  // Filter submittedBy to exclude already marked emails
  const unmarkedSubmissions = submittedBy.filter(
    (submission) => !markedEmails.has(submission.email)
  );

  return (
    <>
      {unmarkedSubmissions.map((submission, index) => (
        <div
          key={submission.id?.$oid || index}
          className="flex flex-col justify-between rounded-2xl border hover:shadow-lg shadow-sm transition border-base-200 p-4 w-full"
        >
          <img
            src={image}
            alt="Assignment thumbnail"
            className="w-full h-56 bg-gray-100 object-cover rounded-xl mb-3"
          />
          <h2 className="text-xl font-semibold mb-1 text-center">{submission.title}</h2>
          <p className="text-center">Total Marks: {submission.marks}</p>

          <div className="flex justify-center items-center mt-2 mb-3">
            <span className="text-sm bg-base-200 text-blue-700 px-3 py-1 rounded-full">
              {submission.name}
            </span>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                if (currentUser.email === submission.email) {
                  return toast.error("Cannot mark your own assignment");
                }
                navigate(`/assignment-info/${submission.id}`);
              }}
              className="bg-green-500 text-white cursor-pointer px-3 py-1 rounded-lg hover:bg-green-600"
            >
              Give Mark
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PendingAssignmentCard;
