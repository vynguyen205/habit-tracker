import React, { useState } from 'react';
import "../App.css";

import { createUser } from '../utils/API';
import AuthService from '../utils/Auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState ({ 
    username: '', 
    email: '', 
    password: '',
    confirmPassword: ''
   });
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
      AuthService.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
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
                          type='type'
                          id='username'
                          placeholder='Username'
                          value={userFormData.username}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div>
                      <input
                          type='email'
                          id='email'
                          placeholder='Email'
                          value={userFormData.email}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div>
                      <input
                          type='password'
                          id='password'
                          placeholder='Password'
                          value={userFormData.password}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div>
                      <input
                          type='password'
                          id='password'
                          placeholder='Confirm Password'
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