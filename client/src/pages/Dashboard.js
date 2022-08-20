// Import file dependencies
import React, { useState } from 'react';
import logoutUser from '../components/LogoutUser';
import { Link } from 'react-router-dom';

// Display landing page
function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className='flex-column bg-lightOrange h-[100vh] w-[100vw]'>
                <nav className='flex items-center justify-between flex-wrap bg-lightBlue p-6'>
                    <Link to="/Dashboard" className='flex items-center flex-shrink-0 mr-6'>
                        <img src={require('../assets/bus.jpeg')} alt='logo' className='w-30 h-20' />
                    </Link>
                    <button onClickCapture={logoutUser} className='inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-lightBlue hover:bg-white mt-4 md:mt-0'>Logout</button>
                </nav>
                <div className='flex'>
                    <div className='flex flex-col w-[25vw] h-[80vh] px-8 py-8 overflow-y-auto rounded-2xl bg-darkOrange m-20'>
                        <h2 className='text-2xl font-bold text-center text-dar'>Welcome, --Username--</h2>


                        <div className='flex flex-col justify-between mt-10'>
                            <aside>
                                <ul>
                                    <li>
                                        <a className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200' href="/Habits">
                                            <span className='px-20 font-semibold text-2xl'>Habits</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200' href="/Todos">
                                            <span className='px-20 font-semibold text-2xl'>Todos</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200' href="/Tags">
                                            <span className='px-20 font-semibold text-2xl'>Tags</span>
                                        </a>
                                    </li>
                                </ul>

                            </aside>

                        </div>
                    </div>
                    <div className='w-full h-full p-4 m-8 overflow-y-auto'>
                        <div className='flex items-center justify-center inset-50 p-40 border-4 border-dotted'>
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