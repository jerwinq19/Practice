import React from "react";
import { useState } from "react";

const ThreadPost = ({ user }) => {
  const [view, setView] = useState(false);

  return (
    <div className=" bg-white rounded-xl w-full lg:w-3/5 p-5 border-2 border-gray-300 shadow-xl flex flex-col gap-5">
      <div className="flex flex-row gap-3 justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <div className="bg-blue-500 w-10 h-10 rounded-full"></div>
          <h1 className="text-1xl font-bold text-gray-800">{user}</h1>
        </div>

        <button className="group relative rounded-full p-1 border-1 border-gray-300 pointer-cursor">
          <img
            src="https://img.icons8.com/?size=100&id=21622&format=png&color=1A1A1A"
            alt="Option"
            className="w-4 h-4"
          />
          <div className="absolute top-full right-0 rounded-lg p-3 mt-1 shadow-md scale-y-0 group-focus:scale-y-100 origin-top bg-white border border-gray-300 flex flex-col gap-2">
            <div className="hover:bg-gray-300 rounded px-4">Edit</div>
            <div className="hover:bg-gray-300 rounded px-4">Delete</div>
          </div>
        </button>
      </div>

      <div>
        <h1 className="font-bold text-xl">This is the title</h1>
        <h1 className={view ? "" : "line-clamp-5 "}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          nulla dicta aut est quod, quaerat mollitia. Culpa aliquid quos,
          tempora veniam facere vitae nihil saepe, asperiores porro odit, unde
          deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Vel unde expedita culpa eveniet distinctio debitis exercitationem
          veritatis architecto atque ex ab accusantium cupiditate, eius,
          obcaecati nobis blanditiis temporibus libero ad.
        </h1>
      </div>

      <div className="border-t-2 flex flex-row gap-3 pt-2 justify-between border-gray-300">
        <div className="flex flex-row gap-3">
          {/* HEART */}
          <div className="flex flex-row gap-1 items-center">
            <div className="bg-blue-500 w-6 h-6 rounded-full"></div>
            <h1 className="text-xs text-gray-400">205</h1>
          </div>

          {/* COMMENT */}
          <div className="flex flex-row gap-1 items-center">
            <div className="bg-blue-500 w-6 h-6 rounded-full"></div>
            <h1 className="text-xs text-gray-400">105</h1>
          </div>
        </div>

        <button
          className="text-sm hover:bg-gray-300 rounded px-2 py-1 flex flex-row items-center"
          onClick={() => {
            setView((prev) => !prev);
          }}
        >
          View Post{" "}
          <img
            src="https://img.icons8.com/?size=100&id=39969&format=png&color=1A1A1A"
            alt="arrow"
            className="ml-1 inline w-4 h-4"
          />
        </button>
      </div>
    </div>
  );
};

export default ThreadPost;
