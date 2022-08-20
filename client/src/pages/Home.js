import React from 'react';
import ReactDOM from 'react-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY } from '../utils/Queries';
    
//import LoginForm from '../components/LoginForm';
import SignUpContainer from '../components/SignUpContainer';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const Home = () => (
    <MuiThemeProvider>
        <SignUpContainer />
    </MuiThemeProvider>
);


export default Home;