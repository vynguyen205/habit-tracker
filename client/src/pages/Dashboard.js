// Import file dependencies
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';

import HabitList from '../components/Habits';
import AddHabit from '../components/Habits/addHabit';
// import { Container } from '@material-ui/core';

// Display landing page
function Dashboard() {
    const { userId } = useParams();
    console.log("params", userId);
    //do lookup now using userId param
    // const [showModal, setShowModal] = useState(false);
    // const [showAddHabit, setShowAddHabit] = useState(false);
    // const [habits, setHabits] = useState([]);
    // const [showAddTodo, setShowAddTodo] = useState(false);
    // const [todos, setTodos] = useState([]);


    // useEffect(() => {
    //     const GetTodos = async () => {
    //         const { data } = await allTodos;
    //         setTodos(data.allTodos);
    //     }

    //     GetTodos()
    // }, [])

    // 



    // // Fetch habits from server
    // const fetchHabits = async () => {
    //     const habitRes = await fetch('/api/habits');
    //     const habitData = await habitRes.json();

    //     return habitData;
    // }

    // // Fetch Tasks
    // const fetchTodos = async () => {
    //     const taskRes = await fetch('/api/tasks');
    //     const taskData = await taskRes.json()

    //     return taskData;
    // }


    return (
        <>
            <div className='flex-column bg-lightOrange h-[100vh] w-[100vw]'>
                <Navbar />
                <div className="flex">
                    <div className='flex flex-col w-[25vw] h-[80vh] px-8 py-8 overflow-y-auto rounded-2xl bg-darkOrange m-20'>
                        <div className='flex flex-col justify-between mt-10'>
                            <Menu />
                        </div>
                    </div>
                    <div>
                        <HabitList />
                        <AddHabit />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;


// Display header with home icon and logout button

// Display side menu

// Display current date

// Display logged in users name

// Todos: button to view all todos

// Habits: button to view all habits

// Tags: button to view all tags

// Display Middle body withing landing page

// Button to add new habit

// Button to add new todo