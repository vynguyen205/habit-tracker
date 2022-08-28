import React, { useState } from "react";
// import { useQuery } from "@apollo/client";
// import { QUERY_TODO } from "../../utils/Queries";

import UpdateTodo from "./updateTodo";
// import AuthService from '../../utils/Auth';
import { useAtom } from 'jotai';
import { userAtom } from '../../state'

// Show habits for a logged in user
const TodoList = () => {
    const [user, setUser] = useAtom(userAtom);
    const [showDescription, setShowDescription] = useState(false);
    // toggle description
    // const toggleDescription = () => {
    //     // show description for only one todo at a time
    //     setShowDescription(!showDescription);
    // }

    
    return (
        <>
            {user === null ? (
                <div>Loading...</div>
                ) : (
                <div className="flex">
                    <ul>
                        {user?.userTodo?.map((data) => {
                            // console.log(data)
                            return (<li key={data?._id}>  
                                <div className="flex">
                                    <UpdateTodo singleTodo={data}/>
                                    <div className="flex">
                                        <p className="ml-4">{data?.todoName}</p>
                                    </div>
                                </div>
                            </li>
                            )})}
                    </ul>
                </div>
                )
            }
        </>
    );
}

export default TodoList;
