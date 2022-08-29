import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { useAtom } from 'jotai';
import { userAtom } from '../state'
// import “../App.css”;
import AuthService from "../utils/Auth";
import { ADD_USER } from "../utils/Mutations";

const SignupForm = () => {
  const [user, setUser] = useAtom(userAtom);
  const [showForm, setShowForm] = useState(false);

  // set initial form state
  const [userFormData, setUserFormData] = useState ({
      username: '',
      email: '',
      password: '',
      // confirmPassword: ''
    });
    let navigate = useNavigate();
    const [ add_user, { error } ] = useMutation(ADD_USER);

  //update the state based on what the user types in the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  //submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
     try {
      const { data } = await add_user({
        variables: { ...userFormData }
        });

      AuthService.login(data.addUser.token);
      setUser(data.addUser.user)
      navigate(`/Dashboard/${data.addUser.user.username}`);

    } catch (err) {
      console.error(err);
    //   setShowAlert(true);
    }

    setUserFormData({
        username: '',
        email: '',
        password: '',
        // confirmPassword: ''
    });
};
  return (
    <>
    <div className='flex flex-col'>
      <button className="border-2 border-darkBlue rounded-full px-6 py-2 text-3xl text-darkBlue font-normal tracking-wide shadow-xl hover:bg-darkBlue hover:text-lightOrange focus:outline-none focus:ring focus:ring-lightBlue" onClick={()=>setShowForm("Signup")}>Sign Up</button>     
    </div>
    {showForm ? (
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-[30%] my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-xl shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none px-10 py-7">
              <div className="flex justify-between">
                <h1 className="flex items-start text-xl font-light tracking-wider">
                    Sign Up
                </h1>
                <button className="flex border rounded-full px-2" onClick={(() => setShowForm(false))}>
                  <div>x</div>
                </button>
              </div>
              <form className=""
                    onSubmit={handleFormSubmit}>
                <div className="border-b mt-9 w-full">
                      <input
                          type="type"
                          name="username"
                          placeholder="Username"
                          value={userFormData.username}
                          onChange={handleInputChange}
                          className="px-1 py-2 w-full bg-transparent focus:outline-none focus:border-gray-500 text-base leading-normal"
                      />
                  </div>
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
                  <p className="tracking-wider text-sm font-light">Already a member? Log in.</p>
                  <div>
                      <button className="border rounded-xl px-8 py-2 mt-9 mb-3 tracking-wider text-sm text-white font-light bg-black hover:bg-darkBlue">
                        <p className="">Create</p>
                      </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>  
    )
  };
export default SignupForm;

{/* <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
<div className="relative w-auto my-6 mx-auto max-w-3xl">
  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
    <div className="flex items-start justify-between p-5 bg-lightBlue border-b border-solid border-white rounded-t ">
      <h3 className="text-3xl font=semibold">Create Habit</h3>
      <button
        className="bg-transparent border-0 text-black float-right"
        onClick={() => setShowModal(false)}
      >
        <span className="text-white opacity-7 h-8 w-8 text-lg block bg-black py-0 rounded-full">
          X
        </span>
      </button>
    </div>
    <div className="relative p-6 flex-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full">
        <label className="block text-black text-sm font-bold mb-1">
          Title
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Add habit..." />
        <label className="block text-black text-sm font-bold mb-1">
          Description
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Keep it short and sweet..." />
        <label className="block text-black text-sm font-bold mb-1">
          Tags
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Choose your tags" />
        <label className="block text-black text-sm font-bold mb-1">
          Repeat
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Daily"/>
      </form>
    </div>
    <div className="flex items-center justify-center p-6 rounded-b">
      <button
        className="text-black bg-lightOrange active:bg-darkOrange font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(false)}
      >
        Save
      </button>
    </div>
  </div>
</div>
</div>
</> */}