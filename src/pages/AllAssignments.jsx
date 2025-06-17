import React, { useEffect, useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router";
import Title from "../components/Title";
import Lottie from "lottie-react";
import animationData from "../assets/no-data-found.json";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const AllAssignments = () => {
  const { data } = useLoaderData();
  const [assignments, setAssignments] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedSort, setSelectedSort] = useState(""); // NEW

  // Debounced search effect
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setAssignments(data);
        return;
      }

      setLoading(true);
      axios
        .get(`https://peer-solve-server-side.vercel.app/assignments?searchParams=${searchTerm}`)
        .then((res) => setAssignments(res.data || []))
        .catch(() => toast.error("Failed to fetch search results."))
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, data]);

  // Sort by difficulty effect
  useEffect(() => {
    if (!selectedSort) return;
    setLoading(true);
    axios
      .get(`https://peer-solve-server-side.vercel.app/assignments?sortBy=${selectedSort}`)
      .then((res) => setAssignments(res.data || []))
      // .then((res) => console.log(res.data))
      .catch(() => toast.error("Failed to fetch sorted data."))
      .finally(() => setLoading(false));
  }, [selectedSort]);

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
      <div className="pt-4 pb-6 sm:pt-6 sm:pb-6 flex justify-between items-center gap-2 sm:gap-4 mx-auto px-2 xl:px-0">
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

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn w-32 sm:w-36 rounded-xl">
            Difficulty Levels
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => setSelectedSort("easy")}>Easy</a>
            </li>
            <li>
              <a onClick={() => setSelectedSort("medium")}>Medium</a>
            </li>
            <li>
              <a onClick={() => setSelectedSort("hard")}>Hard</a>
            </li>
          </ul>
        </div>
      </div>

      {loading ? (
        <Loader></Loader>
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
