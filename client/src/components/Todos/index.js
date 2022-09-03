import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TODO } from "../../utils/Queries";

import UpdateTodo from "../../pages/updateTodo";
import DeleteTodo from "./deleteTodo";
import AuthService from '../../utils/Auth';
// import { useAtom } from 'jotai';
// import { userAtom } from '../../state'

// Show habits for a logged in user
const TodoList = () => {
    // const [user, setUser] = useAtom(userAtom);
    // const [showDescription, setShowDescription] = useState(false);
    // toggle description
    // const toggleDescription = () => {
    //     // show description for only one todo at a time
    //     setShowDescription(!showDescription);
    // }

     const { data: userTodos, loading } = useQuery(QUERY_TODO, {
        variables: {
            userId: AuthService.getProfile().data._id,
        }

    });
    
    const todos = userTodos?.user?.userTodo || [];
  
    return (
        <>
            <div className="flex text-lg">
                <ul>
                    {todos?.map((data) =>
                    
                    (<li key={data?._id}>  
                        <div className="flex items-center">
                            <UpdateTodo singleTodo={data}/> 
                            
                            <p className="ml-4 text-2xl">{data?.todoName}</p>
                            <DeleteTodo singleTodo={data}/>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;
