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
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 py-12">
        <div className="flex-1">
          <img src={image} className="rounded-2xl shadow-xl" />
        </div>
        <div className="flex-1 ">
          <div className="relative -z-10">
            <h3 className="text-2xl inline-block">{title}</h3>

            <div
              className={`badge rounded-full shadow-lg text-white  ${
                difficulty == "easy"
                  ? ` badge-success`
                  : difficulty == "medium"
                  ? "badge-info"
                  : "badge-error"
              } absolute -top-3 ml-1`}
            >
              {difficulty}
            </div>
          </div>
          <p className="italic">Created by: {username}</p>
          <p className="text-sm mt-2 text-justify">{description}</p>
          <p className="mt-5">Due Date: {date}</p>
          <p>Marks: {marks}</p>
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
    </>
  );
};

export default AssignmentDetails;
