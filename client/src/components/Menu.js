import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_USER } from "../utils/Queries";
import AuthService from "../utils/Auth";

const Menu = () => {

    const { data: userData, loading } = useQuery(QUERY_USER, {
        fetchPolicy: 'no-cache',
        variables: {
            userId: AuthService.getProfile().data._id,
        }
    });
    // get username to display on the menu
    const username = userData?.user?.username;



    return (
        <>
            <aside className="mt-10">
                <div className="flex items-center justify-center">
                    <p className="text-2xl font-bold text-center mr-2"> Hi, </p>
                    <p className="text-2xl font-bold text-center capitalize"> {username} !</p>
                </div>
                <ul>
                    <li>
                         <Link to={`/Dashboard/${username}`} className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200' >
                            <span className='px-20 font-semibold text-2xl'>Habits</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Todos" className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200'>
                            <span className='px-20 font-semibold text-2xl'>Todos</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Tags" className='flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200'>
                            <span className='px-20 font-semibold text-2xl'>Tags</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    );
}

export default Menu;