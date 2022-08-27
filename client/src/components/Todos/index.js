import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { QUERY_TODO } from '../../utils/Queries';

import Auth from '../../utils/Auth';

// Show habits for a logged in user
const TodoList = () => {
    const { data: todos, loading } = useQuery(QUERY_TODO, {
        fetchPolicy: 'no-cache',
        variables: {
            userId: "62fe9cbb970457d5b9eb5e31"
        }
    })

    console.log(todos);

    return (
        <>
            {loading ? <p>Loading...</p> : (
                <div>
                    <h1>Todos</h1>
                </div> )}

            {todos?.user?.map((data) => 
            (<h3 key={data?._id}>{data.todoName},
            {data.todoDescription}</h3>)
            )}
        </>
    )
}

export default TodoList;
