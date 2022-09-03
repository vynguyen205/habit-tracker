import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_TODO, REMOVE_TODO } from "../../utils/Mutations";

import AuthService from "../../utils/Auth";
import { useAtom } from 'jotai';
import { userAtom } from '../../state'


const UpdateTodo = ({singleTodo}) => {
    // const [isChecked, setIsChecked] = useState(false);
    const [user, setUser] = useAtom(userAtom);
    const [updateTodo, { error }] = useMutation(UPDATE_TODO);

    const handleCheck = async (event) => {
        event.preventDefault();
        // todoId is the id of the todo that is being checked off
        const todoId = event.target.dataset.id;
        // when checked, update the todo to completed
        try {
            const { data } = await updateTodo({
                variables: {
                    todoId: todoId,
                    todoCompleted: true
                }
            })
            setUser(data.updateTodo.todoUser)

        } catch (err) {
            console.error(err)
        }
    }

        return (
            <div className="">
                <input
                    data-id={singleTodo._id}
                    type="checkbox" 
                    onChange={handleCheck} 
                    className="p-10"
                />
            </div>
        )
    }

export default UpdateTodo;