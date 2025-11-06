import axiosInstance from "./axios"

const GetUserThreads = async (id) => {

    const access_token = localStorage.getItem('access_token')

    const res = await axiosInstance.get(`thread/me/${id}/`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })

    return res.data
}

export default GetUserThreads