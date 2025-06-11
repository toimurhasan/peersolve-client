import React, { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router";

const AllAssignments = () => {
  const { data } = useLoaderData();
  const [assignments, setAssignments] = useState(data);

  return (
    <div className="mx-8 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {assignments?.map((assignment) => (
        <AssignmentCard assignment={assignment} key={assignment._id}></AssignmentCard>
      ))}
    </div>
  );
};

export default AllAssignments;
