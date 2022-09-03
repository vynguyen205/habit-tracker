import React, { useState } from 'react';
import "../App.css";
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
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
                        <div className='flex flex-row justify-between mt-10 border-b border-gray pb-6'>
                            <div className="flex flex-col mt-10">
                                <div className='text-xl text-black font-light tracking-wide'>{day}</div>
                                <div className="text-2xl font-normaltracking-wide">{currentDate}</div>
                            </div>
                            <div className='flex justify-start mt-10'>
                                <AddHabit />
                            </div>
                        </div>
                        <div className='flex flex-col flex-wrap items-start mt-12'>
                            <HabitList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
