import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../utils/Mutations';
import { useMutation } from '@apollo/client';
import { useAtom } from 'jotai';
import { userAtom } from '../state';

import AuthService from '../utils/Auth';

const LoginForm = () => {
  const [user, setUser] = useAtom(userAtom);
  const [showForm, setShowForm] = useState(false);
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

      AuthService.login(data?.login.token);
      setUser(data?.login.user);
      navigate(`/Dashboard/${data?.login.user.username}`);

    } catch (err) {
      console.error(`handleForm submit Error log`, err);
    }
    setUserFormData({
      email: '',
      password: ''
    });
  };
  return (
    <>
      <button className="border-2 border-darkBlue rounded-full px-6 py-2 text-3xl text-darkBlue font-normal tracking-wide my-7 shadow-xl hover:bg-darkBlue hover:text-lightOrange focus:outline-none focus:ring focus:ring-lightBlue" 
              onClick={()=>setShowForm("Login")}>Login</button>
    {showForm ? (
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-xl shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none px-10 py-7">
              <div className="flex justify-between">
                <h1 className="flex items-start text-xl font-light tracking-wider">
                    Log In
                </h1>
                <button className="flex border rounded-full px-2" onClick={(() => setShowForm(false))}>
                  <div>x</div>
                </button>
              </div>
              <form className=""
                    onSubmit={handleFormSubmit}>
                  <div className="border-b my-8 w-full">
                      <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={userFormData.email}
                          onChange={handleInputChange}
                          className="px-1 py-2 w-full bg-transparent focus:outline-none focus:border-gray-500 text-base leading-normal"
                      />
                  </div>
                  <div className="border-b mt-8 mb-1 w-full">
                      <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={userFormData.password}
                          onChange={handleInputChange}
                          className="px-1 py-2 w-full bg-transparent focus:outline-none focus:border-gray-500 text-base leading-normal"
                      />
                  </div>
                  <p className="tracking-wider text-sm font-light">Not a member? Sign Up.</p>
                  <div>
                      <button className="border rounded-xl px-8 py-2 mt-9 mb-3 tracking-wider text-sm text-white font-light bg-black hover:bg-darkBlue">
                        <p className="">Log In</p>
                      </button>
                  </div>
              </form>
              {error && <div className="font-light mt-4">{error.message}</div>}
            </div>
          </div>
        </div>
      ) : null}
    </>  
    )
  };
export default LoginForm;
