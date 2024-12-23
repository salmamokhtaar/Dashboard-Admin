// src/Dashboard.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar'; 

const Dashboard = () => {
    const location = useLocation();
    const hideCardsPaths = ['/view-businesses', '/approved-registrations', '/rejected', '/generate-reports', '/manage-users'];

    return (
        <div className="flex flex-col h-screen">
            <TopBar /> 
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-5 bg-gray-100">
                    <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                    
                    {!hideCardsPaths.includes(location.pathname) && (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4'>
                            <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between'>
                                <div className="flex items-center mb-3">
                                    <div className="h-12 w-12 bg-sky-700 text-white rounded-full flex items-center justify-center">
                                        <i className="fas fa-shopping-cart"></i> {/* Example Icon */}
                                    </div>
                                    <div className="ml-4">
                                        <h2 className='text-lg font-semibold'>Approved</h2>
                                        <p className='text-2xl font-bold'>281</p>
                                        <p className='text-sm text-gray-500'>+5% Approved Business</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between'>
                                <div className="flex items-center mb-3">
                                    <div className="h-12 w-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                                        <i className="fas fa-users"></i> {/* Example Icon */}
                                    </div>
                                    <div className="ml-4">
                                        <h2 className='text-lg font-semibold'>Business Registration</h2>
                                        <p className='text-2xl font-bold'>2,300</p>
                                        <p className='text-sm text-gray-500'>+1% Registered Busines</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between'>
                                <div className="flex items-center mb-3">
                                    <div className="h-12 w-12 bg-green-500 text-white rounded-full flex items-center justify-center">
                                        <i className="fas fa-dollar-sign"></i> {/* Example Icon */}
                                    </div>
                                    <div className="ml-4">
                                        <h2 className='text-lg font-semibold'>Rejected</h2>
                                        <p className='text-2xl font-bold'>34k</p>
                                        <p className='text-sm text-gray-500'>+3% Rejected Businesess</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between'>
                                <div className="flex items-center mb-3">
                                    <div className="h-12 w-12 bg-pink-500 text-white rounded-full flex items-center justify-center">
                                        <i className="fas fa-user-friends"></i> {/* Example Icon */}
                                    </div>
                                    <div className="ml-4">
                                        <h2 className='text-lg font-semibold'>Users</h2>
                                        <p className='text-2xl font-bold'>+91</p>
                                        <p className='text-sm text-gray-500'>Registered Users</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className="mt-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;