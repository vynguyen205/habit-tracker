import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TODO } from "../../utils/Queries";

// Show habits for a logged in user
const TodoList = () => {
    const [todoText, setTodoText] = useState('');
    const { data: userTodos, loading } = useQuery(QUERY_TODO, {
        fetchPolicy: 'no-cache',
        variables: {
            userId: "62fe9cbb970457d5b9eb5e31"
        }

    });

    console.log(userTodos);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1>Todo List</h1>
                    <ul>
                        {userTodos?.user?.userTodo?.map((data) =>
                        (<li key={data?._id}>
                            <div>
                                <h3>{data?.todoName}</h3>
                                <p>{data?.todoDescription}</p>
                                <p>{data?.todoCompleted}</p>
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
