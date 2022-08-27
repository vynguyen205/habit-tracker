// import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_HABITS } from '../../utils/Queries';

// import Auth from '../../utils/Auth';

const HabitList = () => {
  // const [habitText, setHabitText] = useState('');
  // const [habits, setHabits] = useState([]);
// query to get all the habits
  const { data: habits, loading } = useQuery(QUERY_HABITS, {
    fetchPolicy: 'no-cache',
    variables: {
      userId: "62fe9cbb970457d5b9eb5e31",
    }
  });

  // const habitList = data?.habits || [];

  console.log('data', habits);

  // const { allTodos } = useQuery(QUERY_TODO, {
  //     fetchPolicy: 'no-cache'
  // });

  // eEffect(() => {us
  //   const GetHabits = async () => {
  //       const _data =  data;
  //       setHabits(_data.habitData.allHabits);
  //   }
  //   GetHabits();
  // }, []);


//   const [addHabit, { error }] = useMutation(ADD_HABIT, {
//     update(cache, { data: { addHabit } }) {
//       try {
//         const { habits } = cache.readQuery({ query: QUERY_HABITS });

//         cache.writeQuery({
//           query: QUERY_HABITS,
//           data: { habits: [ADD_HABIT, ...habits] },
//         });
//       } catch (e) {
//         console.error(e);
//       }
//     },
//   });
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addHabit({
//         variables: {
//           habitName,
//           habitDescriptions,
//           habitUser: Auth.getProfile().data.username,
//         },
//       });

//       setHabitText('');
//     } catch (err) {
//       console.error(err);
//     }
//   };
  
//   const handleChange = (event) => {
//     const { name } = event.target;

//     if (name === 'habitText') {
//       setHabitText(value);
//     }
//   };

  return (
      <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Habits</h1>
        </div>)}
      {/* <pre>{JSON.stringify(habits, null, 2)}</pre> */}
          {habits?.user?.userHabit?.map((data) => 
          (<h3 key={data?._id}>{data?.habitName},
          {data?.habitDescription}</h3>)
          )}
      </>
  )
}

// Show habits for a logged in user

export default HabitList;
