import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_TODO, REMOVE_TODO } from "../utils/Mutations";

// import AuthService from "../utils/Auth";
// import { useAtom } from 'jotai';
// import { userAtom } from '../state'


const UpdateTodo = ({singleTodo}) => {
    // const [isChecked, setIsChecked] = useState(false);
    // const [user, setUser] = useAtom(userAtom);
    // const [updateTodo, { error }] = useMutation(UPDATE_TODO);
    const [selected, setSelected] = useState({})

    const  buttonStyle = "h-6 w-6 bg-white shadow-md rounded-full font-light text-xs hover:bg-gray"
    const  buttonStyleTog  = "h-6 w-6 bg-gray shadow-md rounded-full font-light text-xs border-4 border-white"

    const buttonToggle = ({target: {name}}) => {
        setSelected(s => ({...s, [name]: !s[name]}));
    }

    // const handleCheck = async (event) => {
    //     event.preventDefault();
    //     // todoId is the id of the todo that is being checked off
    //     const todoId = event.target.dataset.id;
    //     // when checked, update the todo to completed
    //     try {
    //         const { data } = await updateTodo({
    //             variables: {
    //                 todoId: todoId,
    //                 todoCompleted: true
    //             }
    //         })
    //         setUser(data.updateTodo.todoUser)

    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

        return (
            <div className="flex justify-center">
                <button name="todoCheck" className={selected.todoCheck ? buttonStyleTog : buttonStyle} onClick={buttonToggle}></button>
            </div>

            // <div className="">
            //     <input
            //         data-id={singleTodo._id}
            //         type="checkbox" 
            //         onChange={handleCheck} 
            //         className="p-10"
            //     />
            // </div>
        )
    }

export default UpdateTodo;