import React, { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router";
import Title from "../components/Title";
import Lottie from "lottie-react";
import animationData from "../assets/no-data-found.json";
import PendingAssignmentCard from "../components/PendingAssignmentCard";

const PendingAssignment = () => {
  const data = useLoaderData();
  const [assignments, setAssignments] = useState(data.data);

  return (
    <>
      <Title title={"Pending Assignments"}></Title>
      {assignments.length === 0 ? (
        <div className="flex justify-center py-5">
          <Lottie className="w-96" animationData={animationData} loop={true} />
        </div>
      ) : (
        <div className="mx-2 xl:mx-0 my-16  grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {assignments?.map((assignment) => (
            <PendingAssignmentCard
              assignment={assignment}
              key={assignment._id}
            ></PendingAssignmentCard>
          ))}
        </div>
      )}
    </>
  );
};

export default PendingAssignment;
