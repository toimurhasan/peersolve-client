import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Title from "../components/Title";
import Lottie from "lottie-react";
import animationData from "../assets/no-data-found.json";
import PendingAssignmentCard from "../components/PendingAssignmentCard";

const PendingAssignment = () => {
  const data = useLoaderData();
  const [assignments, setAssignments] = useState(data.data);

  // Check total number of unmarked submissions
  const totalUnmarkedSubmissions = assignments.reduce((total, assignment) => {
    const submittedBy = assignment.submittedBy || [];
    const markingComplete = assignment.markingComplete || [];
    const markedEmails = new Set(markingComplete.map((entry) => entry.email));
    const unmarked = submittedBy.filter((submission) => !markedEmails.has(submission.email));
    return total + unmarked.length;
  }, 0);

  return (
    <>
      <Title title={"Pending Assignments"} />
      {assignments.length === 0 ? (
        <div className="flex justify-center py-5">
          <Lottie className="w-96" animationData={animationData} loop={true} />
        </div>
      ) : totalUnmarkedSubmissions === 0 ? (
        <div className="flex italic flex-col justify-center  items-center h-64 text-center">
          <h1 className="text-xl">🦄 All assignments have been marked! 🎉</h1>
        </div>
      ) : (
        <div className="mx-2 xl:mx-0 my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <PendingAssignmentCard assignment={assignment} key={assignment._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default PendingAssignment;
