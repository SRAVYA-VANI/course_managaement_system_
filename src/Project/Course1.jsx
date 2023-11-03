// // import React from "react";
// // import { Link } from "react-router-dom";
// // let courseId = 0;
// // const CourseDisplay = (props)=>{
// //     const renderdata = ({listdata})=>{
// //         console.log(listdata)
// //      if(listdata){
// //         if(listdata.length>0){
// //             return listdata.map((course)=>{
// //                 courseId=course.courseId
// //                 console.log('courseId='+courseId)
// //                 return (
// //                     <div className="card-container">  
// //                         <div className="card" key={course.id}>
// //                             <div className="card-body">
// //                                  <b> <h1 className="card-title">{course.courseName}</h1></b>
// //                                     <div className="imagediv">
// //                                          <img src={course.courseImageLink} alt="" />
// //                                     </div>
// //                     <br></br><br></br>
// //                         <h2 key={course.courseId}>
// //                              <Link to = {`/viewCourse/${courseId}`} className="btn btn-success">Start Course</Link>
// //                         </h2>
// //                     </div>
// //                         </div>
// //                             </div>
// //                 )
// //             })
// //         }
// //         else{
// //             return(
// //                 <div>
// //                     <h2>no data1</h2>
// //                 </div>
// //             )
// //         }
// //      }  
// //      else{
// //         return(
// //             <div>
// //                 <h2>No data</h2>
// //             </div>
// //         )
// //      }

        
// //     }
// //     return(
// //         <div>
// //           <header className="App-header">
// //            <h1  className="App-title" >Welcome to the Course Management System</h1></header>
// //             {renderdata(props)}
           
            
// //         </div>
// //     )
// // }

// // export default  CourseDisplay;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Course.css";

// let url = 'https://localhost:44324/api/EnrollCourse';


// const CourseDisplay = ({ listdata }) => {
//   const renderdata = () => {
//     if (listdata && listdata.length > 0) {
//       return listdata.map((course) => (
//         <div className="card-container" key={course.id}>
//           <div className="card">
//             <div className="card-body">
//               <h1 className="card-title">{course.courseName}</h1>
//               <div className="imagediv">
//                 <img src={course.courseImageLink} alt="" />
//                 <div className="overlay">
//           <h2 className="desc">{course.description}</h2>
//           </div>
//               </div>
//               <br />
//               <br />
             
//             </div>
//           </div>
          
//           <Link to={`/viewCourse/${course.enrollmentId}`} className="btn btn-success">
//                   Start Course
//                 </Link>
                 
         
//         </div>
//       ));
//     } else {
//       return (
//         <h2>Loading....</h2>
//       );
//     }
    
    
//   };

  
  

//   return (
//     <div>
      
//       {renderdata()}
//     </div>
//   );
// };

// export default CourseDisplay;




// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import './Course.css';


// const Course = () => {
//     const [enroll , setEnroll]= useState([]);
//     const[id, setId] = useState([]);
//     const enrollment = async()=>{
//         try {
//             const{data}=await axios.get("https://localhost:44324/api/FindCourse")
//             setEnroll(data)
            
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     const side = async()=>{
//         try {
//             const{data}=await axios.get("https://localhost:44324/api/EnrollCourse")
//             setId(data)
            
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     useEffect(()=>{
//         enrollment()
        
//     },[])
//     useEffect(()=>{
//         side()
//     },[])
//   return (
//     <div>
//     <div className='text-center'>
//         {enroll?.map((c)=>(
//             <div className="card-container" key={c.id}>
//             <div className="card">
//               <div className="card-body">
//                 <h1 className="card-title">{c.courseName}</h1>
//                 <div className="imagediv">
//                   <img src={c.courseImageLink} alt="" />
//                   <div className="overlay">
//             <h2 className="desc">{c.description}</h2>
//             </div>
//                 </div>
//                 <br />
//                 <br />
                
//               </div>
              
//             </div>
//             <div>
//                 {/* {id.map((d)=>(
//                      <Link to={`/viewCourse/${d.enrollmentId}`} className="btn btn-success">
//                      Start Course
//                    </Link>
//                 ))} */}

              
//             </div>
            
            
//           </div>
//         ))}

          
//     </div>
    

//     <Link to="/enroll">
//         <button className='btn btn-success'>Add course</button>
//         </Link><br></br><br></br>
//         <Link to="/delete">
//                <button className='btn btn-danger'>delete course</button>
//                </Link>  
//     </div>
//   )
// }

// export default Course ;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Course.css';
import Header from '../Header';

const Course = () => {
  const [enroll, setEnroll] = useState([]);
  const [id, setId] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const enrollment = async () => {
    try {
      const { data } = await axios.get("https://localhost:44324/api/FindCourse");
      setEnroll(data);
    } catch (error) {
      console.log(error);
    }
  }
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible)
    }
    
  
  const side = async () => {
    try {
      const { data } = await axios.get("https://localhost:44324/api/EnrollCourse");
      setId(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    enrollment();
  }, []);

  useEffect(() => {
    side();
  }, []);


   
return (
  <div>
  <Header></Header>
 


  <div className="d-flex" id="wrapper">
    <div className={`bg-light border-right ${sidebarVisible ? 'active' : ''}`} id="sidebar">
      <div className="list-group list-group-flush">
        
        {sidebarVisible && (
          <div>
            <Link to="/enroll" className="list-group-item list-group-item-action bg-light">
              Add Course
            </Link>
            <Link to="/delete" className="list-group-item list-group-item-action bg-light">
              Delete Course
            </Link>
            
        

          </div>
        )}
      </div>
    </div>

    <div id="page-content-wrapper">
      <nav className="navbar navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      {/* The rest of your content goes here */}
    </div>
  </div>
  


      <div className='text-center'>
        {enroll?.map((c) => (
          <div className="card-container" key={c.id}>
            <div className="card">
              <div className="card-body">
              <h1 className="card-title">{c.courseName}</h1>
                <div className="imagediv">
                  <img src={c.courseImageLink} alt="" />
                  <div className="overlay">
                    <h2 className="desc">{c.description}</h2>
                  </div>
                </div>
                <br />
                <br />
                
                <div>
                  
                  {id.map((d) => {
                    if (d.courseId === c.id) {
                      return (
                        <Link to={`/viewCourse/${d.enrollmentId}`} className="btn btn-success" key={d.enrollmentId}>
                          view course
                        </Link>
                      );
                    } else {
                      return null; // Render nothing if there's no matching enrollment
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />
    </div>
    
  );
}

export default Course;