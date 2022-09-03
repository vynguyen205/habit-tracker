import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_HABIT } from "../../utils/Mutations";

import AuthService from "../../utils/Auth";
import { useAtom } from 'jotai';
import { userAtom } from '../../state'
import { MdDragHandle } from "react-icons/md";


const UpdateHabit = ({singleHabit}) => {
    // const [isChecked, setIsChecked] = useState(false);
    // const [user, setUser] = useAtom(userAtom);
    // const [updateHabit, { error }] = useMutation(UPDATE_HABIT);
    const [selected, setSelected] = useState({});

    const buttonStyle = "h-7 w-7 bg-white shadow-md rounded-full font-light text-xs hover:bg-gray";
    const buttonStyleTog  = "h-7 w-7 bg-gray shadow-md rounded-full font-light text-xs border-2 border-white";

    const buttonToggle = ({target: {name}}) => {
        setSelected(s => ({...s, [name]: !s[name]}));
    }


    // const handleCheck = async (event) => {
    //     event.preventDefault();
    //     // habitId is the id of the todo that is being checked off
    //     const habitId = event.target.dataset.id;
    //     // when checked, update the todo to completed
    //     try {
    //         const { data } = await updateHabit({
    //             variables: {
    //                 habitId: habitId,
    //                 habitCompleted: true
    //             }
    //         })
    //         setUser(data.updateHabit.habitUser)

    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

        return (
            <div className="flex mb-5">
                <div>
                    <button name="Monday" className={selected.Monday ? buttonStyleTog : buttonStyle} onClick={buttonToggle}>M</button>
                </div>
                <div className="ml-12">
                    <button name="Tuesday" className={selected.Tuesday ? buttonStyleTog : buttonStyle} onClick={buttonToggle}>T</button>
                </div>
                <div className="ml-12">
                    <button name="Wednesday" className={selected.Wednesday ? buttonStyleTog : buttonStyle} onClick={buttonToggle}>W</button>
                </div>
                <div className="ml-12">
                    <button name="Thursday" className={selected.Thursday ? buttonStyleTog : buttonStyle} onClick={buttonToggle}>T</button>
                </div>
                <div className="ml-12">
                    <button name="Friday" className={selected.Friday ? buttonStyleTog : buttonStyle} onClick={buttonToggle}>F</button>
                </div>
                <div className="ml-12">
                    <button name="Saturday" className={selected.Saturday ? buttonStyleTog : buttonStyle} onClick={buttonToggle}>S</button>
                </div>
                <div className="ml-12">
                    <button name="Sunday" className={selected.Sunday ? buttonStyleTog : buttonStyle} onClick={buttonToggle}>S</button>
                </div>
            </div>
            // <>
            //     <input
            //         className=""
            //         data-id={singleHabit._id}
            //         type="checkbox" 
            //         onChange={handleCheck} 
            //     />
            // </>
        )
    }

export default UpdateHabit;