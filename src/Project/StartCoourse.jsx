// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';




// function CoursePage() {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h1>Course Title</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Card>
//             <Card.Img variant="top" src="https://picsum.photos/200/150" />
//             <Card.Body>
//               <Card.Title>Lesson 1</Card.Title>
//               <Card.Text>
//                 This is the content of lesson 1.
//               </Card.Text>
//               <Button variant="primary">View Lesson</Button>
//             </Card.Body>
//           </Card>
//         </Col>
       
//       </Row>
//     </Container>
//   );
// }

// export default CoursePage;


import axios from "axios";
import React, { Component } from "react";
import ViewCourse from "./ViewCourse";


const url = "https://localhost:44324/api/EnrollCourse"
class StartCourse extends Component{
 

  constructor(props){
    super(props);
    this.state={
        ViewData : ""
    }

  }
  
render(){
  return(
   
      <div>
        
         <ViewCourse ViewData = {this.state.CourseData}/>
         
          
      </div>
     
  
  )}
  
  componentDidMount(){
    const { courseId } = this.props.match.params;
  sessionStorage.setItem('MyCourse',courseId)
    

  
    axios.get(`${url}${courseId}`)
    .then((res)=>this.setState({ViewData:res.data}))
      
   
  
  // fetch(url,{method:'GET'})
  // .then((res)=>res.json())
  // .then ((data)=>{this.setState({ViewData:data})})
  }
}
  
  export default  StartCourse;


  