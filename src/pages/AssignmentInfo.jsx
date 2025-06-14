import React from "react";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet";

const AssignmentInfo = () => {
  const assignmentData = useLoaderData();
    console.log(assignmentData);
  return (
    <>
      <Helmet>
        <title>Home | PeerSolve</title>
      </Helmet>
      <div className="py-10">
        <form className="max-w-2xl mx-auto p-8 rounded-2xl sm:shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <h1 className="text-4xl col-span-full text-center text-transparent bg-clip-text pb-1 bg-gradient-to-r from-blue-600 via-orange-400 to-pink-400 font-bold">
            Lets Evaluate This Assignment
          </h1>

          <div className="form-control col-span-full">
            <label className="label text-base font-semibold  block">
              Assignment Link Submitted by the Examinee:
            </label>
            <p className="border rounded-xl bg-base-200 border-base-200 p-3 my-2 text-my-gray">
              <a className="link  link-primary" target="_blank">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nisi.
              </a>
            </p>
          </div>
          <div className="form-control col-span-full">
            <label className="label text-base font-semibold  block">Quick Notes By Examinee:</label>
            <p className="border rounded-xl bg-base-200 border-base-200 p-3 my-2 text-my-gray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, iste.
            </p>
          </div>

          <form className=" border-t border-dashed border-my-gray col-span-full">
            <div className="grid grid-cols-2 items-center mt-6">
              <label className="text-base font-semibold label " htmlFor="given-mark">
                Please Assign a Score:
              </label>
              <input
                className="input rounded-xl focus:outline-transparent border-base-300 bg-base-200 focus:border-base-300"
                type="number"
                name="given-mark"
                id="given-mark"
                placeholder="Out of 100"
              />
            </div>

            <label className="text-base font-semibold label mt-4 mb-2 block" htmlFor="feedback">
              Examineer Feedback:
            </label>
            <textarea
              className="input rounded-xl text-[0.95rem] focus:outline-transparent border-base-300 bg-base-200 focus:border-base-300    textarea textarea-bordered w-full "
              name="feedback"
              id="feedback"
              placeholder="Anything you want the examinee to improve..."
            ></textarea>
          </form>

          <div className="col-span-full">
            <button
              type="submit"
              className="btn hover:bg-gradient-to-l group text-black  bg-gradient-to-r from-blue-400 hover:shadow-lg  w-full via-orange-400 to-pink-400  rounded-full  mt-4"
            >
              <span className="group-hover:-translate-y-0.5 transition">
                Submit Assignment Mark
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AssignmentInfo;
