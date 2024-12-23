// src/ApprovedRegistration.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import UpdateBusiness from './UpdateBusiness'; // Import the UpdateBusiness component
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ApprovedRegistration() {
    const [approvedBusinesses, setApprovedBusinesses] = useState([
        {
            id: 1,
            companyName: "Company A",
            ownerName: "John Doe",
            email: "john@example.com",
            phone: "123-456-7890",
            contactAddress: "123 Main St, City, Country",
            category: "Sole Proprietorship",
            registrationNumber: "REG123456"
        },
        {
            id: 2,
            companyName: "Company B",
            ownerName: "Jane Smith",
            email: "jane@example.com",
            phone: "987-654-3210",
            contactAddress: "456 Elm St, City, Country",
            category: "LLC",
            registrationNumber: "REG654321"
        },
    ]);

    const [editingBusiness, setEditingBusiness] = useState(null);

    const handleUpdateBusiness = (updatedBusiness) => {
        const updatedBusinesses = approvedBusinesses.map(business =>
            business.id === updatedBusiness.id ? updatedBusiness : business
        );
        setApprovedBusinesses(updatedBusinesses);
        setEditingBusiness(null);
        toast.success('Business updated successfully!');
    };

    const handleDeleteBusiness = (businessId) => {
        const confirmed = window.confirm("Are you sure you want to delete this business?");
        if (confirmed) {
            setApprovedBusinesses(approvedBusinesses.filter(business => business.id !== businessId));
            toast.success('Business deleted successfully!');
        }
    };

    return (
        <div className="p-5 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Approved Businesses</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Company Name</th>
                            <th className="py-2 px-4 border-b">Owner Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                            <th className="py-2 px-4 border-b">Contact Address</th>
                            <th className="py-2 px-4 border-b">Category</th>
                            <th className="py-2 px-4 border-b">Registration Number</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {approvedBusinesses.map((business) => (
                            <tr key={business.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{business.companyName}</td>
                                <td className="py-2 px-4 border-b">{business.ownerName}</td>
                                <td className="py-2 px-4 border-b">{business.email}</td>
                                <td className="py-2 px-4 border-b">{business.phone}</td>
                                <td className="py-2 px-4 border-b">{business.contactAddress}</td>
                                <td className="py-2 px-4 border-b">{business.category}</td>
                                <td className="py-2 px-4 border-b">{business.registrationNumber}</td>
                                <td className="py-2 px-4 border-b flex space-x-2">
                                    <button onClick={() => setEditingBusiness(business)} className="text-blue-500 hover:text-blue-700">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button onClick={() => handleDeleteBusiness(business.id)} className="text-red-500 hover:text-red-700">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {editingBusiness && (
                <UpdateBusiness business={editingBusiness} onUpdate={handleUpdateBusiness} />
            )}
            <ToastContainer />
        </div>
    );
}

export default ApprovedRegistration;