// // see SignupForm.js for comments
// import React, { useState } from 'react';

// // import Auth from '../utils/auth';

// const LoginForm = () => {

//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

  
//   setUserFormData({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = setUserFormData.find((user) => user.username === uname.value);

//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   const renderErrorMessage = (name) =>
//   name === errorMessages.name && (
//     <div className="error">{errorMessages.message}</div>
//   );

//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <input type="text" name="uname" id="username" placeholder='username' required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <input type="password" name="pass" id="password" placeholder="password" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <buttton> Login </buttton>
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         <div className="title"></div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );

//   };

// export default LoginForm;