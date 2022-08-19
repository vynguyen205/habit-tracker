import React from 'react';
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
        <div>
            <h1> Groovy </h1>
            <LoginForm />
            {/* <SignupForm /> */}
        </div>
    )
}

export default Home;