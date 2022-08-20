// // see SignupForm.js for comments
import React, { useState } from 'react';

// import Auth from '../utils/auth';

const LoginForm = () => {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

//   setUserFormData({
//     username: '',
//     email: '',
//     password: '',
//   });

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    // const userData = setUserFormData.find((user) => user.username === uname.value);

    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
    return (
        <div className='bg-gradient-to-r p-4 shadow-lg rounded-2xl py-8 from-pink-500 to-violet-500 via-fuchsia-400'>
              <div className="">
                  <h1 >
                      Login 🔐
                  </h1>
              </div>
          </div>
        );
  };
}; 

export default LoginForm;