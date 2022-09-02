import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import { MdWork } from 'react-icons/md';
import { BsCalendarCheckFill } from 'react-icons/bs';

import { useAtom } from 'jotai';
import { userAtom } from '../state';


const Menu = () => {
    const [user, setUser] = useAtom(userAtom)
    const location = useLocation();
    let todoPathStyle = "flex items-center px-6 py-2 mt-5 text-gray-600 rounded-md hover:bg-opacity-25 hover:bg-gray";
    let habitPathStyle = "flex items-center px-6 py-2 mt-5 text-gray-600 rounded-md hover:bg-opacity-25 hover:bg-gray"

    if(location.pathname === '/Todos') {
        todoPathStyle = 'flex items-center px-6 py-2 mt-5 text-gray-600 rounded-lg text-white hover:bg-opacity-25 hover:bg-gray'
    } else if (location.pathname === `/Dashboard/${user?.username}`) {
        habitPathStyle = 'flex items-center px-6 py-2 mt-5 text-gray-600 rounded-lg text-white hover:bg-opacity-25 hover:bg-gray'
    }

    return (
        <>
            <div className="flex flex-col items-center mt-10">
                <div className="flex justify-center h-28 w-28 rounded-full border-4 border-lightOrange bg-white text-7xl text-center p-4 mb-4">🐲</div>
                <div className=""> 
                    <p className="text-xl tracking-wide font-light text-center capitalize">{user?.username}</p>
                </div>
            </div>
            
            <div className="flex flex-col mt-5">
                <Link to={`/Dashboard/${user?.username}`} className={habitPathStyle} >
                    <MdWork className="text-xl"/>  
                    <span className='pl-2 font-normal tracking-wide text-lg'>Habits</span>
                </Link>
            
                <Link to='/Todos' className={todoPathStyle}>
                    <BsCalendarCheckFill className="text-lg"/>
                    <span className='pl-2 font-normal tracking-wide text-lg'>Todos</span>
                </Link>
                
            </div>
        </>
    );
}

export default Menu;