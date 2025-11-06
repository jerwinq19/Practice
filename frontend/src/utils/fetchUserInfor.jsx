import axiosInstance from "./axios"

const FetchUserInfo = async () => {
    const access_token = localStorage.getItem('access_token')

    const res = await axiosInstance.get(`/user/me/`, {
        headers : {
            Authorization: `Bearer ${access_token}`
        }
    })
    
    console.log(res.data)

    return res.data
}

export default FetchUserInfo