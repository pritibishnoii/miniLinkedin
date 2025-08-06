import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/api/auth';
const USER_API_URL = import.meta.env.VITE_API_URL + '/api/user';

const signup = async (name, email, password, bio) => {
    const response = await axios.post(`${API_URL}/signup`, {
        name,
        email,
        password,
        bio,
    });

    if (response.data) {
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
    });

    if (response.data) {
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

const getUserProfile = async (userId, token) => {
    try {
        const authToken = token || localStorage.getItem('token');

        if (!authToken) {
            throw new Error('No authentication token found');
        }

        const config = {
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await axios.get(`${USER_API_URL}/${userId}`, config);
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};

export { signup, login, getUserProfile };
