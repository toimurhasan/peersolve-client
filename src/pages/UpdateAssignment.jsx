import React, { useEffect, useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loader from "../components/Loader";

const UpdateAssignments = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const [dueDate, setDueDate] = useState(new Date());
  const [assignment, setAssignment] = useState(null);
  const axiosSecure = useAxiosSecure();

  // Fetch existing assignment data
  useEffect(() => {
    axiosSecure
      .get(`/assignment/${id}`)
      .then((res) => {
        const data = res.data;
        setAssignment(data);
        setDueDate(new Date(data.date));
      })
      .catch((err) => toast.error(err.response.data.message));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const allFormData = Object.fromEntries(formData.entries());

    const updatedAssignment = {
      ...allFormData,
      date: dueDate.toISOString().split("T")[0],
      username: currentUser?.displayName,
      email: currentUser?.email,
      likedBy: assignment.likedBy || [],
      submittedBy: assignment.submittedBy || [],
      markingComplete: assignment.markingComplete || [],
    };

    axios
      .put(`${import.meta.env.VITE_API_URL}/update-assignment/${id}`, updatedAssignment)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Successful",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/assignments");
        } else {
          Swal.fire({
            icon: "warning",
            title: "No changes detected",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (!assignment) return <Loader></Loader>;

  return (
    <>
      <Helmet>
        <title>Update Assignment | PeerSolve</title>
      </Helmet>
      <div className="py-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-8 rounded-2xl sm:shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <h1 className="text-4xl col-span-full text-center text-transparent bg-clip-text pb-1 bg-gradient-to-r from-blue-600 via-orange-400 to-pink-400 font-bold">
            Update Assignment
          </h1>

          <div className="form-control col-span-full">
            <label className="label font-semibold block">Title</label>
            <input
              required
              name="title"
              type="text"
              defaultValue={assignment.title}
              className="input w-full input-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-full gap-6 sm:gap-10">
            <div className="form-control">
              <label className="label font-semibold block">Due Date</label>
              <DatePicker
                name="date"
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                className="input input-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Difficulty Level</label>
              <select
                name="difficulty"
                defaultValue={assignment.difficulty}
                className="select select-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="form-control col-span-full sm:col-span-1">
              <label className="label font-semibold">Marks</label>
              <input
                required
                name="marks"
                type="number"
                defaultValue={assignment.marks}
                className="input input-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              />
            </div>
          </div>

          <div className="form-control col-span-full">
            <label className="label font-semibold">Description</label>
            <textarea
              required
              name="description"
              defaultValue={assignment.description}
              className="textarea w-full textarea-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
            ></textarea>
          </div>

          <div className="form-control col-span-full">
            <label className="label font-semibold block">Thumbnail Image URL</label>
            <input
              required
              name="image"
              type="url"
              defaultValue={assignment.image}
              className="input w-full input-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
            />
          </div>

          <div className="col-span-full">
            <button
              type="submit"
              className="btn hover:bg-gradient-to-l group text-black bg-gradient-to-r from-blue-400 hover:shadow-lg w-full via-orange-400 to-pink-400 rounded-full mt-4"
            >
              <span className="group-hover:-translate-y-0.5 transition">Update Assignment</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateAssignments;
