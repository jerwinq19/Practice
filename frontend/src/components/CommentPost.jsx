import React from "react";
import { useState } from "react";

const CommentPost = () => {
  return (
    <div className=" bg-white w-full lg:w-5/5 p-5 border-l-5 border-gray-300 flex flex-col gap-3">
      <div className="flex flex-row gap-3 items-center">
        <img
          src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000"
          alt=""
          className="w-10 h-10"
        />
        <h1 className="text-1xl font-bold text-gray-800">Testing lang</h1>
      </div>

      <h1 className="line-clamp-5 ml-10">Testing lang muna</h1>
    </div>
  );
};

export default CommentPost;
