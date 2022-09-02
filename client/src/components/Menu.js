import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";

import { useAtom } from 'jotai';
import { userAtom } from '../state';


const Menu = () => {
    const [user, setUser] = useAtom(userAtom)
    const location = useLocation();
    let todoPathStyle = "flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
    let habitPathStyle = "flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
    if(location.pathname === '/Todos') {
        todoPathStyle = 'flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md text-white hover:bg-black'
    } else if (location.pathname === `/Dashboard/${user?.username}`) {
        habitPathStyle = 'flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md text-white hover:bg-black'
    }

    return (
        <>
            <aside className=" mt-10">
                <div className="flex items-center justify-center"> 
                    <div className="h-12 w-12 rounded-full bg-white mr-4 text-3xl text-center p-1.5">🐲</div>
                    <p className="text-2xl font-normal text-center mr-2"> Welcome, </p>
                    <p className="text-2xl font-normal text-center capitalize"> {user?.username} !</p>
                   
                </div>
                <ul>
                    <li>
                         <Link to={`/Dashboard/${user?.username}`} className={habitPathStyle} >
                            <span className='flex justify-center items-center px-20 font-normal text-xl'>Habits</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/Todos' className={todoPathStyle}>
                            <span className='px-20 font-normal text-xl'>Todos</span>
                        </Link>
                    </li>

                    {/* <li>
                        <Link to='/Tags' className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200'>
                            <span className='px-20 font-semibold text-2xl'>Tags</span>
                        </Link>
                    </li> */}
                </ul>
            </aside>
        </>
    );
}

export default Menu;