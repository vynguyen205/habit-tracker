import React from "react";
import "../App.css";

function Menu() {
    return (
        <>
            <div className="flex">
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
            </div>
        </>
    );
}

export default Menu;