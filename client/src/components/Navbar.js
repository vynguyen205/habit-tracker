import React from 'react';
import { Link } from 'react-router-dom';
import logoutUser from '../components/LogoutUser';
import "../App.css";

function Navbar () {
    return (
      <nav className='flex items-center justify-between flex-wrap bg-lightBlue p-6'>
        <Link to="/Dashboard" className='flex items-center flex-shrink-0 mr-6'>
          <img src={require('../assets/bus.jpeg')} alt='logo' className='w-30 h-20' />
        </Link>
        <button onClickCapture={logoutUser} className='inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-lightBlue hover:bg-white mt-4 md:mt-0'>Logout</button>
      </nav>
    );
}

export default Navbar;
