import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_TODO } from "../../utils/Queries";
import { UPDATE_TODO } from "../../utils/Mutations";
import AuthService from "../../utils/Auth";
import Auth from "../../utils/Auth";


const UpdateTodo = () => {
    const [isChecked, setIsChecked] = useState(false);
        
    const [updateTodo, { error }] = useMutation(UPDATE_TODO)

    const handleCheck = async (event) => {
        setIsChecked(event.target.checked);
        console.log(AuthService.getProfile(), "USER TODO");
        console.log(AuthService.getProfile()?.data.userTodo?.map((data) => 
        data?._id))
        

        try {
            const { data } = await updateTodo({
                variables: {
                    todoId: AuthService.getProfile()?.data.userTodo?.map((data) => 
                    data?._id),
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