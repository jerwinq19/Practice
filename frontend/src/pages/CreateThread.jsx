import axiosInstance from "../utils/axios";
import { useState } from "react";
import LogoutButton from '../components/logoutButton';


const CreateThread = () => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isAnony, setAnony] = useState(false);

    const handleRadioChange = (value) => {
        setAnony(value === 'true');
    };

    const HandleCreateThread = async (e) => {
        e.preventDefault();
        // console.log(localStorage.getItem('access_token'));
        const data = {
            category: category,
            title: title,
            content: content,
            is_annony: isAnony,
        };

        try {
            const access_token = await localStorage.getItem('access_token');
            const response = await axiosInstance.post('thread/', data, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            toast.success('Thread Created Successfully!');
            console.log(response.data);
            FetchAllThread();

        } catch (error) {
            console.log(error.response.data.category[0]);
            toast.error(error.response.data.category[0])
            toast.error('Failed to Create Thread. Please try again.');
        }
    };

    return (
        <div div className="bg-white rounded-xl w-full lg:w-2/5 p-5 border-2 border-gray-300 shadow-xl flex flex-col gap-5 items-center" >
            <form
                onSubmit={HandleCreateThread}
                className="bg-white rounded-2xl p-8 w-full space-y-4"
            >
                <h2 className="font-bold text-4xl mb-3 mt-5 bg-linear-to-r from-cyan-500 to-blue-900 text-transparent bg-clip-text text-center">
                    Create New Thread
                </h2>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
                >
                    <option value="">Select a category</option>
                    <option value="PERSONAL PROBLEMS">Personal Problems</option>
                    <option value="FAMILY PROBLEMS">Family Problems</option>
                    <option value="DEPRESSION">Depression</option>
                </select>

                <input
                    type="text"
                    placeholder="Title here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
                />

                <textarea
                    placeholder="Write your thoughts here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="
                    w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all h-32 resize-none"
                />

                <h1>Post As</h1>
                <div className="flex flex-row sm:flex-row items-start sm:items-center gap-3">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="isAnony"
                            value="true"
                            checked={isAnony === true}
                            onChange={(e) => handleRadioChange(e.target.value)}
                            className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>Anonymous</span>
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="isAnony"
                            value="false"
                            checked={isAnony === false}
                            onChange={(e) => handleRadioChange(e.target.value)}
                            className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>Yourself</span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-5/5 self-center text-white py-2 rounded-md bg-linear-to-r from-cyan-500 to-blue-900 disabled:bg-gray-400 font-bold text-xl"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateThread