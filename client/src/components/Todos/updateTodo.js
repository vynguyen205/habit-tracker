import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_TODO } from "../../utils/Queries";
import { UPDATE_TODO } from "../../utils/Mutations";
import AuthService from "../../utils/Auth";


const UpdateTodo = () => {

    const [isChecked, setIsChecked] = useState(false);
        
    const [updateTodo, { error }] = useMutation(UPDATE_TODO)

    const handleCheck = async (event) => {
        setIsChecked(event.target.checked);

        try {

            const { data } = await updateTodo({
                variables: {
                    todoId: AuthService.getProfile().data.userTodo[{}]._id,
                    todoCompleted: isChecked
                }
            });
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <input
                className=""
                type="checkbox" 
                onChange={handleCheck} 
            />
        </>
    )

}

export default UpdateTodo;