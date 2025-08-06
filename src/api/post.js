import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api/post';
const POST_API_URL = import.meta.env.VITE_API_URL + '/api/post';

const getPosts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${POST_API_URL}/getpost`, config);
    return response.data;
};

const createPost = async (text, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${POST_API_URL}/createpost`, { text }, config);
    return response.data;
};

export { getPosts, createPost };
