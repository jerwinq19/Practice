import axiosInstance from "../utils/axios";
import { useState } from "react";

/*
    Comment components
    Author ID pasa mo yung nasa USER yung user.pk
    thread is pasa mo naman yung nasa map mo na thread
*/

const Comment = ({ authorID, threadID }) => {
  const [content, setContent] = useState("");
  const [isAnony, setAnony] = useState(false);

  const handleRadioChange = (value) => {
    setAnony(value === "true");
  };

  const CommentHandler = async (e) => {
    e.preventDefault();
    const access_token = localStorage.getItem("access_token");
    const data = {
      author: authorID,
      thread: threadID,
      content: content,
      is_annony: isAnony,
    };
    try {
      const response = await axiosInstance.post("comment/", data, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response.data);
      console.log("comment work!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full p-5 border-t-2 border-gray-300 flex gap-5 items-center">
      <form
        onSubmit={CommentHandler}
        className="w-full space-y-4 flex flex-row justify-between items-center gap-3"
      >
        <div className="w-full">
            <h1>Post as</h1>
          <div className="flex flex-row   items-start sm:items-center gap-3 text-sm text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isAnony"
                value="true"
                checked={isAnony === true}
                onChange={(e) => handleRadioChange(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span>Anonymous</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isAnony"
                value="false"
                checked={isAnony === false}
                onChange={(e) => handleRadioChange(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span>Yourself</span>
            </label>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your comment..."
            className="w-full h-28 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-md text-sm"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
