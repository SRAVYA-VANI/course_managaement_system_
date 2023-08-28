// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './Login.css';

// const RegistrationForm = () => {
// //   const [fullfirstName, setFullfirstName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [errors, setErrors] = useState({});
// //   const Navigate = useNavigate();

// //   const validateForm = () => {
// //     let errors = {};
// //     let isValid = true;
// //     if (!fullfirstName) {
// //       errors.fullfirstName = "Please enter your full firstName";
// //       isValid = false;
// //     }
// //     if (!email) {
// //       errors.email = "Please enter your email";
// //       isValid = false;
// //     }
// //     if (email.length > 0) {
// //       if (!/\S+@\S+\.\S+/.test(email)) {
// //         errors.email = "Please enter a valid email address";
// //         isValid = false;
// //       }
// //     }
// //     if (!password) {
// //       errors.password = "Please enter a password";
// //       isValid = false;
// //     }
// //     if (password.length > 0) {
// //       if (password.length < 6) {
// //         errors.password = "Password must be at least 6 characters long";
// //         isValid = false;
// //       }
// //     }
// //     if (!confirmPassword) {
// //       errors.confirmpassword = "Please confirm your password";
// //       isValid = false; 
// //     }
// //     if (confirmPassword.length > 0) {
// //       if (password !== confirmPassword) {
// //         errors.confirmpassword = "Passwords do not match";
// //         isValid = false;
// //       }
// //     }
// //     setErrors(errors);
// //     return isValid;
// //   };

// //   const[data,setData]=useState({
// //     "firstfirstName": '',
// //     "email": '',
// //     "password": '',
// //     "confirmPassword":'',
// // });
// // const handleInputChange=event=>{
// //     setData({
// //         ...data,
// //         [event.target.firstName]:event.target.value
// //     });
// // };

// //   const handleSubmit = data => {
// //     data.preventDefault();
// //     console.log('data after submit',data)
// //         fetch('https://localhost:44324/api/Account/signup',{
// //             method:'POST',
// //             headers:{
// //                 'Content-Type':'application/json'
// //             },
// //             body:JSON.stringify(data)
// //         }).then(Response=>Response.json())
// //         // console.log(Response.json())})
// //          .then(data=>{
// //              console.log('Success:',data);
// //              setData({
// //                  firstfirstName:'',
// //                  email:'',
// //                  password:'',
// //                  confirmPassword:'',
// //              })
// //           })
        
        
// //     if (validateForm()) {
// //       console.log(`firstName: ${fullfirstName}\nEmail: ${email}\nPassword: ${password}`);
// //       Navigate("/login", { replace: false });
// //     } else {
// //       console.log(`${errors.password}`);
// //  }
// // };







//   return (
//     <form onSubmit={handleSubmit} classfirstName="container" style={{ backgroundImage: "linear-gradient(270deg,white,lightpink,white)" }}>
//         <h1 classfirstName="a">Registration Form</h1>
//   <div classfirstName="form-group">
//     <label htmlFor="fullfirstName">firstName</label>
//     <input
//       type="text"
//       classfirstName={`form-control ${errors.fullfirstName ? "is-invalid" : ""}`}
//       id="fullfirstName"
//       placeholder="Enter full firstName"
//       value={fullfirstName}
//       onChange={(event) => setFullfirstName(event.target.value)}
//       required
//     />
//     {errors.fullfirstName && (
//       <div classfirstName="invalid-feedback">{errors.fullfirstName}</div>
//     )}
//   </div>

//   <div classfirstName="form-group">
//     <label htmlFor="email">Email address</label>
//     <input
//       type="email"
//       classfirstName={`form-control ${errors.email ? "is-invalid" : ""}`}
//       id="email"
//       placeholder="Enter email"
//       value={email}
//       onChange={(event) => setEmail(event.target.value)}
//       required
//     />
//     {errors.email && <div classfirstName="invalid-feedback">{errors.email}</div>}
//   </div>

//   <div classfirstName="form-group">
//     <label htmlFor="password">Password</label>
//     <input
//       type="password"
//       classfirstName={`form-control ${errors.password ? "is-invalid" : ""}`}
//       id="password"
//       placeholder="Password"
//       value={password}
//       onChange={(event) => setPassword(event.target.value)}
//       required
//     />
//     {errors.password && (
//       <div classfirstName="invalid-feedback">{errors.password}</div>
//     )}
//   </div>

