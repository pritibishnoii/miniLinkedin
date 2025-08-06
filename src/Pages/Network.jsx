import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Network = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsers(response.data);
        } catch (err) {
            setError('Failed to load users');
            console.error('Error fetching users:', err);
        } finally {
            setLoading(false);
        }
    };

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto py-8 px-2 sm:px-0">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">My Network</h1>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                {loading ? (
                    <div className="text-center text-gray-500">Loading users...</div>
                ) : error ? (
                    <div className="text-center text-red-500">{error}</div>
                ) : filteredUsers.length === 0 ? (
                    <div className="text-center text-gray-500">No users found.</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {filteredUsers.map((user) => (
                            <div
                                key={user._id}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 flex flex-col items-center"
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                                    <span className="text-white font-bold text-xl sm:text-2xl">
                                        {user.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </span>
                                </div>
                                <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{user.name}</h2>
                                <p className="text-gray-600 text-xs sm:text-sm mb-2 text-center">
                                    {user.bio || 'No bio available'}
                                </p>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-2 w-full">
                                    Connect
                                </button>
                                <button
                                    onClick={() => navigate(`/profile/${user._id}`)}
                                    className="text-blue-600 hover:underline text-xs sm:text-sm"
                                >
                                    View Profile
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Network;
