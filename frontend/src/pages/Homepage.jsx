import LogoutButton from "../components/logoutButton";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios";
import Comment from "../components/CommentInput";
=======
// import Comment from "../components/CommentInput";
>>>>>>> 9851313a85a9bb9bbef4f61e2424563cd6056570
import CreateThread from "./CreateThread";
import ThreadPost from "../components/ThreadPost";
import toast, { Toaster } from "react-hot-toast";
import PaginatedButton from "../components/paginatedButton";
import Category from "../components/Category";
<<<<<<< HEAD
import ProfileButton from "../components/profileButton";
import DashBoardButton from "../components/dashboardButton";

const Homepage = () => {
  const [threads, setThreads] = useState([]);
  const [user, setUser] = useState([]);
  const [next, setNext] = useState(null)
  const [prev, setPrev] = useState(null)
  const [category, setCategory] = useState('')

  // fetcher
  const FetchAllThread = async (url = "thread/") => {
    const access_token = localStorage.getItem("access_token");
    try {
      const response = await axiosInstance.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setThreads(response.data.results);
      setNext(response.data.next)
      setPrev(response.data.previous)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const caller = async () => {
      await FetchAllThread();
    };
    caller();
  }, []);

=======
import { useAuthContext, ContextProvider } from "../utils/context";

const Homepage = () => {
  const {
     threads,
     setThreads,
     FetchAllThread,
     next,
     prev,
     setNext,
     setPrev, 
     user,
     setUser
       } = useAuthContext();
>>>>>>> 9851313a85a9bb9bbef4f61e2424563cd6056570

  return (
    <div className=" w-screen relative bg-gray-200 flex flex-col lg:flex-row-reverse">
      <ProfileButton />
      <DashBoardButton />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-2 p-2 pt-5 items-center scroll-py-500">
        <CreateThread  />
        <Category />
        {threads.length > 0 ? (
          threads.map((thread, key) => {
            return (
              <ThreadPost
                key={key}
                thread={thread}                
              />
            );
          })
        ) : (
          <h1 className="text-3xl text-center font-bold mt-30 mb-30">
            No Threads.
            <span className="font-normal text-gray-500">
              <br />
              Create a thread and share your rants away
              <br />
              in a safe community
            </span>
          </h1>
        )}
        {threads.length > 0 && (
          <PaginatedButton
            NextLink={() => FetchAllThread(next)}
            PrevLink={() => FetchAllThread(prev)}
            PrevDis={prev ? false : true}
            NextDis={next ? false : true}
          />
        )}
      </div>
      <LogoutButton toast={toast} />
    </div>
  );
};

export default Homepage;
