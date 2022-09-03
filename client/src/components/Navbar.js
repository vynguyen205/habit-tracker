import React from 'react';
import { Link } from 'react-router-dom';
import logoutUser from '../components/LogoutUser';
import { BiLogOut } from 'react-icons/bi';
import { FiHome } from 'react-icons/fi';

function Navbar() {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-lightBlue p-4'>
      <Link to="/Dashboard/:userId" 
      // className='flex items-center flex-shrink-0 mr-6'
      >
        <FiHome className="text-white text-3xl ml-2 rounded hover:border-transparent hover:text-darkBlue" />
      </Link>
      <div className='flex flex-row justify-center'>
        <h1 className='flex text-4xl py-5 text-white shadow-darkBlue font-bold font-mono'>
          Let's Groove
        </h1>
        <img src={require('../assets/bus.jpeg')} alt='logo' className='flex w-25 h-20' />
      </div>
      <button
        onClickCapture={logoutUser}
        className='flex text-xl px-5 py-3 leading-none rounded text-white border-white hover:border-transparent hover:text-lightBlue hover:bg-white mt-4 md:mt-0'>
        <BiLogOut className='text-xl' />
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
