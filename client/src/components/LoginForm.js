import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../utils/Mutations';
import { useMutation } from '@apollo/client';

import AuthService from '../utils/Auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({
    email: '',
    password: ''
  });
  // this is navigation to the next page
  let navigate = useNavigate();
  // this is the mutation that will be used to log in a user
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update the state based on what the user types in the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...userFormData }
      });

      AuthService.login(data.login.token);
      
      console.log("FSLDKJFLDSKFJ",data);
      navigate(`/Dashboard/${data.login.user._id}`);
    } catch (err) {
      console.error(`handleForm submit Error log`,err);
    }
    setUserFormData({
      email: '',
      password: ''
    });
  };
  return (
    <div>
      <div>
        <h1>Login🌎</h1>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                htmlFor="email"
                type="email"
                name="email"
                placeholder="Email"
                value={userFormData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                htmlFor="password"
                type="password"
                name="password"
                placeholder="Password"
                value={userFormData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button>Login</button>
            </div>
          </form>
        )}
        {error && <div className="my-3 p-3 text-red">{error.message}</div>}
      </div>
    </div>
  );
};
export default LoginForm;
