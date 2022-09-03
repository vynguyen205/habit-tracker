import React, { useState } from 'react';
import "../App.css";
import Navbar from '../client/src/components/Navbar';
import Menu from '../client/src/components/Menu';
// import AddTag from '../components/Tags/addTag';
// import TagList from '../components/Tags';
// Display all habits for a logged in user
function Tags() {

    return (
        <>
            <div className="flex-column bg-lightOrange h-[100vh] w-[100vw]">
                <Navbar />
                <div className="flex">
                    <div className='flex flex-col w-max h-[75vh] px-8 py-8 overflow-y-auto rounded-2xl bg-darkOrange m-20'>
                        <Menu />
                    </div>
                    {/* <div className='flex flex-col justify-between mt-10'>
                        <TagList />
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Tags;
