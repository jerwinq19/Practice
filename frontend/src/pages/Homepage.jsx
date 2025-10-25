import LogoutButton from "../components/logoutButton";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios";
import FetchCurrentUser from "../utils/userInfo"; // always use this to get the user info may mga data kasing need dun
import Comment from "../components/comment";
import CreateThread from "./CreateThread";
import ThreadPost from "../components/ThreadPost";
/*
  Todos: gawan mo UI for better looking nigga!
*/

// ALWAYS PASS THE ACCESS TOKEN NIGGA!

const Homepage = () => {
  const [threads, setThreads] = useState([]);
  const [user, setUser] = useState([]);

  // fetcher
  const FetchAllThread = async () => {
    const access_token = localStorage.getItem("access_token");
    try {
      const response = await axiosInstance.get("thread/", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setThreads(response.data);
      console.log(response.data);
      console.log("it work!");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const caller = async () => {
      await FetchAllThread();
      const data = await FetchCurrentUser();
      setUser(data);
    };
    caller();
  }, []);

  return (
    // <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-50 shadow-lg rounded-2xl">
    //   <div className="mb-8 text-center">
    //     <h1 className="text-3xl font-bold text-gray-800">Welcome, {user.username}</h1>
    //     <p className="text-gray-600 mt-2">Here's your profile information:</p>

    //     <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
    //       <p className="text-gray-700"><span className="font-semibold">First Name:</span> {user.first_name}</p>
    //       <p className="text-gray-700"><span className="font-semibold">Last Name:</span> {user.last_name}</p>
    //       <p className="text-gray-700 col-span-2"><span className="font-semibold">Email:</span> {user.email}</p>
    //     </div>

    //     <div className="mt-6">
    //       <LogoutButton />
    //     </div>
    //   </div>
    //     <CreateThread />
    //   <div>
    //     <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">All Threads</h2>
    //     <div className="space-y-6">
    //       {threads.map((thread, key) => (
    //         <div
    //           key={key}
    //           className="p-5 bg-white rounded-xl shadow hover:shadow-md transition-all border border-gray-200"
    //         >
    //           <h3 className="text-xl font-semibold text-blue-700">{thread.title}</h3>
    //           <div className="flex flex-wrap text-sm text-gray-500 mt-1 gap-3">
    //             <span>Author: <span className="font-medium text-gray-700">{thread.author_name}</span></span>
    //             <span>Category: <span className="font-medium text-gray-700">{thread.category}</span></span>
    //           </div>
    //           <p className="mt-3 text-gray-700 leading-relaxed">{thread.content}</p>
    //           <Comment authorID={user.pk} threadID={thread.id}/>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className=" w-screen h-screen bg-gray-200 flex flex-col">
      <div className="w-screen flex flex-col gap-5 p-2 pt-5  items-center">
        {threads ? (threads.map((thread,key) => {
          return <ThreadPost key={key} thread={thread} user={user} />
        })) : <h1>No Threads.</h1>}

        <CreateThread />
      </div>

      <LogoutButton />
    </div>
  );
};

export default Homepage;