//   <div classfirstName="form-group">
//     <label htmlFor="confirmPassword">Confirm Password</label>
//     <input
//       type="password"
//       classfirstName={`form-control ${
//         errors.confirmPassword ? "is-invalid" : ""
//       }`}
//       id="confirmPassword"
//       placeholder="Confirm Password"
//       value={confirmPassword}
//       onChange={(event) => setConfirmPassword(event.target.value)}
//       required
//     />
//     {errors.confirmPassword && (
//       <div classfirstName="invalid-feedback">{errors.confirmPassword}</div>
//     )}
//   </div>

//   <button type="submit" classfirstName="btn btn-primary">
//     Register
//   </button>
// </form>

// )

    
// }
// export default RegistrationForm ;


// import React,{ useState} from "react";
// import { Link } from "react-router-dom";

// export default function PostData(){
//     const[data,setData]=useState({
//         "firstfirstName": '',
//         "lastfirstName": '',
//         "email": '',
//         "password":'',
//         "confirmpassword":'',
//     });
//     const handleInputChange=event=>{
//         setData({
//             ...data,
//             [event.target.firstName]:event.target.value
//         });
//     };
//     // const handleInputChange=event=>{
//     //     setData({
//     //         ...data,
//     //         location:event.target.value
//     //     });
//     //     console.log(data.location)
//     // }
//     const handleSubmit=event=>{
//         event.preventDefault();
//         console.log('data after submit',data)
//         fetch('https://localhost:44324/api/Account/signup',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(data)
//         })
//         .then(Response=>Response.json())
//        // console.log(Response.json())})
//         .then(data=>{
//             console.log('Success:',data);
//             setData({
//                 firstfirstName:'',
//                 lastfirstName:'',
//                 email:'',
//                 password:'',
//                 confirmpassword:'',
//             })
//          })
//          .catch(error=>{
//             console.log('Error:',error)
//          })
//     }

//     return(
//         <form onSubmit={handleSubmit}>           
//              <div classfirstName="form-group">
//                 <label htmlFor="firstfirstName">firstfirstName</label>
//                 <input type="text" firstName="firstfirstName"
//                 value={data.firstfirstName} classfirstName="form-control"
//                 onChange={handleInputChange}></input>
//             </div> 
//             <div classfirstName="form-group">
//                 <label htmlFor="lastfirstName">lastfirstName</label>
//                 <input type="text" firstName="lastfirstName"
//                 value={data.lastfirstName} classfirstName="form-control"
//                 onChange={handleInputChange}></input>
//             </div>
            
//              <div classfirstName="form-group">
//                 <label htmlFor="email">email</label>
//                 <input type="text" firstName="email"
//                 value={data.email} classfirstName="form-control"
//                 onChange={handleInputChange}></input>
//             </div> 

//             <div classfirstName="form-group">
//                 <label htmlFor="password">  password</label>
//                 <input type="text" firstName="password"
//                 value={data.password} classfirstName="form-control"
//                 onChange={handleInputChange}></input>
//             </div> 

//             <div classfirstName="form-group">
//                 <label htmlFor="confirmpassword">  confirmPassword</label>
//                 <input type="text" firstName="confirmpassword"
//                 value={data.confirmpassword} classfirstName="form-control"
//                 onChange={handleInputChange}></input>
//             </div> 

           

//             <div classfirstName="form-group">
//                 {/* <button type="submit" classfirstName="btn btn-success"> Add Student</button> */}
//                 <Link to={"/login"} classfirstName="btn btn-success">Add Student</Link>
//             </div>
//         </form>
//     )
// }

import React, { useState } from 'react';
import "./RegisterForm.css";


function RegisterForm() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handlefirstNameChange = (event) => {
    setfirstName(event.target.value);
  };
  
  const handlelastNamechange = (event) => {
    setlastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleconfirmpasswordchange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();

    fetch('https://localhost:44324/api/Account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // If the registration is successful, display a success message
          alert('Registration successful');
        } else {
          // If the registration fails, display an error message
          setError('An error occurred');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred');
      });
  };

  return (
  

    <div className="register-form-container">
      <form onSubmit={handleButtonClick}>
        <h2>SIGN UP</h2>
        <br></br>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handlefirstNameChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handlelastNamechange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            id="password"
            value={confirmpassword}
            onChange={handleconfirmpasswordchange}
            className="form-control"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="btn btn-primary">
          SIGN UP
        </button>
        
      </form>
    </div>
  );
}

export default RegisterForm;
