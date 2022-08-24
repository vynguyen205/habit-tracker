// TODO: This was copied from the mini project, not sure if we need to include it or not but its here for now
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Habits from './pages/Habits';
import Todos from './pages/Todos';
import Tags from './pages/Tags';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
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
              path="/Dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/Habits"
              element={<Habits />}
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
