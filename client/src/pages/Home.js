import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY } from '../utils/Queries';
    
import LoginForm from '../components/LoginForm';
// import SignupForm from '../components/SignupForm';


const Home = () => {
    
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            {/* <h1 className="text-indigo-900 p-4 h-12 shadow-lg font-semibold w-full text-center"> Groovy </h1> */}
            <LoginForm />
            {/* <SignupForm /> */}
        </div>
    )
}

export default Home;