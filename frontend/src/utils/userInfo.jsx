import axiosInstance from "./axios";

/*
    Para makapag fetch ng user info 
    example 
    {
        pk: 13, <- mahalaga yan
        username: 'test123', 
        email: 'test@gmail.com', 
        first_name: 'test', 
        last_name: 'test'
    }

*/

const FetchCurrentUser = async () => {
    const access_token = localStorage.getItem('access_token');
    try {
        const response = await axiosInstance.get('user/current_user/', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        return response.data
    } catch (error) {
        console.log(error);
    }
};

export default FetchCurrentUser