import React from 'react';
import '../index.css';

function Admin() {
    return (
        <div className="admin-panel">
            <header className="admin-header">
                <h1>ADMIN PANEL</h1>
                <div className="admin-buttons">
                    <button className="admin-button">ADD A USER</button>
                    <button className="admin-button">NODE</button>
                    <button className="admin-button">LOGOUT</button>
                </div>
            </header>
            <div className="admin-content">
                <div className="search-bar">
                    <input type="text" placeholder="SEARCH USER" />
                    <button><i className="fa fa-search"></i></button>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>EMAIL</th>
                            <th>FULL NAME</th>
                            <th>NODE</th>
                            <th>ROLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Rows with user data will go here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;
