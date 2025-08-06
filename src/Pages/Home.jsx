import React from 'react';
import PostList from '../components/Post/PostList';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto py-4 px-2 sm:px-0">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                        <div className="flex items-center space-x-4 w-full sm:w-auto">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-lg">
                                    {localStorage.getItem('user')
                                        ? JSON.parse(localStorage.getItem('user'))
                                              .user?.name?.charAt(0)
                                              ?.toUpperCase() ||
                                          JSON.parse(localStorage.getItem('user')).name?.charAt(0)?.toUpperCase() ||
                                          'U'
                                        : 'U'}
                                </span>
                            </div>
                            <div>
                                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Home</h1>
                                <p className="text-xs sm:text-sm text-gray-600">Welcome to your LinkedIn feed</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-5 5v-5zM4 19h6a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </button>
                            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <PostList />
            </div>
        </div>
    );
};

export default Home;
