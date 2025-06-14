import React, { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router";
import Title from "../components/Title";
import Lottie from "lottie-react";
import animationData from "../assets/no-data-found.json";

const AllAssignments = () => {
  const { data } = useLoaderData();
  const [assignments, setAssignments] = useState(data);

  return (
    <>
      <Title title={"All Assignments"}></Title>
      {assignments.length === 0 ? (
        <div className="flex justify-center py-5">
          <Lottie className="w-96" animationData={animationData} loop={true} />
        </div>
      ) : (
        <div className="mx-8 my-16  grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {assignments?.map((assignment) => (
            <AssignmentCard assignment={assignment} key={assignment._id}></AssignmentCard>
          ))}
        </div>
      )}
    </>
  );
};

export default AllAssignments;
