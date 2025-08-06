import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Network from './Pages/Network';
import Jobs from './Pages/Jobs';
import Messaging from './Pages/Messaging';
import Notifications from './Pages/Notifications';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <>
            <Router>
                <div>
                    <Toaster />
                    <Navbar />
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/profile/:id"
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/network"
                            element={
                                <ProtectedRoute>
                                    <Network />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/jobs"
                            element={
                                <ProtectedRoute>
                                    <Jobs />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/messaging"
                            element={
                                <ProtectedRoute>
                                    <Messaging />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/notifications"
                            element={
                                <ProtectedRoute>
                                    <Notifications />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default App;
