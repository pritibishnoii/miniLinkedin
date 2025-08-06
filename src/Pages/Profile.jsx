import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('posts');
    const navigate = useNavigate();

    useEffect(() => {
        fetchProfile();
    }, [id]);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');

            let userId = id;
            if (id === 'me') {
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    const userData = JSON.parse(storedUser);
                    userId = userData.user?._id || userData._id;
                }
            }

            if (!userId) {
                setError('User ID not found');
                setLoading(false);
                return;
            }

            const data = await getUserProfile(userId, token);
            setProfile(data);
        } catch (err) {
            setError('Failed to load profile');
            console.error('Error fetching profile:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-6xl mx-auto px-2 sm:px-0">
                    <div className="h-48 sm:h-64 bg-gray-200 animate-pulse rounded-lg mb-4"></div>
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                        <div className="flex flex-col sm:flex-row items-end space-y-4 sm:space-y-0 sm:space-x-6">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 rounded-full -mt-12 sm:-mt-16 animate-pulse"></div>
                            <div className="flex-1">
                                <div className="h-8 bg-gray-300 rounded w-40 sm:w-64 mb-2 animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded w-32 sm:w-48 mb-2 animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded w-24 sm:w-32 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                                <div className="h-6 bg-gray-300 rounded w-24 sm:w-32 mb-4 animate-pulse"></div>
                                <div className="space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-16 sm:h-20 bg-gray-200 rounded animate-pulse"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 sm:space-y-6">
                            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                                <div className="h-6 bg-gray-300 rounded w-16 sm:w-24 mb-4 animate-pulse"></div>
                                <div className="space-y-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !profile) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-2 sm:px-0">
                <div className="text-center">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h2>
                    <p className="text-gray-600 mb-4">{error || 'This profile could not be loaded.'}</p>
                    <button
                        onClick={fetchProfile}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    const user = profile.user;
    const posts = profile.posts || [];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-2 sm:px-0">
                <div className="relative h-48 sm:h-64 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg mb-4">
                    <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                    <div className="absolute top-4 right-4">
                        <button className="px-3 sm:px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-all text-xs sm:text-base">
                            Edit Cover Photo
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                    <div className="flex flex-col sm:flex-row items-end space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="relative">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-600 rounded-full -mt-12 sm:-mt-16 border-4 border-white flex items-center justify-center">
                                <span className="text-white font-bold text-2xl sm:text-4xl">
                                    {user.name?.charAt(0)?.toUpperCase() || 'U'}
                                </span>
                            </div>
                            <button className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                                <h1 className="text-xl sm:text-3xl font-bold text-gray-900">{user.name}</h1>
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-600 mb-2 text-sm sm:text-base">
                                {user.bio || 'Software Developer'}
                            </p>
                            <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500">
                                <span>📍 San Francisco Bay Area</span>
                                <span>•</span>
                                <span>👥 500+ connections</span>
                                <span>•</span>
                                <span>📧 {user.email}</span>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-3 mt-4 sm:mt-0">
                            <button className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-base">
                                Edit Profile
                            </button>
                            <button className="px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-base">
                                More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm">
                            <div className="border-b border-gray-200">
                                <nav className="flex flex-wrap space-x-4 sm:space-x-8 px-4 sm:px-6 overflow-x-auto">
                                    <button
                                        onClick={() => setActiveTab('posts')}
                                        className={`py-2 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
                                            activeTab === 'posts'
                                                ? 'border-blue-500 text-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    >
                                        Posts ({posts.length})
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('about')}
                                        className={`py-2 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
                                            activeTab === 'about'
                                                ? 'border-blue-500 text-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    >
                                        About
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('experience')}
                                        className={`py-2 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
                                            activeTab === 'experience'
                                                ? 'border-blue-500 text-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    >
                                        Experience
                                    </button>
                                </nav>
                            </div>
                            <div className="p-4 sm:p-6">
                                {activeTab === 'posts' && (
                                    <div className="space-y-4">
                                        {posts.length > 0 ? (
                                            posts.map((post) => (
                                                <div key={post._id} className="border border-gray-200 rounded-lg p-4">
                                                    <div className="flex items-center space-x-3 mb-3">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                                            <span className="text-white font-semibold">
                                                                {user.name?.charAt(0)?.toUpperCase()}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-900 text-sm sm:text-base">
                                                                {user.name}
                                                            </p>
                                                            <p className="text-xs sm:text-sm text-gray-500">
                                                                {new Date(post.createdAt).toLocaleDateString()}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-700 text-sm sm:text-base">{post.text}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-center py-8 sm:py-12">
                                                <svg
                                                    className="w-10 h-10 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                                                    No posts yet
                                                </h3>
                                                <p className="text-gray-600 text-xs sm:text-base">
                                                    When {user.name} shares something, it will appear here.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {activeTab === 'about' && (
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                                                About
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                                {user.bio || 'No information available.'}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                                                Contact Information
                                            </h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-3">
                                                    <svg
                                                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                    <span className="text-gray-700 text-xs sm:text-sm">
                                                        {user.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'experience' && (
                                    <div className="space-y-6">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-start space-x-3 sm:space-x-4">
                                                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <svg
                                                        className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                                                        Software Developer
                                                    </h4>
                                                    <p className="text-blue-600 text-xs sm:text-base">Google</p>
                                                    <p className="text-xs sm:text-sm text-gray-500">2020 - Present</p>
                                                    <p className="text-gray-700 mt-2 text-xs sm:text-base">
                                                        Working on cutting-edge technologies and building scalable
                                                        applications.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 sm:space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Profile Stats</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-xs sm:text-sm">Profile views</span>
                                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">1,234</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-xs sm:text-sm">Post impressions</span>
                                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">5,678</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-xs sm:text-sm">Search appearances</span>
                                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">89</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Recent Activity</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-2 sm:space-x-3">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs sm:text-sm text-gray-700">
                                            Your profile was viewed by John Doe
                                        </p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-2 sm:space-x-3">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-3 h-3 sm:w-4 sm:h-4 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs sm:text-sm text-gray-700">
                                            You connected with Jane Smith
                                        </p>
                                        <p className="text-xs text-gray-500">1 day ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">
                                    React
                                </span>
                                <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">
                                    JavaScript
                                </span>
                                <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">
                                    Node.js
                                </span>
                                <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">
                                    MongoDB
                                </span>
                                <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">
                                    Tailwind CSS
                                </span>
                                <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">
                                    Python
                                </span>
                                <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">
                                    AWS
                                </span>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Connections</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full"></div>
                                    <div>
                                        <p className="font-medium text-gray-900 text-xs sm:text-base">John Doe</p>
                                        <p className="text-xs sm:text-sm text-gray-500">Software Engineer at Google</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full"></div>
                                    <div>
                                        <p className="font-medium text-gray-900 text-xs sm:text-base">Jane Smith</p>
                                        <p className="text-xs sm:text-sm text-gray-500">Product Manager at Facebook</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full"></div>
                                    <div>
                                        <p className="font-medium text-gray-900 text-xs sm:text-base">Mike Johnson</p>
                                        <p className="text-xs sm:text-sm text-gray-500">Data Scientist at Netflix</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-4 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-xs sm:text-base">
                                View All Connections
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
