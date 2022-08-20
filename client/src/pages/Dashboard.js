// Import file dependencies
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';

// Display landing page
function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className='flex-column bg-lightOrange h-[100vh] w-[100vw]'>
                <Navbar />
                <Menu />
                    {/* Add new habit button */}
                    <button
                        className="bg-lightBlue text-white active:bg-darkBlue font-bold px-6 py-3 rounded-shadow hover:bg-darkBlue hover:shadow-lg outline-none focus:outline-none rounded-3xl mr-1 mb-1"
                        type="button" onClick={() => setShowModal(true)}>
                        Add New Habit
                    </button>
                    {showModal ? (
                        <>
                            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                            <h3 className="text-3xl font=semibold">Create Habit</h3>
                                            <button
                                                className="bg-transparent border-0 text-black float-right"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                                    X
                                                </span>
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                                <label className="block text-black text-sm font-bold mb-1">
                                                    Title
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                                <label className="block text-black text-sm font-bold mb-1">
                                                    Description
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                                <label className="block text-black text-sm font-bold mb-1">
                                                    Tags
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                                <label className="block text-black text-sm font-bold mb-1">
                                                    Repeat
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                            </form>
                                        </div>
                                        <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                    {/* Add new todo button */}
                    <button
                        className="bg-lightBlue text-white active:bg-darkBlue font-bold px-6 py-3 rounded-shadow hover:bg-darkBlue hover:shadow-lg outline-none focus:outline-none rounded-3xl mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                        Add New Daily
                    </button>
                    {showModal ? (
                        <>
                            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                            <h3 className="text-3xl font=semibold">Create Todo</h3>
                                            <button
                                                className="bg-transparent border-0 text-black float-right"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                                    X
                                                </span>
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                                <label className="block text-black text-sm font-bold mb-1">
                                                    Title
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                                <label className="block text-black text-sm font-bold mb-1">
                                                    Description
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                                <label className="block text-black text-sm font-bold mb-1">
                                                    Tags
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                            </form>
                                        </div>
                                        <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
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