import React from "react";
import { useLoaderData } from "react-router";
import Title from "../components/Title";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const AssignmentDetails = () => {
  const { data } = useLoaderData();
  const { title, date, difficulty, marks, description, image, username, email, likedBy } = data;
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
          <p className="text-sm mt-2 text-justify">{description}</p>
          <p className="mt-5">Due Date: {date}</p>
          <p>Marks: {marks}</p>
          <button className="active:scale-95">
            <FaHeart className="cursor-pointer text-red-500" size={20} />
            <FaRegHeart className="cursor-pointer text-red-500" size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default AssignmentDetails;
