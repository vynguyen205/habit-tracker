import React, { useState } from 'react';
import { Form, Button, Alert } from 'tailwindcss';

import { createUser } from '../utils/API';
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
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

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
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
                      />
                  </div>
                  <div>
                      <input
                          type='email'
                          id='email'
                          placeholder='Email'
                      />
                  </div>
                  <div>
                      <input
                          type='password'
                          id='password'
                          placeholder='Password'
                      />
                  </div>
                  <div>
                      <input
                          type='password'
                          id='password'
                          placeholder='Confirm Password'
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