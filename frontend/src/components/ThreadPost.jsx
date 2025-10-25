import React from "react";
import { useState } from "react";
import Comment from "./comment";

const ThreadPost = ({user, thread, key}) => {
  const [view, setView] = useState(false);
  const [heart, setHeart] = useState(false);
  const [comment, setComment] = useState(false);

  return (
    <div key={key} className=" bg-white rounded-xl w-full lg:w-3/5 p-5 border-2 border-gray-300 shadow-xl flex flex-col gap-5">
      <div className="flex flex-row gap-3 justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <div className="bg-blue-500 w-10 h-10 rounded-full"></div>
          <h1 className="text-1xl font-bold text-gray-800">{thread.author_name}</h1>
        </div>

        <button className="group relative rounded-full p-1 border border-gray-300 pointer-cursor">
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
        <h1 className="text-xl">CATEGORY: <span className="font-bold">{thread.category}</span></h1>
      <div>
        <h1 className="font-bold text-xl">{thread.title}</h1>
        <h1 className={view ? "mt-2" : "line-clamp-5 mt-2"}>
          {thread.content}
        </h1>
      </div>
      <div className="border-t-2 flex flex-row gap-3 pt-2 justify-between border-gray-300">
        <div className="flex flex-row gap-5">
          {/* HEART */}
          <div className="flex flex-row gap-1 items-center">
          {heart ?  
          <button onClick={() => setHeart(false)}><img src="https://img.icons8.com/?size=100&id=7697&format=png&color=FA5252" alt="" className="w-5 h-5" /></button> : 
          <button onClick={() => setHeart(true)}><img src="https://img.icons8.com/?size=100&id=87&format=png&color=000000" alt="" className="w-5 h-5" /></button>  
        }
          </div>

          {/* COMMENT */}
          <div className="flex flex-row gap-1 items-center">
          {comment ? 
          <button onClick={() => setComment(false)}><img src="https://img.icons8.com/?size=100&id=38977&format=png&color=1A1A1A" alt="" className="w-5 h-5" /></button>  :
          <button onClick={() => setComment(true)}><img src="https://img.icons8.com/?size=100&id=38977&format=png&color=1A1A1A" alt="" className="w-5 h-5" /></button>}
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

      {comment &&<Comment authorID={user.pk} threadID={thread.id} />}
    </div>
  );
};

export default ThreadPost;
