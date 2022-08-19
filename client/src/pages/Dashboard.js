// Import file dependencies
import React from 'react';
import "../App.css";
import logoutUser from '../components/LogoutUser';

// Display landing page
function Dashboard () {
    return (
        <><div className="flex-column justify-center align-center min-100-vh bg-slate-500">
            <nav>
            <button onClickCapture={logoutUser}>logout user</button>
            </nav>
        </div><div className="flex-column justify-left align-left min-100-vh bg-slate-500">
                <ul>
                    <li>
                        <a href="/Habits">Habits</a>
                    </li>
                    <li>
                        <a href="/Todos">Todos</a>
                    </li>
                    <li>
                        <a href="/Tags">Tags</a>
                    </li>
                </ul>
            </div></>
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