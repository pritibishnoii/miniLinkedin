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
                        <Route path="/" element={<Home />} />
                        <Route path="/profile/:id" element={<Profile />} />
                        <Route path="/network" element={<Network />} />
                        <Route path="/jobs" element={<Jobs />} />
                        <Route path="/messaging" element={<Messaging />} />
                        <Route path="/notifications" element={<Notifications />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default App;
