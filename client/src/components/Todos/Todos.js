import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TODO } from "../../utils/Queries";

import "../../App.css";

// const data = [
//     {
//         _id: "1",
//         name: "School",
//         description: "Go to school",
//         userId: "1",
//     },
//     {
//         _id: "2",
//         name: "Shopping",
//         description: "Buy groceries",
//         userId: "1",
//     },
//     {
//         _id: "3",
//         name: "Study",
//         description: "Study for 1 hour",
//         userId: "1",
//     }
// ]

// Show habits for a logged in user
const TodoList = () => {
    const [todoText, setTodoText] = useState('');
    const { data: todos, loading } = useQuery(QUERY_TODO, {
        fetchPolicy: 'no-cache',
        variables: {
            userId: "62fe9cbb970457d5b9eb5e31"
        }
    });

    console.log(todos);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1>Todo List</h1>
                    <ul>
                        {todos?.user?.userTodo?.map((data) =>
                        (<li key={data?._id}>
                            <div>
                                <h3>{data?.todoName}</h3>
                                <p>{data?.todoDescription}</p>
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
