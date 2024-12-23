// src/Profile.jsx
import React, { useState } from 'react';

const Profile = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [formData, setFormData] = useState({
        name: 'Jannie Regel',
        username: 'jannie_regel',
        email: 'jannie@example.com',
        password: '',
        image: 'https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png',
        gender: 'Female',
        dob: '23/10/1987',
        phone: '123-456-7890',
    });

    const toggleProfile = () => {
        setShowProfile(prev => !prev);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., update user profile in the database)
        alert('Updated Profile:', formData);
    };

    return (
        <div className="relative">
            <button onClick={toggleProfile} className="relative">
                <img
                    src={formData.image}
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full cursor-pointer"
                />
            </button>
            {showProfile && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4">
                    <h3 className="font-bold mb-2">User Profile</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="block text-sm">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border rounded w-full px-2 py-1"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="border rounded w-full px-2 py-1"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border rounded w-full px-2 py-1"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="border rounded w-full px-2 py-1"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm">Gender</label>
                            <input
                                type="text"
                                name="gender"
                                value={formData.gender}
                                readOnly
                                className="border rounded w-full px-2 py-1 bg-gray-200"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm">Date of Birth</label>
                            <input
                                type="text"
                                name="dob"
                                value={formData.dob}
                                readOnly
                                className="border rounded w-full px-2 py-1 bg-gray-200"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border rounded w-full px-2 py-1"
                            />
                        </div>
                        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
                            Update Profile
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Profile;