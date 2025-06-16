import React, { useEffect, useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  // Debounced search effect
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setAssignments(data); // reset to initial data if empty
        return;
      }

      setLoading(true);
      axios
        .get(`https://peer-solve-server-side.vercel.app/assignments?searchParams=${searchTerm}`)
        .then((res) => {
          setAssignments(res.data || []);
        })
        .catch((err) => toast.error("Failed to fetch search results."))
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, data]);

  const onDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/assignment/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          setAssignments((prev) => prev.filter((item) => item._id !== id));
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
       <Title title={"All Assignments"} />
      <div className="py-6 flex justify-center max-w-2xl mx-auto px-2">
        <label className="input rounded-xl w-full border-my-gray-2 no-outline flex items-center gap-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search Assignment"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none bg-transparent"
          />
        </label>
      </div>

      {loading ? (
        <div className="text-center py-10 text-xl text-gray-500">Searching...</div>
      ) : assignments.length === 0 ? (
        <div className="flex justify-center py-5">
          <Lottie className="w-96" animationData={animationData} loop={true} />
        </div>
      ) : (
        <div className="mx-2 xl:mx-0 mb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <AssignmentCard assignment={assignment} key={assignment._id} onDelete={onDelete} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllAssignments;
