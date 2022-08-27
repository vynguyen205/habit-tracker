import React, { useState } from 'react';
import "../App.css";
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import AddTodo from '../components/Todos/addTodo';
import TodoList from '../components/Todos';

// Display all habits for a logged in user
function Todos() {
    // const [todos, setTodos] = useState([]);
    // const getTodos = async () => {
    //     const response = await fetch('../../utils/api');
    //     const data = await response.json();
    //     setTodos(data);
    // }

    // React.useEffect(() => {
    //     getTodos();
    // } , []);

    return (
        <>
          <div className="flex-column bg-lightOrange h-[100vh] w-[100vw]">
            <Navbar />
            <div className="flex">
              <div className='flex flex-col w-[25vw] h-[80vh] px-8 py-8 overflow-y-auto rounded-2xl bg-darkOrange m-20'>
                <h2 className='text-2xl font-bold text-center text-dar'>Welcome, --Username--</h2>
                <div className='flex flex-col justify-between mt-10'>
                  <Menu />
                </div>
                <div className='align-center mt-12'>
                  <p>My To Do List</p>
                  <TodoList />
                </div>
              </div>
              <div className='flex flex-col justify-between mt-10'>
                <AddTodo />
              </div>
            </div>
          </div>
        </>
      );
    }
    
    export default Todos;
    