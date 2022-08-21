import React, { useState } from 'react';
import "../App.css";
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import AddTag from '../components/Tags/addTag';

// Display all habits for a logged in user
function Tags() {
    const [tags, setTags] = useState([]);
    const getTags = async () => {
        const response = await fetch('../../utils/api');
        const data = await response.json();
        setTags(data);
    }

    React.useEffect(() => {
        getTags();
    }, []);

    return (
        <>
            <div className="flex-column bg-lightOrange h-[100vh] w-[100vw]">
                <Navbar />
                <div className="flex">
                    <div className='flex flex-col w-[25vw] h-[80vh] px-8 py-8 overflow-y-auto rounded-2xl bg-darkOrange m-20'>
                        <h2 className='text-2xl font-bold text-center text-dar'>Welcome, --Username--</h2>
                        <div className='flex flex-col justify-between mt-10'>
                            <Menu />
                        </div>
                    </div>
                    <div className='flex flex-col justify-between mt-10'>
                        <AddTag />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tags;
