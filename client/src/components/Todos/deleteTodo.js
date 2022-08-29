// import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_TODO } from "../../utils/Mutations";

// import { useAtom } from 'jotai';
// import { userAtom } from '../../state'

export default function DeleteTodo({singleTodo}) {
    const [removeTodo, { error }] = useMutation(REMOVE_TODO);
    // const [user, setUser] = useAtom(userAtom);
    const handleDelete = async (event) => {
        event.preventDefault();
        // todoId is the id of the todo that is being checked off
        const todoId = event.target.dataset.id;
        // when checked, update the todo to completed
        try {
            const { data } = await removeTodo({
                variables: {
                    todoId: todoId,
                }
            })
            
            window.location.reload();

        } catch (err) {
            console.error(err)
        }
    }
    return (
        <>
            <button className="ml-5" data-id={singleTodo._id} onClick={handleDelete}>x</button>
        </>
    )
}

