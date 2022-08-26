import React, { useState } from "react";

import { loginUser } from '../utils/API';
import AuthService from '../utils/Auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser(userFormData);

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
    });
  };

  return (
      <div>
            <div>
                <h1>
                    Login
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input htmlFor='email'
                            type='email'
                            id='email'
                            placeholder='Email'
                        />
                    </div>
                    <div>
                        <input htmlFor='password'
                            type='password'
                            id='password'
                            placeholder='Password'
                        />
                    </div>

                    <div>
                        <button>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
  );
};

export default LoginForm;