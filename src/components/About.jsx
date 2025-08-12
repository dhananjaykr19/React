import React from 'react'
import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor called");
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount called");
        // This is use for API calls
    }

    render(){
        // console.log("Parent render called");
        return (
            <div>
                <h1>About</h1>
                <h2 className=''>Hii</h2>
                <User  name={"Dhananjay function()"}/> 
                {/* <UserClass name={"Dhananjay class()"}/> */}
            </div>
        )
    }
}


export default About;
/*
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2></h2>
            <User  name={"Dhananjay function()"}/> 
            <UserClass name={"Dhananjay class()"}/>
        </div>
    )
}
*/

// 1:11:00