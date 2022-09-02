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
          <div className="flex-column bg-lightOrange h-[100vh] w-[100vw]">
            <Navbar />
            <div className="flex">
              <div className='flex w-max h-[75vh] px-8 py-8 overflow-y-auto rounded-2xl bg-darkOrange m-20'>
                  <Menu />
              </div>
              <div className="flex flex-col w-[75vw] pr-10">
                <div className='flex flex-row justify-between mt-10 border-b pb-10'>
                  <div className= "flex flex-col mt-10">
                    <div className='text-lg text-black font-light tracking-wide'>{day}</div>
                    <div className="text-xl font-light tracking-wide">{currentDate}</div>
                  </div>
                  <div className='flex items-center mt-10'>
                    <AddTodo />
                  </div>
                </div>
                <div className='flex items-center flex-wrap mt-12'>
                  <TodoList />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    
    export default Todos;
    