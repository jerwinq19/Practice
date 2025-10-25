import axiosInstance from "../utils/axios";
import { useEffect, useState } from "react";
import LogoutButton from '../components/logoutButton';
import FetchCurrentUser from "../utils/userInfo";

const CreateThread = () => {
    const [user, setUser] = useState([]); // mahalaga

    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isAnony, setAnony] = useState(false);

    const handleRadioChange = (value) => {
        setAnony(value === 'true');
    };

    const HandleCreateThread = async (e) => {
        e.preventDefault();
        console.log(localStorage.getItem('access_token'));
        const data = {
            category: category,
            author: user.pk, // mahalaga to para ma determine nung backend kung kanina naka pangalang yung thread same sa comments
            title: title,
            content: content,
            is_annony: isAnony,
        };
        try {
            const access_token = localStorage.getItem('access_token');
            const response = await axiosInstance.post('thread/', data, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const caller = async () => {
            const data = await FetchCurrentUser()
            setUser(data)
        }
        caller
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
            <form
                onSubmit={HandleCreateThread}
                className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md space-y-4"
            >
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                    Create New Thread
                </h2>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
                >
                    <option value="">Select a category</option>
                    <option value="PERSONAL PROBLEM">Personal Problem</option>
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
                <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-3">
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateThread;
