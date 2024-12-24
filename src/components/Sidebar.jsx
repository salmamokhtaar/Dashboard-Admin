import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSignOutAlt, 
    faBusinessTime, 
    faHome, 
    faCheck, 
    faUserCog, 
    faCancel, 
    faFileAlt, 
    faBars, 
    faTimes 
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Function to close sidebar when a link is clicked
    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Hamburger Menu Icon (Visible only on mobile) */}
            <div className="md:hidden flex items-center z-50 fixed mt-16 ml-0">
    <button onClick={toggleSidebar} className="p-2 rounded-full text-blue-600">
        {/* Toggle between Bars and Times icons */}
        <FontAwesomeIcon 
            icon={isOpen ? faTimes : faBars} 
            className={`text-2xl ${isOpen ? 'text-gray-50' : 'text-blue-600'}`} 
        />
    </button>
</div>

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 w-64 bg-gray-100 text-black sm:bg-blue-500 sm:text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
                
                {/* Close Icon inside Sidebar (Top-right) */}
                <div className="absolute top-4 sm:hidden right-4">
                    <button onClick={closeSidebar} className="text-blue-600 p-2 rounded-full">
                        <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                    </button>
                </div>

                <nav className="flex flex-col pt-4 font-bold">
                    {/* Menu Item - Home */}
                    <Link to="/" className="flex items-center py-3 px-4 hover:cursor-pointer rounded transition duration-200" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faHome} className="mr-3 text-2xl" />
                        <span className="hidden md:inline">Home</span>
                    </Link>
                    {/* Menu Item - View */}
                    <Link to="/view-businesses" className="flex items-center py-3 px-4 hover:cursor-pointer rounded transition duration-200" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faBusinessTime} className="mr-3 text-2xl" />
                        <span className="hidden md:inline">View</span>
                    </Link>
                    {/* Menu Item - Approved */}
                    <Link to="/approved-registrations" className="flex items-center py-3 px-4 hover:cursor-pointer rounded transition duration-200" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faCheck} className="mr-3 text-2xl" />
                        <span className="hidden md:inline">Approved</span>
                    </Link>
                    {/* Menu Item - Rejected */}
                    <Link to="/rejected" className="flex items-center py-3 px-4 hover:cursor-pointer rounded transition duration-200" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faCancel} className="mr-3 text-2xl" />
                        <span className="hidden md:inline">Rejected</span>
                    </Link>
                    {/* Menu Item - Manage Users */}
                    <Link to="/manage-users" className="flex items-center py-3 px-4 hover:cursor-pointer rounded transition duration-200" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faUserCog} className="mr-3 text-2xl" />
                        <span className="hidden md:inline">Manage Users</span>
                    </Link>
                    {/* Menu Item - Reports */}
                    <Link to="/generate-reports" className="flex items-center py-3 px-4 hover:cursor-pointer rounded transition duration-200" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faFileAlt} className="mr-3 text-2xl" />
                        <span className="hidden md:inline">Reports</span>
                    </Link>
                    {/* Logout */}
                    <Link to="/logOut" className="flex items-center bg-white text-red-600 py-3 px-4 mt-10 hover:cursor-pointer rounded transition duration-200" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-3 text-2xl" />
                        <span className="hidden md:inline">Logout</span>
                    </Link>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
