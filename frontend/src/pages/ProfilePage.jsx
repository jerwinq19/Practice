import { useState, useEffect } from "react"
import FetchUserInfo from "../utils/fetchUserInfor"
import GetUserThreads from "../utils/fetchUserThreads"

const UserPorfile = () => {
    const [userData, setUserData] = useState([])
    const [thread, setThread] = useState([])


    useEffect(() => {
        const get_user_info = async () => {
            try {
                const data = await FetchUserInfo();
                setUserData(data);
            } catch (error) {
                console.log(error)
            }

        };
        get_user_info();
    }, []); // runs once


    useEffect(() => {
        if (!userData.pk) return; // wait until data is available

        const fetchThreads = async () => {
            try {
                const user_thread = await GetUserThreads(userData.pk);
                setThread(user_thread.results);
            } catch (error) {
                console.log(error)
            }

        };
        fetchThreads();
    }, [userData]); // runs only when userData is set


    return (
        <div>
            <section>
                <h1>Username: {userData.username}</h1>
                <h1>Email: {userData.email}</h1>
                <p>first name: {userData.first_name}</p>
                <p>last name: {userData.last_name}</p>
            </section>

            <section>
                <h1>Your threads</h1>
                {thread.map((data) => (
                    <div key={data.id}>
                        <h1>Title: {data.title}</h1>
                        <p>author: {data.author_name}</p>
                        <p>category: {data.category}</p>
                        <p>{data.content}</p>
                        <p>is anonny: {data.is_annony}</p>
                    </div>
                ))}
            </section>

        </div>
    )
}

export default UserPorfile