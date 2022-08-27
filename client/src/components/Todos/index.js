import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TODO } from "../../utils/Queries";

import UpdateTodo from "./updateTodo";
import AuthService from '../../utils/Auth';

// Show habits for a logged in user
const TodoList = () => {

    const [showDescription, setShowDescription] = useState(false);

    // toggle description
    const toggleDescription = () => {
        // show description for only one todo at a time
        setShowDescription(!showDescription);
    }

    const { data: userTodos, loading } = useQuery(QUERY_TODO, {
        fetchPolicy: 'no-cache',
        variables: {
            userId: AuthService.getProfile().data._id,
        }

    });
    console.log("user todo data", userTodos);


    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="flex">
                    <ul>
                        {userTodos?.user?.userTodo?.map((data) =>
                        (<li key={data?._id}>  
                            <div className="flex">
                                <UpdateTodo />
                                <div className="flex">
                                    <p className="ml-4">{data?.todoName}</p>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </>
    );
}

export default TodoList;
