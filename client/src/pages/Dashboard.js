// Import file dependencies
import React, { useState } from 'react';
import "../App.css";
import logoutUser from '../components/LogoutUser';

// Display landing page
function Dashboard () {
    return (
        <div className="flex-column justify-center align-center min-100-vh bg-slate-500">
            <nav>
                <h1>Login</h1>
                <h3>Logout</h3>
            </nav>
            <button onClickCapture={logoutUser}>logout user</button>
        </div>
    );
}

export default Dashboard;


// Display header with home icon and logout button

// Display side menu

// Display current date

// Display logged in users name

// Todos: button to view all todos

// Habits: button to view all habits

// Tags: button to view all tags

// Display Middle body withing landing page

// Button to add new habit

// Button to add new todo