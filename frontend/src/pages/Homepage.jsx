import LogoutButton from "../components/logoutButton";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios";
import FetchCurrentUser from "../utils/userInfo"; // always use this to get the user info may mga data kasing need dun
import Comment from "../components/CommentInput";
import CreateThread from "./CreateThread";
import ThreadPost from "../components/ThreadPost";
import toast, { Toaster } from "react-hot-toast";
/*
  Todos: gawan mo UI for better looking nigga!
*/

// ALWAYS PASS THE ACCESS TOKEN NIGGA!

const Homepage = () => {
  const [threads, setThreads] = useState([]);
  const [user, setUser] = useState([]);
  const [notif, setNotif] = useState('')

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
    <div className=" w-screen relative bg-gray-200 flex flex-col lg:flex-row-reverse">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-2 p-2 pt-5 items-center scroll-py-500">
        <CreateThread  toast={toast} FetchAllThread={FetchAllThread}/>
        {threads.length > 0 ? (threads.map((thread,key) => {
          return <ThreadPost key={key} thread={thread} user={user} toast={toast}/>
        })) : <h1 className="text-3xl text-center font-bold mt-30">No Threads.<span className="font-normal text-gray-500 "><br/>Create a thread and share your rants away<br/>in a safe community</span></h1>}
      </div>

      <LogoutButton toast={toast}/>
    </div>
  );
};

export default Homepage;
