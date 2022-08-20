// TODO: save new todo to database
// TODO: add new todo to list of todos that are displayed

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

// Get all habits for a logged in user
function Todos() {
    const [todos, setTodos] = useState([]);    
    const getTodos = async () => {
        const response = await fetch('../utils/api');
        const data = await response.json();
        setTodos(data);
    }

    React.useEffect(() => {
        getTodos();
    } , []);

    // Add new habit to databasea and display it on the page
        const [showModal, setShowModal] = useState(false); 
        const [todo, setTodo] = useState({});
        
        // TODO: additional functionality for todo page 
        // const handleSubmit = async (e) => {     
        //     e.preventDefault();
        //     const response = await fetch('../utils/api', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             name: e.target.name.value,
        //             description: e.target.description.value,
        //             frequency: e.target.frequency.value,
        //             tags: e.target.tags.value
        //         })
        //     });
        //     const data = await response.json();
        //     setHabits([...habits, data]);
        //     setShowModal(false);
        // }
        // const handleClose = () => {
        //     setShowModal(false);
        // }
        // const handleShow = () => {
        //     setShowModal(true);
        // }
        // const handleDelete = async (id) => {
        //     const response = await fetch(`../utils/api/${id}`, {
        //         method: 'DELETE'
        //     });
        //     const data = await response.json();
        //     setHabits(habits.filter(habit => habit.id !== id));
        // }
        // const handleEdit = async (id) => {
        //     const response = await fetch(`../utils/api/${id}`);
        //     const data = await response.json();
        //     setHabits(habits.map(habit => habit.id === id ? data : habit));
        // }


        return (
          <>
           <div>
              <Link to="/Dashboard">🏠</Link>
          </div>
        <div className="flex-column justify-left align-left min-100-vh bg-slate-500">
            <ul>
                {todos.map(habit => (
                    <li key={habit.id}>
                        <a href={`/Todos/${todo.id}`}>{todo.name}</a>
                    </li>
                ))}
            </ul>
        </div>
            <button
              className="bg-blue-200 text-black active:bg-blue-500 
            font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Add New Daily
            </button>
            {showModal ? (
              <>
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-3xl font=semibold">Create Todo</h3>
                        <button
                          className="bg-transparent border-0 text-black float-right"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                            X
                          </span>
                        </button>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                          <label className="block text-black text-sm font-bold mb-1">
                            Title
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                          <label className="block text-black text-sm font-bold mb-1">
                            Description
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                          <label className="block text-black text-sm font-bold mb-1">
                            Tags
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                        </form>
                      </div>
                      <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </>
        );
      };      
        
export default Todos;
