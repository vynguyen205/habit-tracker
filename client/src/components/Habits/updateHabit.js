import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_HABIT } from "../../utils/Mutations";

import AuthService from "../../utils/Auth";
import { useAtom } from 'jotai';
import { userAtom } from '../../state'


const UpdateHabit = ({singleHabit}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [user, setUser] = useAtom(userAtom);
    const [updateHabit, { error }] = useMutation(UPDATE_HABIT);

    const handleCheck = async (event) => {
        event.preventDefault();
        // habitId is the id of the todo that is being checked off
        const habitId = event.target.dataset.id;
        // when checked, update the todo to completed
        try {
            const { data } = await updateHabit({
                variables: {
                    habitId: habitId,
                    habitCompleted: true
                }
            })
            setUser(data.updateHabit.habitUser)

        } catch (err) {
            console.error(err)
        }
    }

        return (
            <>
                <input
                    className=""
                    data-id={singleHabit._id}
                    type="checkbox" 
                    onChange={handleCheck} 
                />
            </>
        )
    }

export default UpdateHabit;