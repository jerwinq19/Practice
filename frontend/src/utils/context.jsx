import { useContext, createContext, useState, useEffect } from "react";
import FetchCurrentUser from "../utils/userInfo"; // always use this to get the user info may mga data kasing need dun
import axiosInstance from "../utils/axios";

const AuthContext = createContext();

export function ContextProvider({ children }) {
  const [threads, setThreads] = useState([]);
  const [user, setUser] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [category, setCategory] = useState("");
  const [token, setToken ] = useState(localStorage.getItem("access_token"))

  const FetchAllThread = async (url = "thread/") => {
    const access_token = localStorage.getItem("access_token");
    try {
      const response = await axiosInstance.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setThreads(response.data.results);
      setNext(response.data.next);
      setPrev(response.data.previous);
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
    <AuthContext.Provider
      value={{
        threads,
        setThreads,
        next,
        prev,
        setNext,
        setPrev,
        FetchAllThread,
        user,
        setUser,
        token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
