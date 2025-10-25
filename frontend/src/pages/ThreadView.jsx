import axiosInstance from "../utils/axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import CommentPost from "../components/CommentPost";
import CommentInput from "../components/CommentInput";

const ThreadView = () => {
  const [thread, setThread] = useState([])
  const [heart, setHeart] = useState(false);
  const [comment, setComment] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation() // this gets the data when you redirect from thread post

  console.log(state)

  // Log out handler
  const LogoutHandler = async () => {
    const refresh_token = localStorage.getItem("refresh_token");
    try {
      console.log(refresh_token);
      const response = await axiosInstance.post("logout/", {
        refresh_token: refresh_token,
      });
      console.log(response.data);
      // remove the json web token
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      toast.success("Logged out successfully!");s
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
      console.log(error);
    }
  };


  return (
    <div className="w-screen h-screen relative flex flex-col lg:flex-row-reverse justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-screen h-screen bg-gray-200 overflow-y-auto flex flex-col gap-2 lg:py-20 items-center">
        <div
          key={state.id}
          className=" bg-white rounded-xl w-full lg:w-3/5 p-5  border-2 border-gray-300 shadow-xl flex flex-col gap-5"
        >
          <div className="flex flex-row gap-3 justify-between items-center">
            <div className="flex flex-row gap-3 items-center">
              <img
                src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000"
                alt=""
                className="w-10 h-10"
              />
              <h1 className="text-1xl font-bold text-gray-800">{state.author_name}</h1>
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
          <h1 className="text-xl">
            CATEGORY: <span className="font-bold">{state.category}</span>
          </h1>
          <div>
            <h1 className="font-bold text-xl">
              {state.title}
            </h1>
            <h1 className="mt-2">
              {state.content}
            </h1>
          </div>
          <div className="border-t-2 flex flex-row gap-3 pt-2 justify-between border-gray-300">
            <div className="flex flex-row gap-5">
              {/* HEART */}
              <div className="flex flex-row gap-1 items-center">
                {heart ? (
                  <button onClick={() => setHeart(false)}>
                    <img
                      src="https://img.icons8.com/?size=100&id=7697&format=png&color=FA5252"
                      alt=""
                      className="w-5 h-5 hover:scale-120 transition-all cursor-pointer"
                    />
                  </button>
                ) : (
                  <button onClick={() => setHeart(true)}>
                    <img
                      src="https://img.icons8.com/?size=100&id=87&format=png&color=000000"
                      alt=""
                      className="w-5 h-5 hover:scale-120 transition-all cursor-pointer"
                    />
                  </button>
                )}
              </div>

              {/* COMMENT */}
              <div className="flex flex-row gap-1 items-center">
                {comment ? (
                  <button onClick={() => setComment(false)}>
                    <img
                      src="https://img.icons8.com/?size=100&id=38977&format=png&color=1A1A1A"
                      alt=""
                      className="w-5 h-5 hover:scale-120 transition-all cursor-pointer"
                    />
                  </button>
                ) : (
                  <button onClick={() => setComment(true)}>
                    <img
                      src="https://img.icons8.com/?size=100&id=38977&format=png&color=1A1A1A"
                      alt=""
                      className="w-5 h-5 hover:scale-120 transition-all cursor-pointer"
                    />
                  </button>
                )}
                <p className="text-gray-500 text-xs">{state.comments.lenght}</p>
              </div>
            </div>

            <button
              className="text-sm hover:bg-gray-300 rounded px-2 py-1 flex flex-row items-center"
              onClick={() => {
                navigate(`/home`);
              }}
            >
              Go back{" "}
              <img
                src="https://img.icons8.com/?size=100&id=39969&format=png&color=1A1A1A"
                alt="arrow"
                className="ml-1 inline w-4 h-4"
              />
            </button>
          </div>

          {comment && (
            <CommentInput authorID={null} threadID={null} toast={toast} />
          )}
          <div className="w-full p-5 border-t-2 border-gray-300 flex flex-col gap-10 items-center">
            {state.comments.map((data, key) => (
              <CommentPost commentData={data} key={key}/>
            ))}
          </div>
        </div>
      </div>

      <div className=" p-5 w-full lg:h-full lg:w-13 sticky bottom-0 lg:left-0 border-t-2 border-gray-300 shadow-xl bg-white flex justify-center items-center">
        <button
          onClick={() => LogoutHandler()}
          className=" z-10 -mt-13 lg:mt-0 lg:-mr-13 hover:scale-125  transition-all bg-white border border-gray-700 shadow-xl text-sm w-15 h-15 flex justify-center items-center rounded-full"
        >
          <img src="../../public/logout.png" alt="" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default ThreadView;
