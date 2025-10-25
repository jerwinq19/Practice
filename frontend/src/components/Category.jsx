import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

const Category = ({setThreads}) => {
  const [category, setCategory] = useState("ALL");

   const fetchCategoryThread = async () => {
        const url = category === "ALL" ? 'thread/' : `thread/${category}/`
        console.log(url)
        try {
            const access_token = localStorage.getItem('access_token');
            const response = await axiosInstance.get(url, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            console.log(response.data.results)
            console.log('TAMA NAMAN AH')
            setThreads(response.data.results)
        } catch (error) {
            console.log('test')
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategoryThread()
    }, [category])
  return (
    <div className="w-full flex justify-center items-center">
      <ul className="w-full md:w-4/5 lg:w-2/5 p-5 flex flex-row justify-between lg:justify-evenly">
        <li>
          <button
          onClick={() => setCategory('ALL')}
            className={`hover:scale-120 transition-all rounded-full px-2 py-1 flex flex-row text-xs md:text-lg lg:text-sm  items-center border  ${category === "ALL" ? 'bg-cyan-600 text-white': 'bg-white text-cyan-700'}`}
          >
            All
          </button>
        </li>
        <li>
          <button
          onClick={() => setCategory('PERSONAL PROBLEMS')}
            className={`hover:scale-120 transition-all rounded-full px-2 py-1 flex flex-row text-xs md:text-lg lg:text-sm  items-center border  ${category === "PERSONAL PROBLEMS" ? 'bg-cyan-600 text-white': 'bg-white text-cyan-700'}`}
          >
            Personal Problems
          </button>
        </li>
        <li>
          <button
          onClick={() => setCategory('FAMILY PROBLEMS')}
            className={`hover:scale-120 transition-all rounded-full px-2 py-1 flex flex-row text-xs md:text-lg lg:text-sm  items-center border  ${category === "FAMILY PROBLEMS" ? 'bg-cyan-600 text-white': 'bg-white text-cyan-700'}`}
          >
            Family Problems
          </button>
        </li>
        <li>
          <button
          onClick={() => setCategory('DEPRESSION')}
            className={`hover:scale-120 transition-all rounded-full px-2 py-1 flex flex-row text-xs md:text-lg lg:text-sm  items-center border  ${category === "DEPRESSION" ? 'bg-cyan-600 text-white': 'bg-white text-cyan-700'}`}
          >
            Depression
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Category;
