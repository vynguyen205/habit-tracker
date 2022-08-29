import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_HABITS } from '../../utils/Queries';

import UpdateHabit from './updateHabit';
import DeleteHabit from './deleteHabit';
import AuthService from '../../utils/Auth';
import { useAtom } from 'jotai';
import { userAtom } from '../../state';

export default function HabitList() {
  const [user, setUser] = useAtom(userAtom)
  const [showDescription, setShowDescription] = useState(false)
  // console.log(user?.userHabit);

  const { data: userHabits, loading } = useQuery(QUERY_HABITS, {
    fetchPolicy: 'no-cache',
    variables: {
      userId: AuthService.getProfile().data._id,
    }
  });
  console.log("user habit data", userHabits);

  // show habits for a logged in user
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex">
          <ul>
            {userHabits?.user?.userHabit?.map((data) =>
            (<li key={data?._id}>
              <div className="flex">
                <UpdateHabit singleHabit={data} />
                <div className="flex">
                  <p className="ml-4">{data?.habitName}</p>
                </div>
                <DeleteHabit singleHabit={data} />
              </div>
            </li>
            ))}
          </ul>
        </div>
      )
      }
    </>
  );
};
