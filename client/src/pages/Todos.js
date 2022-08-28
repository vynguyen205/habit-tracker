import React, { useState } from 'react';
import "../App.css";
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import AddTodo from '../components/Todos/addTodo';
import TodoList from '../components/Todos';
// Display all habits for a logged in user
function Todos() {

    return (
        <>
          <div className="flex-column bg-lightOrange h-[100vh] w-[100vw]">
            <Navbar />
            <div className="flex">
              <div className='flex w-max h-[75vh] px-8 py-8 overflow-y-auto rounded-2xl bg-darkOrange m-20'>
                  <Menu />
              </div>
              <div className="flex flex-col">
                <div className='flex content-end mt-10'>
                  <AddTodo />
                </div>
                <div className='align-center mt-12'>
                  <TodoList />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    
    export default Todos;
    