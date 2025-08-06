import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';
const USER_API_URL = 'http://localhost:5000/api/user';

const signup = async (name, email, password, bio) => {
    const response = await axios.post(`${API_URL}/signup`, {
        name,
        email,
        password,
        bio,
    });

    if (response.data) {
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
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

const getUserProfile = async (userId, token) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };

        // Use the correct user API endpoint
        const response = await axios.get(`${USER_API_URL}/${userId}`, config);
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};

export { signup, login, getUserProfile };
