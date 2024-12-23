// src/UpdateBusiness.js
import React, { useState, useEffect } from 'react';

const categories = [
    "Sole Proprietorship",
    "LLC",
    "Corporation",
    "Partnership",
    "Non-Profit",
];

const statuses = [
    "Pending",
    "Approved",
    "Rejected",
];

function UpdateBusiness({ business, onUpdate }) {
    const [formData, setFormData] = useState(business);

    useEffect(() => {
        setFormData(business);
    }, [business]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <div className="mt-4 p-4 bg-white border rounded shadow">
            <h2 className="text-xl font-bold mb-2">Update Business</h2>
            <form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                    key !== 'id' && (
                        <div key={key} className="mb-4">
                            <label className="block text-sm font-medium mb-1">{key.replace(/([A-Z])/g, ' $1')}</label>
                            {key === 'category' ? (
                                <select
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    className="border rounded w-full px-3 py-2"
                                    required
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            ) : key === 'status' ? (
                                <select
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    className="border rounded w-full px-3 py-2"
                                    required
                                >
                                    {statuses.map((status) => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={key === 'email' ? 'email' : 'text'}
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    placeholder={key.replace(/([A-Z])/g, ' $1')}
                                    required
                                    className="border rounded w-full px-3 py-2"
                                />
                            )}
                        </div>
                    )
                ))}
                <div className="flex justify-end">
                    <button type="button" onClick={() => onUpdate(null)} className="mr-2 bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateBusiness;