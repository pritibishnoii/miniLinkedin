import React, { useState } from 'react';

const Post = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(post.likes || 0);
    const [showComments, setShowComments] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
        if (diffInHours < 1) {
            return 'Just now';
        } else if (diffInHours < 24) {
            return `${diffInHours}h ago`;
        } else {
            const diffInDays = Math.floor(diffInHours / 24);
            return `${diffInDays}d ago`;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-4">
            {/* Post Header */}
            <div className="flex items-start space-x-2 sm:space-x-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-base sm:text-lg">
                        {post.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                    </span>
                </div>
                <div className="flex-1">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                            {post.user?.name || 'Unknown User'}
                        </h3>
                        <span className="text-gray-500">•</span>
                        <span className="text-xs sm:text-sm text-gray-500">{formatDate(post.createdAt)}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">{post.user?.title || 'Software Developer'}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
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
            {/* Post Content */}
            <div className="mb-4">
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">{post.text}</p>
            </div>
            {/* Post Stats */}
            <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <span>{likesCount} likes</span>
                    <span>•</span>
                    <span>{post.comments?.length || 0} comments</span>
                    <span>•</span>
                    <span>{post.shares || 0} shares</span>
                </div>
            </div>
            {/* Post Actions */}
            <div className="flex flex-wrap items-center justify-between gap-2">
                <button
                    onClick={handleLike}
                    className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-colors text-xs sm:text-sm ${
                        liked ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill={liked ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                    </svg>
                    <span>Like</span>
                </button>
                <button
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                    <span>Comment</span>
                </button>
                <button className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                    </svg>
                    <span>Share</span>
                </button>
                <button className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                    </svg>
                    <span>Save</span>
                </button>
            </div>
            {/* Comments Section */}
            {showComments && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-gray-600 text-xs sm:text-sm font-semibold">U</span>
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Write a comment..."
                                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                            />
                        </div>
                    </div>
                    {/* Sample Comments */}
                    <div className="mt-4 space-y-2 sm:space-y-3">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xs sm:text-sm font-semibold">J</span>
                            </div>
                            <div className="flex-1">
                                <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                                    <p className="font-semibold text-xs sm:text-sm text-gray-900">John Doe</p>
                                    <p className="text-xs sm:text-sm text-gray-700">Great post! Thanks for sharing.</p>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-4 mt-2 text-xs text-gray-500">
                                    <button className="hover:text-blue-600">Like</button>
                                    <button className="hover:text-blue-600">Reply</button>
                                    <span>2h ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Post;
