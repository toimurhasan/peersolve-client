import React, { useEffect, useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router";
import Title from "../components/Title";
import animationData from "../assets/no-data-found.json";
import Lottie from "lottie-react";
import SubmittedAssignmentCard from "../components/SubmittedAssignmentCard";

const MyAttemptedAssignments = () => {
  const loadData = useLoaderData(); // ✅ Hook should be used here, not inside useEffect
  const data = loadData?.data; // ✅ Handle potential undefined value
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setAssignments(data);
    } else {
      setAssignments([]); // Fallback in case data is undefined or not an array
    }
  }, [data]);

  return (
    <>
      <Title title={"My Attempted Assignments"} />
      {assignments.length === 0 ? (
        <div className="flex justify-center py-5">
          <Lottie className="w-96" animationData={animationData} loop={true} />
        </div>
      ) : (
        <div className="mx-2 xl:mx-0 my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <SubmittedAssignmentCard assignment={assignment} key={assignment._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyAttemptedAssignments;
