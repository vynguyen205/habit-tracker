import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import “../App.css”;
// import AuthService from "../utils/Auth";
import { ADD_USER } from "../utils/Mutations";
const SignupForm = () => {
  const [ add_user ] = useMutation(ADD_USER);
  // set initial form state
  const [userFormData, setUserFormData] = useState ({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
   });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const handleInputChange = (event) => {
    console.log("handleInputChange");
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    console.log("handleFormSubmit");
    event.preventDefault();
    const newUser = add_user (userFormData.username, userFormData.email, userFormData.password);
    if (newUser) {
    }
    }
    // try {
    //   const response = createUser(userFormData);
    //   if (!response.ok) {
    //     throw new Error("something went wrong!");
    //   }
    //   const { token, user } = response.json();
    //   console.log(user);
    //   AuthService.login(token);
    // } catch (err) {
    //   console.error(err);
    //   setShowAlert(true);
    // }
    setUserFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
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
                          id="username"
                          placeholder="Username"
                          value={userFormData.username}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div>
                      <input
                          type="email"
                          id="email"
                          placeholder="Email"
                          value={userFormData.email}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div>
                      <input
                          type="password"
                          id="password"
                          placeholder="Password"
                          value={userFormData.password}
                          onChange={handleInputChange}
                      />
                  </div>
                  <div>
                      <input
                          type="password"
                          id="password"
                          placeholder="Confirm Password"
                          value={userFormData.password}
                          onChange={handleInputChange}
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
    )
  };
export default SignupForm;