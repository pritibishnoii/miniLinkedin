import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-2 sm:px-4 py-2 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <span className="text-blue-700 font-bold text-2xl tracking-tight">miniLinkedIn</span>
                </div>

                {/* Hamburger for mobile */}
                <button
                    className="sm:hidden p-2 rounded hover:bg-blue-50 focus:outline-none"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Nav Links */}
                <div
                    className={`${
                        menuOpen ? 'block' : 'hidden'
                    } sm:flex items-center space-x-0 sm:space-x-6 absolute sm:static top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent border-t sm:border-none border-gray-200 sm:mt-0 mt-2 z-50`}
                >
                    <div className="flex flex-col sm:flex-row w-full sm:w-auto">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex flex-row sm:flex-col items-center px-2 py-2 sm:py-1 rounded hover:bg-blue-50 transition-colors ${
                                    isActive ? 'text-blue-700 font-semibold' : 'text-gray-600'
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg className="w-6 h-6 mb-0 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
                                />
                            </svg>
                            <span className="text-xs">Home</span>
                        </NavLink>
                        <NavLink
                            to="/network"
                            className={({ isActive }) =>
                                `flex flex-row sm:flex-col items-center px-2 py-2 sm:py-1 rounded hover:bg-blue-50 transition-colors ${
                                    isActive ? 'text-blue-700 font-semibold' : 'text-gray-600'
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg className="w-6 h-6 mb-0 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75"
                                />
                            </svg>
                            <span className="text-xs">My Network</span>
                        </NavLink>
                        <NavLink
                            to="/jobs"
                            className={({ isActive }) =>
                                `flex flex-row sm:flex-col items-center px-2 py-2 sm:py-1 rounded hover:bg-blue-50 transition-colors ${
                                    isActive ? 'text-blue-700 font-semibold' : 'text-gray-600'
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg className="w-6 h-6 mb-0 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"
                                />
                            </svg>
                            <span className="text-xs">Jobs</span>
                        </NavLink>
                        <NavLink
                            to="/messaging"
                            className={({ isActive }) =>
                                `flex flex-row sm:flex-col items-center px-2 py-2 sm:py-1 rounded hover:bg-blue-50 transition-colors ${
                                    isActive ? 'text-blue-700 font-semibold' : 'text-gray-600'
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg className="w-6 h-6 mb-0 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                            <span className="text-xs">Messaging</span>
                        </NavLink>
                        <NavLink
                            to="/notifications"
                            className={({ isActive }) =>
                                `flex flex-row sm:flex-col items-center px-2 py-2 sm:py-1 rounded hover:bg-blue-50 transition-colors ${
                                    isActive ? 'text-blue-700 font-semibold' : 'text-gray-600'
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg className="w-6 h-6 mb-0 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-5 5v-5zM4 19h6a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <span className="text-xs">Notifications</span>
                        </NavLink>
                        <NavLink
                            to="/profile/me"
                            className={({ isActive }) =>
                                `flex flex-row sm:flex-col items-center px-2 py-2 sm:py-1 rounded hover:bg-blue-50 transition-colors ${
                                    isActive ? 'text-blue-700 font-semibold' : 'text-gray-600'
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg className="w-6 h-6 mb-0 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <span className="text-xs">Profile</span>
                        </NavLink>
                        <button
                            onClick={() => {
                                setMenuOpen(false);
                                handleLogout();
                            }}
                            className="flex flex-row sm:flex-col items-center px-2 py-2 sm:py-1 rounded text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                        >
                            <svg className="w-6 h-6 mb-0 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                                />
                            </svg>
                            <span className="text-xs">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
