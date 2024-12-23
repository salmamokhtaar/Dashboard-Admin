// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RejectedRegestrations from './components/RejectedRegestrations.jsx';
import ViewBussiness from './components/ViewBussiness.jsx';
import ApprovedRegistration from './components/ApprovedRegistration.jsx'
import ManageUsers from './components/ManageUsers.jsx';
import GenerateReports from './components/GenerateReports.jsx'
import LogOut from './components/LogOut.jsx';
// Sample page components
// const ViewBusinesses = () => <div><ViewBussiness/></div>;
// const ApprovedRegistrations = () => <div>Approved Registrations Page</div>;
// const Rejected = () => <div>Rejected Regestrations Page</div>;
// const ManageUsers = () => <div>Manage Users Page</div>;
// const GenerateReports = () => <div>Generate Reports Page</div>;

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route path="view-businesses" element={<ViewBussiness />} />
                    <Route path="approved-registrations" element={<ApprovedRegistration/>} />
                    <Route path="manage-users" element={<ManageUsers />} />
                    <Route path="rejected" element={<RejectedRegestrations />} />
                    <Route path="generate-reports" element={<GenerateReports/>} />
                    <Route path="LOGoUT" element={<LogOut/>} />

                </Route>
            </Routes>
        </Router>
    );
}

export default App;