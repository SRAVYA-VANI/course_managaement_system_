import React from "react";
import { Link } from "react-router-dom";

const CourseDisplay = (props)=>{
    const renderdata = ({listdata})=>{
        console.log(listdata)
     if(listdata){
        if(listdata.length>0){
            return listdata.map((course)=>{
                return (
                 
      //                   <div className="App">
                        
      // <header className="App-header">
      //   <h1  className="App-title" >Welcome to the Course Management System</h1>
      // </header>
      <div className="card-container">
      
            
            <div className="card" key={course.id}>
            
            <div className="card-body">
            <b> <h1 className="card-title">{course.courseName}</h1></b>
           <div className="imagediv">
              <img src={course.courseImageLink} alt="" />
              </div>
              <br></br><br></br>
              {/* <h1 className="card-description">{course.author}</h1>
              */}
               
                {/* <button className="btn btn-success">Enroll Now</button> */}
                <Link to = {`/ViewCourse/${course.courseId}`} className="btn btn-success">Course Registration</Link>
              </div>
            </div>
          </div>
          
         
        
        
      
 
    // </div>
                )
            })
        }
        else{
            return(
                <div>
                    <h2>no data1</h2>
                </div>
            )
        }
     }  
     else{
        return(
            <div>
                <h2>No data</h2>
            </div>
        )
     }

        
    }
    return(
        <div>
          <header className="App-header">
           <h1  className="App-title" >Welcome to the Course Management System</h1></header>
            {renderdata(props)}
           
            
        </div>
    )
}

export default  CourseDisplay;
