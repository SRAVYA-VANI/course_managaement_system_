import React, { Component } from "react";
const url = "https://localhost:44324/api/EnrollCourse"

export class MainData extends Component{
   
    constructor(props){
        super(props);
        this.state={}
      
}
render(){
    return(
        <div>
            <h1>hai</h1>
        </div>
    )
}
componentDidMount(){
    
    fetch(url,{method:'GET'})
    .then((res)=>res.json())
    .then ((data)=>{this.setState({ViewData:data})})
  
    
}
}

export default MainData;
