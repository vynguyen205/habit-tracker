import React from 'react';
import "../App.css";

// Function to Logout User
function logoutUser() {
    // Set local storage to null
    localStorage.setItem('user', null);
    // Redirect to homepage 
    window.location.href = '/'; /* change this to link or navigate */

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

export default logoutUser;

        

      

