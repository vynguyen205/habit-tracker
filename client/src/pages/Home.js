import React from 'react';
import Bus from '../assets/bus.jpeg';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY } from '../utils/Queries';

import LoginForm from '../components/LoginForm';
// import SignupForm from '../components/SignupForm';


const Home = () => {
    // const { data, loading } = useQuery(QUERY_USER, {
    //     fetchPolicy: 'no-cache',
    // });

    return (
        <>
            <div className='h-[100vh] w-[100vw] bg-gradient-to-tr from-darkOrange to-white via-lightOrange'>
                <aside className='overflow-hidden flex flex-row items-center justify-center h-full'>
                        <div className='max-w-xl mx-auto text-center'>
                            <h1 className='font-mono text-darkBlue text-8xl'> Find your </h1>
                            <h1 className='font-mono text-darkBlue text-9xl font-extrabold'>GROOVE </h1>
                            <div className='mt-4 md:mt-8'>
                                <LoginForm />
                            </div>
                            {/* <SignupForm /> */}
                            <img src={Bus} alt='bus' className='w-full h-70 object-cover' />
                        </div>
                </aside>
            </div>
        </>
    )
}

export default Home;