// import React from "react";
// import "./Course.css";
// import { Link } from "react-router-dom";

// const url = "https://localhost:44324/api/Courses";

// function App() {
//   const courses = [
//     {
//       id: 1,
//       title: "REACT JS",
//       image: "data:image/png;base64,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",
//       description: "Learn the basics of React and build your first app",
     
//     },
//     {
//       id: 2,
//       title: "JAVA SCRIPT",
//       image: "data:image/jpeg;base64,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",
//       description: "Learn how to use React Hooks to manage state and side effects",
     
//     },
//     {
//       id: 3,
//       title: "MICROSOFT.NET",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_wQP1X4DnNci38ZytIlMi4VVLJhanoIsFxw&usqp=CAU",
//       description: "Learn how to add routing to your React app",
     
//     },
//     {
//       id:4,
//       title:"WEB-API",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiZ2S068TWcQx-CKfQLUb_eu2hw2UvACdCA&usqp=CAU",
//       description: "learn how to connect your frontend and backend"
//     },
  
//   ];

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1  className="App-title" >Welcome to the Course Management System</h1>
//       </header>
//       <div className="card-container">
//         {courses.map((course) => (
//           <div className="card" key={course.id}>
            
//             <div className="card-body">
//               <h2 className="card-title">{course.title}</h2>
//               <img src={course.image} alt={course.title} />
//               <br></br><br></br>
//               <p className="card-description">{course.description}</p>
//               <div className="card-footer">
//                 <span className="card-price">{course.price}</span>
//                 <br></br>
               
//                 {/* <button className="btn btn-success">Enroll Now</button> */}
//                 <Link to = "/StartCourse" className="btn btn-success">Course Registration</Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//     </div>
//   );
//  }

// export default App;


import React, { Component } from "react";
import CourseDisplay from "./Course1";
import './Course.css';


const url = "https://localhost:44324/api/FindCourse"
class Course1 extends Component{
    constructor(props){
        super(props);
        this.state={
            CourseData : ""
        }

       
    }


render(){
return(
 
    <div>
      
       <CourseDisplay  listdata = {this.state.CourseData}/>
    
       
       
        
    </div>
   

)}

componentDidMount(){
 

    fetch(url,{method:'GET'})
    .then((res)=>res.json())
    .then ((data)=>{this.setState({CourseData:data})})
    console.log("CourseData"+this.CourseData)
}
}

export default  Course1;
