import React, { useState } from 'react';

const mockConversations = [
    {
        id: 1,
        name: 'John Doe',
        lastMessage: 'Hey, how are you?',
        messages: [
            { from: 'me', text: 'Hi John!' },
            { from: 'John Doe', text: 'Hey, how are you?' },
        ],
    },
    {
        id: 2,
        name: 'Jane Smith',
        lastMessage: 'Let’s connect!',
        messages: [{ from: 'Jane Smith', text: 'Let’s connect!' }],
    },
];

const Messaging = () => {
    const [selectedId, setSelectedId] = useState(mockConversations[0].id);
    const [input, setInput] = useState('');

    const selectedConversation = mockConversations.find((c) => c.id === selectedId);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        // In a real app, send message to backend here
        selectedConversation.messages.push({ from: 'me', text: input });
        setInput('');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto py-8 px-2 sm:px-0 flex flex-col md:flex-row h-[70vh] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 p-4 overflow-y-auto">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Messaging</h2>
                    {mockConversations.map((conv) => (
                        <div
                            key={conv.id}
                            onClick={() => setSelectedId(conv.id)}
                            className={`p-3 rounded-lg cursor-pointer mb-2 ${
                                selectedId === conv.id ? 'bg-blue-50' : 'hover:bg-gray-100'
                            }`}
                        >
                            <div className="font-semibold text-gray-900">{conv.name}</div>
                            <div className="text-gray-500 text-sm truncate">{conv.lastMessage}</div>
                        </div>
                    ))}
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                        <div className="mb-4 font-semibold text-gray-900">{selectedConversation.name}</div>
                        <div className="space-y-2">
                            {selectedConversation.messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`px-4 py-2 rounded-lg max-w-xs ${
                                            msg.from === 'me' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form onSubmit={handleSend} className="p-4 border-t border-gray-200 flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="ml-2 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Messaging;
