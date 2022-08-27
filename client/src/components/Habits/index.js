import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { ADD_HABIT } from '../../utils/Mutations';
import { QUERY_HABITS } from '../../utils/Queries';

import Auth from '../../utils/Auth';
// const data = [
//     {
//         _id: "1",
//         name: "Eat",
//         description: "Eat healthy",
//         tag: "Health & Wellness",
//         userId: "1",
//     },
//     {
//         _id: "2",
//         name: "Sleep",
//         description: "Sleep well",
//         tag: "Health & Wellness",
//         userId: "1",
//     },
//     {
//         _id: "3",
//         name: "Exercise",
//         description: "Exercise regularly",
//         tag: "Health & Wellness",
//         userId: "1",
//     }
// ]


const HabitList = () => {
  const [habitText, setHabitText] = useState('');
  // const [habits, setHabits] = useState([]);
  // query to get all the habits
  const { data: userHabits, loading } = useQuery(QUERY_HABITS, {
    fetchPolicy: 'no-cache',
    variables: {
      userId: "62fe9cbb970457d5b9eb5e31"
    }
  });

  // const habitList = data?.habits || [];

  console.log(userHabits);


// show habits for a logged in user
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>My Habits</h1>
          <ul>
            {userHabits?.user?.userHabit?.map((data) =>
              (<li key={data?._id}>
                <div>
                  <h3>{data?._id}</h3>
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
