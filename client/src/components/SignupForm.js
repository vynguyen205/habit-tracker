import React, { useState } from 'react';
import { Form, Button, Alert } from 'tailwindcss';
import { ADD_USER } from '../utils/Mutations';
import { useMutation } from '@apollo/client';
import { QUERY } from '../utils/Queries';

import { createUser } from '../utils/API';
import Auth from '../utils/auth';



const SignupForm = () => {
  const [ add_user ] = useMutation(ADD_USER);
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' }); 
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const newUser = add_user (userFormData.username, userFormData.email, userFormData.password);

    if (newUser) {
      
    }

    }

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
          <div>
              <h1>
                  Sign Up
              </h1>

              <form onSubmit={handleFormSubmit}>
                <div>
                      <input
                          type='username'
                          id='username'
                          placeholder='Username'
                          name='username'
                          value={userFormData.username}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div>
                      <input
                          type='email'
                          id='email'
                          placeholder='Email'
                          name='email'
                          value={userFormData.email}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div>
                      <input
                          type='password'
                          id='password'
                          placeholder='Password'
                          name='password'
                          value={userFormData.password}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div>
                      <input
                          type='password'
                          id='password'
                          placeholder='Confirm Password'
                          name='password'
                          value={userFormData.password}
                          onChange={handleInputChange}
                      />
                  </div>

                  <div>
                      <button>
                          Sign Up
                      </button>
                  </div>
              </form>
          </div>
      </div>
);
};

export default SignupForm;