// src/GenerateReports.js
import React, { useState } from 'react';

function GenerateReports() {
    const [reportType, setReportType] = useState('');
    const [dateRange, setDateRange] = useState('');
    const [region, setRegion] = useState('');
    const [reports, setReports] = useState([]);

    const handleGenerateReport = (e) => {
        e.preventDefault();
        // Simulate report generation logic
        const newReport = {
            type: reportType,
            dateRange,
            region,
            id: reports.length + 1,
        };
        setReports([...reports, newReport]);
        // Clear form fields
        setReportType('');
        setDateRange('');
        setRegion('');
    };

    return (
        <div className="p-5 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Generate Reports</h1>
            <form onSubmit={handleGenerateReport} className="mb-5">
                <div className="mb-4">
                    <label className="block mb-2">Report Type:</label>
                    <select
                        value={reportType}
                        onChange={(e) => setReportType(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="Business Type">Business Type</option>
                        <option value="Date">Date</option>
                        <option value="Region">Region</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Date Range:</label>
                    <input
                        type="text"
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        placeholder="e.g. Jan 2023 - Dec 2023"
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Region:</label>
                    <input
                        type="text"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        placeholder="Enter region"
                        className="border p-2 rounded w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Generate Report
                </button>
            </form>

            {reports.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold mb-2">Generated Reports</h2>
                    <ul className="bg-white border border-gray-300 rounded">
                        {reports.map((report) => (
                            <li key={report.id} className="p-2 border-b">
                                <strong>Type:</strong> {report.type} | <strong>Date Range:</strong> {report.dateRange} | <strong>Region:</strong> {report.region}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default GenerateReports;