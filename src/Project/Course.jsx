// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import CourseDisplay from "./Course1";

// import './Course.css';



// let url = "https://localhost:44324/api/EnrollCourse"
// export class Course extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             CourseData : ""
//         }  
//     }
// render(){
// return(
 
//     <div>   
        
//         {/* {this.state.CourseData} */}
//         <CourseDisplay  listdata = {this.state.CourseData}/>
//     </div>
// )}
// componentDidMount(){
    
//      fetch(url,{method:'GET'})
//      .then((res)=>res.json())
//     //  .then ((res)=>(localStorage.setItem('videoLink',JSON.stringify(res))))
//      .then ((data)=>{this.setState({CourseData:data})})
//     console.log("CourseData"+this.CourseData)
// }
// }

// export default  Course;
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Course.css';
import Header from '../Header';

const Course = () => {
    const [enroll, setEnroll] = useState([]);
    const [id, setId] = useState([]);
    const [searchInput, setSearchInput] = useState(''); // State for search input

    const enrollment = async () => {
        try {
            const { data } = await axios.get("https://localhost:44324/api/FindCourse")
            setEnroll(data)
        } catch (error) {
            console.log(error);
        }
    }

    const side = async () => {
        try {
            const { data } = await axios.get("https://localhost:44324/api/EnrollCourse")
            setId(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        enrollment()
    }, [])

    useEffect(() => {
        side()
    }, [])

    // Handle changes in the search input
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    // Filter courses based on search input
    const filteredCourses = enroll.filter((course) => {
        const courseName = course.courseName.toLowerCase();
        const searchTerm = searchInput.toLowerCase();
        return courseName.includes(searchTerm);
    });

    return (
        <div className='text-center'>
            <Header></Header>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search courses"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
            </div>
            {filteredCourses?.map((c, index) => (
                <div className="card-container" key={index}>
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
                        </div>
                        <div>
                            {id.map((d, key) => {
                                if (c.courseId === d.courseId) {
                                    return (
                                        <Link key={key} to={`/viewCourse/${d.enrollmentId}`} className="btn btn-success">
                                            Start Course
                                        </Link>
                                    )
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Course;
