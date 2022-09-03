// import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { REMOVE_HABIT } from '../../utils/Mutations';
import { QUERY_HABITS } from '../../utils/Queries';

import AuthService from '../../utils/Auth';
import { RiDeleteBin7Line } from 'react-icons/ri';  

// import { useAtom } from 'jotai';
// import { userAtom } from '../../state'

export default function DeleteHabit({ singleHabit }) {
  const [removeHabit, { error }] = useMutation(REMOVE_HABIT);
  // const [user, setUser] = useAtom(userAtom);
  const handleDelete = async (event) => {
    event.preventDefault();
    // habitId is the id of the Habit that is being checked off
    const habitId = event.target.dataset.id;
    // when checked, update the Habit to completed
    try {
      const { data } = await removeHabit({
        variables: {
          userId: AuthService.getProfile().data._id,
          habitId: habitId
        },
        refetchQueries: [
          {
            query: QUERY_HABITS,
            variables: {
              userId: AuthService.getProfile().data._id
            }
          }
        ]
      });

      //   window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <button className="ml-5" data-id={singleHabit._id} onClick={handleDelete}>
        <RiDeleteBin7Line />
      </button>
    </>
  );
}
