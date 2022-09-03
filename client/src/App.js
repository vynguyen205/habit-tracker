// TODO: This was copied from the mini project, not sure if we need to include it or not but its here for now
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Provider , useAtom, useSetAtom} from 'jotai';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
// import Habits from './pages/Habits';
import Todos from './pages/Todos';
import Tags from './pages/Tags';
import './App.css';
import Auth from './utils/Auth';
import { userAtom } from './state';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Auth.getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  headers: {
    authorization: `Bearer ${Auth.getToken()}`
  }
});

function App() {
  const setUser = useSetAtom(userAtom)
  const nav = useNavigate();
  useEffect(()=> {
    //state rehydration process, syncing with localStorage, etc.
    const profile = Auth.getProfile();
    //if there's no token, take them to login page
    // console.log("profile", profile);
    if(!profile) return nav('/');
    setUser(profile.data)
    //if token, but expired, take them login page
    //if token, and still valid, refersh token OPTIONAL
  }, [])
  //whenever app loads, extract token from localStorage, if token expired, take them to login again, otherwise, refresh the token.
  //after token is validated/refreshed 
  return (
    <ApolloProvider client={client}>
          <div>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/Dashboard/:username" element={<Dashboard />} />
              <Route path="/Todos" element={<Todos />} />
              <Route path="/Tags" element={<Tags />} />
            </Routes>
          </div> 
    </ApolloProvider>
  );
}

export default App;
