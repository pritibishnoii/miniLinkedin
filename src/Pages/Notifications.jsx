import React from 'react';

const mockNotifications = [
    {
        id: 1,
        type: 'connection',
        message: 'John Doe sent you a connection request.',
        time: '2h ago',
    },
    {
        id: 2,
        type: 'job',
        message: 'New job posted: Frontend Developer at Google.',
        time: '1d ago',
    },
    {
        id: 3,
        type: 'message',
        message: 'Jane Smith sent you a message.',
        time: '3d ago',
    },
];

const Notifications = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-3xl mx-auto py-8 px-2 sm:px-0">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Notifications</h1>
                <div className="space-y-4">
                    {mockNotifications.map((notif) => (
                        <div
                            key={notif.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 flex items-center"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                                {notif.type === 'connection' && (
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75"
                                        />
                                    </svg>
                                )}
                                {notif.type === 'job' && (
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"
                                        />
                                    </svg>
                                )}
                                {notif.type === 'message' && (
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="text-gray-900 font-medium mb-1 text-sm sm:text-base">
                                    {notif.message}
                                </div>
                                <div className="text-gray-500 text-xs">{notif.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notifications;
