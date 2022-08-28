// import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_HABITS } from '../../utils/Queries';

import AuthService from '../../utils/Auth';
import { useAtom } from 'jotai'
import { userAtom } from '../../state';

const HabitList = () => {
  const [user, setUser] = useAtom(userAtom)
  // console.log(user?.userHabit);

// show habits for a logged in user
  return (
    <>
      {user === null ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>My Habits</h1>
          <ul>
            {user?.userHabit?.map((data) =>
              (<li key={data?._id}>
                <div>
                  <p>{data?.habitName}</p>
                  <p>{data?.habitDescription}</p>
                  <p>{data?.habitCompleted}</p>
                </div>
              </li>)
            )}
          </ul>
        </div>
      )}
    </>
  );
}


// use this to test the habit list
/* <pre>{JSON.stringify(habits, null, 2)}</pre> */
    


export default HabitList;
