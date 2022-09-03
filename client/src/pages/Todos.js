import React, { useState } from 'react';
import "../App.css";
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import AddTodo from '../components/Todos/addTodo';
import TodoList from '../components/Todos';

import moment from 'moment';
// Display all habits for a logged in user
function Todos() {

  const day = moment().format('dddd');
  const currentDate = moment().format('MMMM Do, YYYY');

    return (
        <>
            <div className='flex-column bg-lightOrange h-fit-content w-fit-content'>
            <Navbar />
            <div className="flex">
              <aside className='flex flex-col min-w-[260px] h-[75vh] p-4 overflow-y-auto rounded-3xl bg-darkOrange m-20'>
                  <Menu />
              </aside>
              <div className="flex flex-col w-[75vw] pr-10">
                <div className='flex flex-row justify-between mt-10 border-b border-gray pb-6'>
                  <div className= "flex flex-col mt-10">
                    <div className='text-xl text-black font-light tracking-wide'>{day}</div>
                    <div className="text-2xl font-normaltracking-wide">{currentDate}</div>
                  </div>
                  <div className='flex items-center mt-10'>
                    <AddTodo />
                  </div>
                </div>
                <div className='flex flex-wrap mt-12'>
                  <TodoList />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    
    export default Todos;
    