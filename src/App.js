

import React from "react";
import { Route ,BrowserRouter, Routes} from 'react-router-dom';


import Header from "./Project/Header";
import LandingPage from "./Project/LandingPage";


import LoginForm from "./Project//Logins/Login";
import RegistrationForm from "./Project/Registration/RegistrationForm";
import Course from "./Project/Course";
import CoursePage from "./Project/StartCoourse";
import StartCourse from "./Project/StartCoourse";
import Course1 from "./Project/Course";


function App() {
  
  

  return (

    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
 
    <Route path = "/" element={<LandingPage/>}></Route>
    <Route path = "/login" element={<LoginForm/>}></Route>
    <Route path = "/registration" element={<RegistrationForm/>}></Route>
    <Route path = "/course" element={<Course1/>}></Route>
   
    <Route path ="/StartCourse/:CourseName" element={<CoursePage/>}></Route>
    <Route path ="/ViewCourse/{course.courseId}" element={<StartCourse/>}></Route>

    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
