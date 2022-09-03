import {useState} from 'react';
import Bus from '../assets/bus.jpeg';
import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY } from '../utils/Queries';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';


const LandingPage = () => {
    return (
        <>
            <div className='h-screen w-screen bg-gradient-to-tr from-darkOrange to-white via-lightOrange'>
                <aside className='flex flex-row items-center justify-start h-full'>
                        <div className='flex items-center justify-start mx-auto text-center'>
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-col items-start'>
                                    <h1 className='font-sans text-darkBlue text-8xl'> Find your </h1>
                                    <h1 className='font-sans text-darkBlue text-9xl font-extrabold'>GROOVE </h1>
                                </div>
                                <div className='flex flex-col'>
                                    <LoginForm />
                                    <SignupForm />
                                </div>
                            </div>
                            <img src={Bus} alt='bus' className='w-full h-90 object-cover' />
                        </div>
                </aside>
            </div>
        </>
    )
}

export default LandingPage;