import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../../utils/Mutations";
import { useAtom } from 'jotai'
import { userAtom } from '../../state';

import AuthService from "../../utils/Auth";

// Add new todo for a logged in user
const AddTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useAtom(userAtom)
  // get todo name and description from form
  const [todoFormData, setTodoFormData] = useState({
    todoName: "",
    todoDescription: "",
  });
    // function to use mutation to add new todo
  const [addTodo, { error }] = useMutation(ADD_TODO)
  // function to handle form input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTodoFormData({ ...todoFormData, [name]: value });
  }

  // function to handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add todo to database
      const { data } = await addTodo({
        // variables to pass to mutation
        variables: {userId: AuthService.getProfile().data._id, ...todoFormData},
        
      });
      
      setUser(data?.addTodo?.todoUser)
      
    } catch (err) {
      console.error(err);
    }

    setTodoFormData({
      todoName: "",
      todoDescription: "",
    });

    setShowModal(false);

  }

  return (
    <>
      <button
        className="bg-lightBlue text-white fixed bottom-14 right-14 text-3xl active:bg-darkBlue font-bold px-5 py-3 rounded-shadow hover:bg-darkBlue hover:shadow-lg outline-none focus:outline-none rounded-full mr-1 mb-1"
        type="button" onClick={() => setShowModal(true)}>
        +
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 bg-lightBlue border-b border-solid border-white rounded-t-2xl ">
                  <h3 className="text-2xl tracking-wider font=semibold">Create Todo</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >
                    <span className="text-white opacity-7 h-8 w-8 text-lg block bg-black py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full" 
                          onSubmit={handleFormSubmit}>
                      <label className="block text-black text-sm font-bold mb-1">
                        Title
                      </label>
                      <input 
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        type="text"
                        name="todoName" 
                        placeholder="Add todo..."
                        value={todoFormData.todoName}
                        onChange={handleInputChange}
                        />
                      <label className="block text-black text-sm font-bold mb-1">
                        Description
                      </label>
                      <input 
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      type="text"
                      name="todoDescription"
                      placeholder="Keep it short and sweet..." 
                      value={todoFormData.todoDescription}
                      onChange={handleInputChange}
                      />
                    <div className="flex items-center justify-center p-6 rounded-b">
                      <button
                        className="text-black bg-lightOrange active:bg-darkOrange font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                      {error && <div className="my-3 p-3 text-red">{error.message}</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};


export default AddTodo;
