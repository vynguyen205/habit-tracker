// Import file dependencies
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import HabitList from '../components/Habits/Habits';
import TodoList from '../components/Todos/Todos';
import AddHabit from '../components/Habits/addHabit';
import AddTodo from '../components/Todos/addTodo';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

// Display landing page
function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    const [showAddHabit, setShowAddHabit] = useState(false);
    const [habits, setHabits] = useState([]);
    const [showAddTodo, setShowAddTodo] = useState(false);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getHabits = async () => {
            const habitsFromServer = await fetchHabits();
            setHabits(habitsFromServer);
        }
        getHabits();
    }, []);

    useEffect(() => {
        const getTodos = async () => {
            const todosFromServer = await fetchTodos()
            setTodos(todosFromServer)
        }

        getTodos()
    }, [])


    // Fetch habits from server
    const fetchHabits = async () => {
        const habitRes = await fetch('/api/habits');
        const habitData = await habitRes.json();

        return habitData;
    }

    // Fetch Tasks
    const fetchTodos = async () => {
        const taskRes = await fetch('/api/tasks');
        const taskData = await taskRes.json()

        return taskData;
    }


    return (
        <>
            <div className='flex-column bg-lightOrange h-[100vh] w-[100vw]'>
                <Navbar />
                <div>
                    <Menu />
                </div>
                <div>
                    <AddHabit onAdd={() => setShowAddHabit(!showAddHabit)} showAdd={showAddHabit} />
                    <AddTodo onAdd={() => setShowAddTodo(!showAddTodo)} showAdd={showAddTodo} />
                    
                    {showAddHabit && <AddHabit onAdd={AddHabit} />}
                    {habits.length > 0 ? (
                        <HabitList habits={habits} />
                    ) : (
                            <h3>No habits yet</h3>
                    )}

                    {showAddTodo && <AddTodo onAdd={AddTodo} />}
                    {todos.length > 0 ? (
                        <TodoList todos={todos} />
                    ) : (
                            <h3>No todos yet</h3>
                    )}
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