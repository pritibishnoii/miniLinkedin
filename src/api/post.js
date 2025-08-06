import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/post';

const getPosts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${API_BASE_URL}/getpost`, config);
    return response.data;
};

const createPost = async (text, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_BASE_URL}/createpost`, { text }, config);
    return response.data;
};

export { getPosts, createPost };
