import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TODO } from "../../utils/Queries";

import UpdateTodo from "./updateTodo";
import DeleteTodo from "./deleteTodo";
import AuthService from '../../utils/Auth';
// import { useAtom } from 'jotai';
// import { userAtom } from '../../state'

// Show habits for a logged in user
const TodoList = () => {
    // const [user, setUser] = useAtom(userAtom);
    const [showDescription, setShowDescription] = useState(false);
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
    
    const todos = userTodos?.user?.userTodo || []
  
    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="flex">
                    <ul>
                        {todos?.map((data) =>
                        (<li key={data?._id}>  
                            <div className="flex justify-center items-center py-1">
                                <UpdateTodo singleTodo={data}/> 
                                <div className="flex">
                                    <p className="ml-4 text-xl">{data?.todoName}</p>
                                </div>
                                <DeleteTodo singleTodo={data}/>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </>
    );

      // return (
    //     <>
    //         {user === null ? (
    //             <div>Loading...</div>
    //             ) : (
    //             <div className="flex">
    //                 <ul>
    //                     {user?.userTodo?.map((data) => {
    //                         // console.log(data)
    //                         return (<li key={data?._id}>  
    //                             <div className="flex">
    //                                 <UpdateTodo singleTodo={data}/>
    //                                 <div className="flex">
    //                                     <p className="ml-4">{data?.todoName}</p>
    //                                 </div>
    //                             </div>
    //                         </li>
    //                         )})}
    //                 </ul>
    //             </div>
    //             )
    //         }
    //     </>
    // );
}

export default TodoList;
