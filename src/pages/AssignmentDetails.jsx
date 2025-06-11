import React from "react";
import { useLoaderData } from "react-router";

const AssignmentDetails = () => {
  const { data } = useLoaderData();
  const { title, date, difficulty, marks, description, image, username, email, likedBy } = data;
  return (
    <div className="flex justify-center items-center gap-2 py-12">
      <div className="flex-1">
        <img src={image} className="rounded-2xl shadow-xl" />
      </div>
      <div className="flex-1 relative">
        <h3 className="text-2xl bg-highlight inline-block">Title: {title}</h3>
        <div
          className={`badge badge-soft ${
            difficulty == "easy"
              ? ` badge-success`
              : difficulty == "medium"
              ? "badge-info"
              : "badge-error"
          } absolute -top-3 ml-1`}
        >
          {difficulty}
        </div>
        <p>Due Date: {date}</p>
      </div>
    </div>
  );
};

export default AssignmentDetails;
