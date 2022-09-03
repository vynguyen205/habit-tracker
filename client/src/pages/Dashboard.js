// Import file dependencies
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
// import habit components 
import HabitList from '../components/Habits';
import AddHabit from '../components/Habits/addHabit';

import moment from 'moment';

// Display landing page
function Dashboard() {

    const day = moment().format('dddd');
    const currentDate = moment().format('MMMM Do, YYYY');

    return (
        <>
            <div className='flex-column bg-lightOrange h-fit-content w-fit-content'>
                <Navbar />
                <div className="flex">
                    <aside className='flex flex-col min-w-[260px] h-[75vh] p-4 overflow-y-auto rounded-3xl bg-darkOrange m-20'>
                        <Menu />
                    </aside>
                    <div className="flex flex-col w-[75vw] pr-10">
                        <div className='flex flex-row justify-between mt-10 border-b border-gray pb-10'>
                            <div className="flex flex-col mt-10">
                                <div className='text-md text-black font-light tracking-wide'>{day}</div>
                                <div className="text-xl font-normaltracking-wide">{currentDate}</div>
                            </div>
                            <div className='flex items-center mt-10'>
                                <AddHabit />
                            </div>
                            <div className='flex items-center flex-wrap mt-12'>
                                <HabitList />
                            </div>
                        </div>
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