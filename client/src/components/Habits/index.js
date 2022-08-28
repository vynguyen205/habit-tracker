import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_HABITS } from '../../utils/Queries';
import AuthService from '../../utils/Auth';
import { useAtom } from 'jotai'
import { userAtom } from '../../state';
import UpdateHabit from './updateHabit';
import DeleteHabit from './deleteHabit';

const HabitList = () => {
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
            {user?.userHabit?.map((data) =>
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
}

  /* <pre>{JSON.stringify(habits, null, 2)}</pre>  */
  // use this to test the habit list
  //     <>
  //       {user === null ? (
  //         <div>Loading...</div>
  //       ) : (
  //         <div className='flex'>
  //           <ul>
  //             {user?.userHabit?.map((data) => {
  //               return (<li key={data?._id}>
  //                 <div className='flex'>
  //                   <p>{data?.habitName}</p>
  //                   <p>{data?.habitDescription}</p>
  //                   <p>{data?.habitCompleted}</p>
  //                 </div>
  //               </li>
  //               )})}
  //           </ul>
  //         </div>
  //       )}
  //     </>
  //   );
  // }

  export default HabitList;