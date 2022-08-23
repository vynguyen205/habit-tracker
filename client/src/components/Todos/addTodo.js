// TODO: save new todo to database
// TODO: add new todo to list of todos that are displayed

import React, { useState } from "react";
import "../../App.css";

// Add new todo for a logged in user
function AddTodo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-lightBlue text-white text-3xl active:bg-darkBlue font-bold px-6 py-3 rounded-shadow hover:bg-darkBlue hover:shadow-lg outline-none focus:outline-none rounded-full mr-1 mb-1"
        type="button" onClick={() => setShowModal(true)}>
        +
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 bg-lightBlue border-b border-solid border-white rounded-t ">
                  <h3 className="text-3xl font=semibold">Create Todo</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white opacity-7 h-8 w-8 text-lg block bg-black py-0 rounded-full">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Add todo..."/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Description
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Keep it short and sweet..." />
                  </form>
                </div>
                <div className="flex items-center justify-center p-6 rounded-b">
                  <button
                    className="text-black bg-lightOrange active:bg-darkOrange font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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


export default AddTodo;
