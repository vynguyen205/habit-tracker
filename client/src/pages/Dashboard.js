// import React, { useState, useEffect } from 'react';
// // import { Jumbotron, Container, CardColumns, Card, Button } from 'tailwindcss';

//  import { getMe, saveHabit, saveTodo, deleteHabit } from '../utils/API';
//  import { AuthService } from '../utils/Auth';
// // import { ADD_HABIT, ADD_TODO} from '../utils/Mutations';
// // import { QUERY_USER, QUERY_HABITS, QUERY_TODO, QUERY_TODO_USER, QUERY_USER_HABITS } from '../utils/Queries';


// const Dashboard = () => {
//   const [userData, setUserData] = useState({});

//   // use this to determine if `useEffect()` hook needs to run again
//   const userDataLength = Object.keys(userData).length;

//   useEffect(() => {
//     const getUserData = async () => {
//       try {
//         const token = AuthService.loggedIn() ? AuthService.getToken() : null;

//         if (!token) {
//           return false;
//         }

//         const response = await getMe(token);

//         if (!response.ok) {
//           throw new Error('something went wrong!');
//         }

//         const user = await response.json();
//         setUserData(user);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     getUserData();
//   }, [userDataLength]);

// };


// export default Dashboard;