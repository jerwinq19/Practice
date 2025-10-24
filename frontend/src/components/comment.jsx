import axiosInstance from "../utils/axios";
import { useState } from "react";

/*
    Comment components
    Author ID pasa mo yung nasa USER yung user.pk
    thread is pasa mo naman yung nasa map mo na thread
*/

const Comment = ({ authorID, threadID }) => {
    const [content, setContent] = useState('')
    const [isAnony, setAnony] = useState(false)


    const handleRadioChange = (value) => {
        setAnony(value === 'true');
    };

    const CommentHandler = async (e) => {
        e.preventDefault()
        const access_token = localStorage.getItem('access_token')
        const data = {
            "author": authorID,
            "thread": threadID,
            "content": content,
            "is_annony": isAnony
        }
        try {
            const response = await axiosInstance.post('comment/', data, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            console.log(response.data)
            console.log("comment work!")
            

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="border rounded-lg p-4 bg-white shadow-sm w-full max-w-2xl">
            <form onSubmit={CommentHandler} className="space-y-4">

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your comment..."
                    className="w-full h-28 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-sm text-gray-700">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="isAnony"
                            value="true"
                            checked={isAnony === true}
                            onChange={(e) => handleRadioChange(e.target.value)}
                            className="form-radio text-blue-600"
                        />
                        <span>Post as Anonymous</span>
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
                        <span>Post as Yourself</span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-md text-sm"
                >
                    Post Comment
                </button>

            </form>
        </div>

    )
}

export default Comment