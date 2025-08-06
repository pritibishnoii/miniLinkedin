import React, { useState } from 'react';

const mockJobs = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Google',
        location: 'Bangalore, India',
        posted: '2d ago',
        description: 'Work on scalable web apps using React and TypeScript.',
    },
    {
        id: 2,
        title: 'Backend Engineer',
        company: 'Amazon',
        location: 'Hyderabad, India',
        posted: '1d ago',
        description: 'Build robust APIs and microservices with Node.js.',
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        company: 'Microsoft',
        location: 'Remote',
        posted: '3d ago',
        description: 'Develop end-to-end solutions using MERN stack.',
    },
];

const Jobs = () => {
    const [search, setSearch] = useState('');
    const filteredJobs = mockJobs.filter(
        (job) =>
            job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.company.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto py-8 px-2 sm:px-0">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Jobs</h1>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search jobs or companies..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                {filteredJobs.length === 0 ? (
                    <div className="text-center text-gray-500">No jobs found.</div>
                ) : (
                    <div className="space-y-6">
                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between"
                            >
                                <div>
                                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{job.title}</h2>
                                    <p className="text-gray-700 mb-1 text-sm sm:text-base">
                                        {job.company} • {job.location}
                                    </p>
                                    <p className="text-gray-500 text-xs sm:text-sm mb-2">{job.posted}</p>
                                    <p className="text-gray-600 text-xs sm:text-sm">{job.description}</p>
                                </div>
                                <button className="mt-4 md:mt-0 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto">
                                    Apply
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Jobs;
