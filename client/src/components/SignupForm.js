import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@apollo/client";
// import “../App.css”;
import AuthService from "../utils/Auth";
import { ADD_USER } from "../utils/Mutations";

const SignupForm = () => {
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
        console.log("Singup Token",data);

      AuthService.login(data.addUser.token);
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
    <div>
          <div>
              <h1>
                  Sign Up
              </h1>
              <form onSubmit={handleFormSubmit}>
                <div>
                      <input
                          type="type"
                          name="username"
                          placeholder="Username"
                          value={userFormData.username}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div>
                      <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={userFormData.email}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div>
                      <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={userFormData.password}
                          onChange={handleInputChange}
                      />
                  </div>
                  {/* <div>
                      <input
                          type="password"
                          name="password"
                          placeholder="Confirm Password"
                          value={userFormData.password}
                          onChange={handleInputChange}
                      />
                  </div> */}
                  <div>
                      <button>
                          Submit
                      </button>
                  </div>
              </form>
          </div>
      </div>
    )
  };
export default SignupForm;