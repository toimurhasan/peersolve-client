import React, { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router";
import Title from "../components/Title";
import Lottie from "lottie-react";
import animationData from "../assets/no-data-found.json";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AllAssignments = () => {
  const { data } = useLoaderData();
  const [assignments, setAssignments] = useState(data);
  const onDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/assignment/${id}`)
      .then((data) => {
        if (data.data.deletedCount) {
          // Filter out the deleted assignment
          setAssignments((prevAssignments) =>
            prevAssignments.filter((assignment) => assignment._id !== id)
          );

          Swal.fire({
            icon: "warning",
            title: "Assignment Deleted",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <Title title={"All Assignments"}></Title>
      {assignments.length === 0 ? (
        <div className="flex justify-center py-5">
          <Lottie className="w-96" animationData={animationData} loop={true} />
        </div>
      ) : (
        <div className="mx-2 xl:mx-0 my-16  grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {assignments?.map((assignment) => (
            <AssignmentCard
              assignment={assignment}
              key={assignment._id}
              onDelete={onDelete}
            ></AssignmentCard>
          ))}
        </div>
      )}
    </>
  );
};

export default AllAssignments;
