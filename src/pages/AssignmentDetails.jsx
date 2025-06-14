import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import Title from "../components/Title";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";

const AssignmentDetails = () => {
  const { currentUser } = use(AuthContext);

  const { data } = useLoaderData();
  const { _id, title, date, difficulty, marks, description, image, username, email, likedBy } =
    data;
  const [liked, setLiked] = useState(likedBy.includes(currentUser?.email));
  const [likesCount, setLikesCount] = useState(likedBy.length);

  const handleLike = () => {
    if (currentUser.email === email) return alert("can't like your assignment");
    axios
      .patch(`${import.meta.env.VITE_API_URL}/like/${_id}`, { email: currentUser?.email })
      .then((data) => {
        setLiked(data?.data?.liked);
        setLikesCount((prev) => (data?.data?.liked ? prev + 1 : prev - 1));
      })
      .catch((err) => console.log(err));
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
            type="submit"
            className="btn btn-sm text-[1rem] text-gray-900 shadow-sm hover:bg-gradient-to-l  bg-gradient-to-r from-blue-400 hover:shadow-lg  w-full via-orange-400 to-pink-400  rounded-full  mt-4"
          >
            <span>Submit Assignment</span>
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
    </>
  );
};

export default AssignmentDetails;
