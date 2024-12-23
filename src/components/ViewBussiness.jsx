// src/ViewBusiness.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function ViewBusiness() {
    const businesses = [
        {
            id: 1,
            companyName: "Company A",
            ownerName: "John Doe",
            email: "john@example.com",
            phone: "123-456-7890",
            contactAddress: "123 Main St, City, Country",
            category: "Sole Proprietorship",
            registrationNumber: "REG123456",
            status: "Approved"
        },
        {
            id: 2,
            companyName: "Company B",
            ownerName: "Jane Smith",
            email: "jane@example.com",
            phone: "987-654-3210",
            contactAddress: "456 Elm St, City, Country",
            category: "LLC",
            registrationNumber: "REG654321",
            status: "Rejected"
        },
        // Add more sample data as needed
    ];

    return (
        <div className="p-5 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">All Businesses</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Company Name</th>
                            <th className="py-2 px-4 border-b">Owner Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                            <th className="py-2 px-4 border-b">Address</th>
                            <th className="py-2 px-4 border-b">Category</th>
                            <th className="py-2 px-4 border-b">Reg-No</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {businesses.map((business) => (
                            <tr key={business.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{business.companyName}</td>
                                <td className="py-2 px-4 border-b">{business.ownerName}</td>
                                <td className="py-2 px-4 border-b">{business.email}</td>
                                <td className="py-2 px-4 border-b">{business.phone}</td>
                                <td className="py-2 px-4 border-b">{business.contactAddress}</td>
                                <td className="py-2 px-4 border-b">{business.category}</td>
                                <td className="py-2 px-4 border-b">{business.registrationNumber}</td>
                                <td className="py-2 px-4 border-b">
                                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${business.status === "Approved" ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                        {business.status}
                                    </span>
                                </td>
                                <td className="py-2 px-4 border-b flex space-x-2">
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewBusiness;