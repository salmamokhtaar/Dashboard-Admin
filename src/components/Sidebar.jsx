// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faBusinessTime, faHome, faCheck, faUserCog, faCancel,faFileAlt } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <aside className="w-64 shadow-lg bg-blue-500 text-white text-2xl h-screen p-5">
            <nav className='pt-8 text-2xl  font-bold'>
                <Link to="/" className="block py-2 hover:underline rounded">
                    <FontAwesomeIcon icon={faHome} className="mr-2" /> Dashboard 
                </Link>
                <Link to="/view-businesses" className="block py-2 hover:underline rounded">
                    <FontAwesomeIcon icon={faBusinessTime} className="mr-2 " /> View 
                </Link>
                <Link to="/approved-registrations" className="block py-2 hover:underline rounded">
                    <FontAwesomeIcon icon={faCheck} className="mr-2" /> Approved 
                </Link>
                <Link to="/rejected" className="block py-2 hover:underline rounded">
                    <FontAwesomeIcon icon={faCancel} className="mr-2" /> Rejected
                </Link>
                <Link to="/manage-users" className="block py-2 hover:underline rounded">
                    <FontAwesomeIcon icon={faUserCog} className="mr-2" /> Manage Users
                </Link>
             
                <Link to="/generate-reports" className="block py-2 hover:underline rounded">
                    <FontAwesomeIcon icon={faFileAlt} className="mr-2" /> Reports
                </Link>

                <Link to="/logOut" className="block mt-20 py-2 hover:underline rounded">
                    <FontAwesomeIcon icon={faLongArrowAltUp} className="mr-2" /> Logout
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;