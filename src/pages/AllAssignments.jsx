import React from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router";

const AllAssignments = () => {
  const assignment = {
    _id: "68485317715145f0a961d4a7",
    title: "Quis aute odio qui c",
    date: "2025-06-10",
    difficulty: "easy",
    marks: "53",
    description: "Nihil delectus quo",
    image: "https://www.cefojonagepamy.me",
    username: "Tamim",
    email: "2imur.hasan@gmail.com",
  };

  const assignments = useLoaderData();
  console.log(assignments);

  return (
    <div className="mx-8 py-8 grid grid-cols-3 gap-8">
      {assignments.map((assignment) => (
        <AssignmentCard assignment={assignment}></AssignmentCard>
      ))}
    </div>
  );
};

export default AllAssignments;
