import {useState} from 'react';
import Bus from '../assets/bus.jpeg';
import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY } from '../utils/Queries';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';


const Home = () => {
    const [showForm, setShowForm] = useState("");
    return (
        <>
            <div className='h-screen w-screen bg-gradient-to-tr from-darkOrange to-white via-lightOrange'>
                <aside className='overflow-hidden flex flex-row items-center justify-center h-full'>
                        <div className='max-w-xl mx-auto text-center'>
                            <h1 className='font-sans text-darkBlue text-8xl'> Find your </h1>
                            <h1 className='font-sans text-darkBlue text-9xl font-extrabold'>GROOVE </h1>
                            {/* <Link to="../components/LoginForm" className='mt-4 md:mt-8'> */}
                                <button className="btn btn-lg btn-danger" onClick={()=>setShowForm("Login")}>Login</button>
                            {/* </Link> */}
                            {/* <Link to="../components/SignupForm" className='mt-4 md:mt-8'> */}
                                <button className="btn btn-lg btn-danger" onClick={()=>setShowForm("Signup")}>Sign Up</button>
                            {/* </Link> */}
                            <img src={Bus} alt='bus' className='w-full h-70 object-cover' />
                           {showForm === "Signup" && <SignupForm />}
                           {showForm === "Login" && <LoginForm />  }
                        </div>
                </aside>
            </div>
        </>
    )
}

export default Home;