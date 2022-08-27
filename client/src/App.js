// TODO: This was copied from the mini project, not sure if we need to include it or not but its here for now
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
// import Habits from './pages/Habits';
import Todos from './pages/Todos';
import Tags from './pages/Tags';
import './App.css';
import Auth from './utils/Auth';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Auth.getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/Dashboard/:username"
              element={<Dashboard />}
            />
            <Route
              path="/Todos"
              element={<Todos />}
            />
            <Route
              path="/Tags"
              element={<Tags />}
            />
            {/* <Route
              path="*"
              element={<NotFound />}
            /> */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
