import React, { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router";
import Title from "../components/Title";
import { Helmet } from "react-helmet";

const AllAssignments = () => {
  const { data } = useLoaderData();
  const [assignments, setAssignments] = useState(data);

  return (
    <>
      <Helmet>
        <title>All Assignment | PeerSolve</title>
      </Helmet>
      <Title></Title>
      <div className="mx-8 my-16  grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {assignments?.map((assignment) => (
          <AssignmentCard assignment={assignment} key={assignment._id}></AssignmentCard>
        ))}
      </div>
    </>
  );
};

export default AllAssignments;
