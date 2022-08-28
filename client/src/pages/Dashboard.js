// Import file dependencies
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';

import HabitList from '../components/Habits';
import AddHabit from '../components/Habits/addHabit';
// import { Container } from '@material-ui/core';

// Display landing page
function Dashboard() {
    // this is grabbing the id from the url
    // const {userId} = useParams();
    // console.log("params", userId);

    return (
        <>
            <div className='flex-column bg-lightOrange h-screen w-screen'>
                <Navbar />
                <div className="flex ">
                    <div className='flex flex-col w-max h-[75vh] px-8 py-8 overflow-y-auto rounded-2xl bg-darkOrange m-20'>
                        <div className='flex flex-col justify-between mt-10'>
                            <Menu />
                        </div>
                    </div>
                    <div>
                        <AddHabit />
                        <HabitList />
                    </div>
                </div>
            </div>
        </>
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