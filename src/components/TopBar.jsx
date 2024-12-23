// src/TopBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
    return (
        <div className="bg-white shadow-2xl flex items-center justify-between p-4">
            {/* Dashboard Title */}
            <div className="text-xl text-blue-600 font-semibold">Dashboard</div>

            {/* Search Input (Centered) */}
            <div className="flex flex-1 justify-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-full py-2 px-4 w-1/2" // Adjust width as needed
                />
            </div>
            
            {/* User Avatar and Notification Icon */}
            <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faBell} className="h-6 w-6 text-gray-600 cursor-pointer" />
                <img
                    src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png" // Replace with your user avatar image URL
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full cursor-pointer"
                />
            </div>
        </div>
    );
};

export default TopBar;