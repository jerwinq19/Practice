import LogoutButton from "../components/logoutButton";
// import Comment from "../components/CommentInput";
import CreateThread from "./CreateThread";
import ThreadPost from "../components/ThreadPost";
import toast, { Toaster } from "react-hot-toast";
import PaginatedButton from "../components/paginatedButton";
import Category from "../components/Category";
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

  return (
    <div className=" w-screen relative bg-gray-200 flex flex-col lg:flex-row-reverse">
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
