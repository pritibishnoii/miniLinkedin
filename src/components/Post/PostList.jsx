import React, { useState, useEffect } from 'react';
import { getPosts } from '../../api/post';
import Post from './Post';
import CreatePost from './CreatePost';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const data = await getPosts(token);
            setPosts(data);
        } catch (err) {
            setError('Failed to load posts');
            console.error('Error fetching posts:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handlePostCreated = () => {
        fetchPosts();
    };

    if (loading) {
        return (
            <div className="space-y-4">
                <CreatePost onPostCreated={handlePostCreated} />

                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-start space-x-3 mb-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
                            <div className="flex-1">
                                <div className="h-4 bg-gray-300 rounded w-32 mb-2 animate-pulse"></div>
                                <div className="h-3 bg-gray-300 rounded w-24 animate-pulse"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                        </div>
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                            <div className="flex space-x-4">
                                <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="space-y-4">
                <CreatePost onPostCreated={handlePostCreated} />

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="text-center">
                        <div className="text-red-500 text-6xl mb-4">⚠️</div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Failed to Load Posts</h2>
                        <p className="text-gray-600 mb-4">{error}</p>
                        <button
                            onClick={fetchPosts}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <CreatePost onPostCreated={handlePostCreated} />

            {posts.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="text-center">
                        <svg
                            className="w-16 h-16 text-gray-400 mx-auto mb-4"
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
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts yet</h3>
                        <p className="text-gray-600">Be the first to share something with your network!</p>
                    </div>
                </div>
            ) : (
                posts.map((post) => <Post key={post._id} post={post} />)
            )}
        </div>
    );
};

export default PostList;
