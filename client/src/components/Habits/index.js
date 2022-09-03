import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_HABITS } from '../../utils/Queries';

import UpdateHabit from './updateHabit';
import DeleteHabit from './deleteHabit';
import AuthService from '../../utils/Auth';

// import { useAtom } from 'jotai';
// import { userAtom } from '../../state';

const HabitList = () => {
  // const [user, setUser] = useAtom(userAtom)
  // const [showDescription, setShowDescription] = useState(false)


  const { data: userHabits, loading } = useQuery(QUERY_HABITS, {
    variables: {
      userId: AuthService.getProfile().data._id,
    }
  });
  // console.log("user habit data", userHabits);

  const habits = userHabits?.user?.userHabit || []

  // show habits for a logged in user
  return (
    <>
        <div className="flex">
          <ul>
            {habits?.map((data) =>
            (<li key={data?._id} className="flex flex-col items-start">
              <div className="flex justify-center items-center py-1 mb-3">
                <div className="flex">
                  <p className="ml-1 tracking-wide text-2xl">{data?.habitName}</p>
                </div>
                <DeleteHabit singleHabit={data} />
              </div>
              <UpdateHabit singleHabit={data} />
            </li>
            ))}
          </ul>
        </div>
    </>
  );
};

export default HabitList;