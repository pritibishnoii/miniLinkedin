import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { AiFillMessage } from 'react-icons/ai';
import { FcBriefcase } from 'react-icons/fc';
import { MdNotificationsActive } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { IoMdLogOut } from 'react-icons/io';

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
                <div className="flex items-center space-x-2">
                    <span className="text-blue-700 font-bold text-2xl tracking-tight">miniLinkedIn</span>
                </div>

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
                            <FaHome className="w-6 h-6 mb-0 sm:mb-1 text-orange-600" />
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
                            <IoPeople className="w-6 h-6 mb-0 sm:mb-1 text-orange-600" />

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
                            <FcBriefcase className="w-6 h-6 mb-0 sm:mb-1 text-orange-600" />

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
                            <AiFillMessage className="w-6 h-6 mb-0 sm:mb-1 text-orange-600" />

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
                            <MdNotificationsActive className="w-6 h-6 mb-0 sm:mb-1 text-orange-600" />
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
                            <CgProfile className="w-6 h-6 mb-0 sm:mb-1 text-orange-600" />

                            <span className="text-xs">Profile</span>
                        </NavLink>
                        <button
                            onClick={() => {
                                setMenuOpen(false);
                                handleLogout();
                            }}
                            className="flex flex-row sm:flex-col items-center px-2 py-2 sm:py-1 rounded text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                        >
                            <IoMdLogOut className="w-6 h-6 mb-0 sm:mb-1 text-orange-600" />

                            <span className="text-xs">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
