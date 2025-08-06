import React, { useState } from 'react';
import { createPost } from '../../api/post';
import toast from 'react-hot-toast';

const CreatePost = ({ onPostCreated }) => {
    const [text, setText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!text.trim()) {
            toast.error('Please write something to post');
            return;
        }

        try {
            setIsSubmitting(true);
            const token = localStorage.getItem('token');
            await createPost(text, token);

            setText('');
            toast.success('Post created successfully!');

            if (onPostCreated) {
                onPostCreated();
            }
        } catch (error) {
            console.error('Error creating post:', error);
            toast.error('Failed to create post');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-lg">
                        {localStorage.getItem('user')
                            ? JSON.parse(localStorage.getItem('user')).user?.name?.charAt(0)?.toUpperCase() ||
                              JSON.parse(localStorage.getItem('user')).name?.charAt(0)?.toUpperCase() ||
                              'U'
                            : 'U'}
                    </span>
                </div>

                <div className="flex-1">
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="What do you want to talk about?"
                            className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows="3"
                            maxLength="1000"
                        />

                        <div className="flex justify-between items-center mt-3">
                            <div className="flex items-center space-x-4">
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-blue-600 transition-colors"
                                    title="Add photo"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-blue-600 transition-colors"
                                    title="Add video"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-blue-600 transition-colors"
                                    title="Add document"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex items-center space-x-3">
                                <span className="text-sm text-gray-500">{text.length}/1000</span>
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !text.trim()}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isSubmitting ? 'Posting...' : 'Post'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
