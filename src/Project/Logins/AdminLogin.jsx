// import React, { useState } from 'react';
// import { Link, Navigate } from 'react-router-dom';
 
// import './AdminLogin.css';

// function AdminLoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [error, setError] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

  

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // Handle regular student login logic here

//     // Redirect to the student dashboard if successful
//     // For example, with React Router:
//     // history.push('/student/dashboard');
//     fetch('https://localhost:44324/api/Account/Login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // If the login is successful, set loggedIn to true
//           setLoggedIn(true);
//         } else {
//           // If the login fails, display an error message
//           setError('Invalid email or password');
//         }
        
      
//       })
//       .catch((error) => {
//         console.error(error);
//         setError('An error occurred');
//       });
//   };

//   return (
//     <div>
     
//     <div className='form1'>
    
//       <div className='container'>
//         {loggedIn ? (
//           <Navigate to="/course" />
//         ) : (
//           <form onSubmit={handleFormSubmit}>
//             <div className='mainforms'>
//              <h1 className='wel'><marquee>WELCOME BACK !</marquee></h1><br></br>
//               <label htmlFor="email">Email:</label>
//               <input type="email" id="email" value={email} onChange={handleEmailChange} />
//             </div>
//             <div>
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//             </div>
            
           
//             {error && <div>{error}</div>}<br></br>
//             <div className='loginbutton'>
              
//             <Link to="/Course1" className='LOGIN'>LOGIN</Link>
//             </div>
//             <br />
            
//           </form>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default AdminLoginForm;

// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import './AdminLogin.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(false);

    const handleLogin = async () => {
        if (email === 'admin@gmail.com' && password === 'Admin@123') {
            // Valid admin login, navigate to the admin page
            navigate('/Course1');
        } else {
            try {
                const response = await axios.post('https://localhost:44324/api/Account/Login', {
                    email,
                    password,
                });

                if (response.status === 200) {
                    // Successful login, navigate to a different page (e.g., user page)
                    setMsg(true);
                } else {
                    // Invalid email or password
                    setMsg(true);
                }
            } catch (error) {
                console.error('Login error:', error);
                setMsg(true);
            }
        }
    }

    return (
        <div className="login-container">
            <div className="main-login-container">
                <div className="icons-container">
                    {/* Add styles or elements for your icons or branding */}
                    <h1>TEACHER LOGIN</h1>
                </div>
                <div className="email-pass">
                    <input className="main-e" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <input className="main-e" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>
                {msg && <p className="error-message">Invalid Email or Password</p>}
                <div className="login-but">
                    <button className="l-button" onClick={() => handleLogin()}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
