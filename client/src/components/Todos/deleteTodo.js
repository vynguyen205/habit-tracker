// import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_TODO } from "../../utils/Mutations";
import { QUERY_TODO } from "../../utils/Queries";
import AuthService from "../../utils/Auth";
import { RiDeleteBin7Line } from "react-icons/ri";

// import { useAtom } from 'jotai';
// import { userAtom } from '../../state'

export default function DeleteTodo({singleTodo}) {
    // const [user, setUser] = useAtom(userAtom)
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
                },
                refetchQueries: [
                    {
                      query: QUERY_TODO,
                      variables: {
                        userId: AuthService.getProfile().data._id
                      }
                    }
                  ]
            })

            // setUser(data?.removeTodo?.todoUser)

        } catch (err) {
            console.error(err)
        }
    }
    return (
        <>
            <button className="ml-5" data-id={singleTodo._id} onClick={handleDelete}>
                <RiDeleteBin7Line />
            </button>
        </>
    )
}

