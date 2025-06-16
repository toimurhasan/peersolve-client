import React, { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Title from "../components/Title";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
  const navigate = useNavigate();
  const { currentUser } = use(AuthContext);

  const { data } = useLoaderData();
  const {
    _id,
    title,
    date,
    difficulty,
    marks,
    description,
    image,
    username,
    email,
    likedBy,
    submittedBy,
  } = data;
  const [liked, setLiked] = useState(likedBy.includes(currentUser?.email));
  const [likesCount, setLikesCount] = useState(likedBy.length);

  useEffect(() => {
    setLiked(likedBy.includes(currentUser?.email));
  }, [likedBy, currentUser]);

  const takeAssigment = () => {
    if (currentUser?.email === email) return toast.error("You can't take your own assignment");
    if (submittedBy.some((entry) => entry.email === currentUser?.email))
      return toast.error("Assignment already submitted!");
    else {
      document.getElementById("assignment-modal").showModal();
    }
  };

  const handleLike = () => {
    if (currentUser?.email === email) return toast.error("You can't like your own assignment");
    axios
      .patch(`${import.meta.env.VITE_API_URL}/like/${_id}`, { email: currentUser?.email })
      .then((data) => {
        setLiked(data?.data?.liked);
        setLikesCount((prev) => (data?.data?.liked ? prev + 1 : prev - 1));
      })
      .catch((err) => console.log(err));
  };

  const [formData, setFormData] = useState({
    googleDocsLink: "",
    quickNote: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedData = {
      ...formData,
      email: currentUser?.email,
      name: currentUser?.displayName,
      title,
      marks,
      assignmentId: _id,
    };
    // console.log(submittedData);

    axios
      .post(`${import.meta.env.VITE_API_URL}/submit-assignment/${_id}`, { submittedData })
      .then((data) => {
        navigate("/assignments");
        if (data.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Thank you for submitting the assignment",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <Title title={title}></Title>
      <div className="flex flex-col justify-center items-center gap-8 py-12 mx-4 sm:mx-16 md:mx-32 lg:mx-64 xl:mx-96 text-center">
        <div className="flex-1">
          <img src={image} className="rounded-2xl shadow-xl" />
        </div>
        <div className="flex-1 ">
          <div className="flex justify-center mb-2">
            <div
              className={`badge rounded-full text-white  ${
                difficulty == "easy"
                  ? ` badge-success`
                  : difficulty == "medium"
                  ? "badge-info"
                  : "badge-error"
              }`}
            >
              {difficulty}
            </div>
          </div>

          <h3 className="text-2xl inline-block">{title}</h3>
          <p className="italic">Created by: {username}</p>
          <p className="italic">{email}</p>
          <p className="text-sm mt-2 text-justify">{description}</p>
          <button
            onClick={takeAssigment}
            type="submit"
            className={`${
              (currentUser?.email === email ||
                submittedBy.some((entry) => entry.email === currentUser?.email)) &&
              "cursor-not-allowed"
            } btn btn-sm text-[1rem] text-gray-900 shadow-sm hover:bg-gradient-to-l  bg-gradient-to-r from-blue-400 hover:shadow-lg  w-full via-orange-400 to-pink-400  rounded-full  mt-4`}
          >
            <span>Take Assignment</span>
          </button>
          <p className="mt-5">Due Date: {date}</p>
          <p>Marks: {marks}</p>
          <div className="flex justify-center">
            <button onClick={handleLike} className="active:scale-95 flex gap-1">
              {likesCount}
              {liked ? (
                <FaHeart className="cursor-pointer text-red-500" size={20} />
              ) : (
                <FaRegHeart className="cursor-pointer text-red-500" size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
      <dialog id="assignment-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Google Docs Link */}
            <div className="form-control">
              <label className="label w-full">
                <span className="label-text font-semibold">Google Docs Link</span>
              </label>
              <input
                type="url"
                name="googleDocsLink"
                value={formData.googleDocsLink}
                onChange={handleChange}
                placeholder="example: https://docs.google.com/abcd"
                className="input input-bordered w-full focus:outline-transparent focus:border-gray-400 focus:shadow-md"
                required
              />
            </div>

            {/* Quick Note */}
            <div className="form-control">
              <label className="label w-full">
                <span className="label-text font-semibold">Quick Note</span>
              </label>
              <textarea
                name="quickNote"
                value={formData.quickNote}
                onChange={handleChange}
                placeholder="Any comment or message..."
                className="textarea textarea-bordered w-full  focus:outline-transparent focus:border-gray-400 focus:shadow-md"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-error w-full rounded-full btn-sm text-[0.9rem] hover:shadow-md"
              >
                <span>Submit Assignment</span>
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AssignmentDetails;
