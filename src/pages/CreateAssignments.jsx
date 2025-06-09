import { div } from "motion/react-client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAssignments = () => {
  const [dueDate, setDueDate] = useState(new Date());

  return (
    <div className="py-10">
      <form className="max-w-2xl mx-auto p-8 rounded-2xl sm:shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <h1 className="text-4xl col-span-full text-center text-transparent bg-clip-text pb-1 bg-gradient-to-r from-blue-600 via-orange-400 to-pink-400 font-bold">
          Create Assignment
        </h1>

        <div className="form-control col-span-full">
          <label className="label font-semibold block">Title</label>
          <input
            type="text"
            placeholder="Enter assignment title"
            className="input w-full input-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-full gap-6 sm:gap-10">
          <div className="form-control ">
            <label className="label font-semibold block">Due Date</label>
            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              className="input input-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Difficulty Level</label>
            <select className="select select-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="form-control col-span-full sm:col-span-1">
            <label className="label font-semibold">Marks</label>
            <input
              type="number"
              placeholder="Enter marks"
              className="input input-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
            />
          </div>
        </div>

        <div className="form-control col-span-full">
          <label className="label font-semibold">Description</label>
          <textarea
            placeholder="Enter description"
            className="textarea w-full textarea-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
          ></textarea>
        </div>

        <div className="form-control col-span-full">
          <label className="label font-semibold block">Thumbnail Image URL</label>
          <input
            type="url"
            placeholder="Enter image URL"
            className="input w-full input-bordered focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
          />
        </div>

        <div className="col-span-full">
          <button
            type="submit"
            className="btn hover:bg-gradient-to-l group  bg-gradient-to-r from-blue-500 hover:shadow-lg  w-full via-orange-400 to-pink-500  rounded-full  mt-4"
          >
            <span className="group-hover:-translate-y-0.5 transition">Create Assignment</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssignments;
