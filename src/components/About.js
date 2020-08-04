import React, { Component } from "react";

class About extends Component {
  render(){
    return (
    <div className="about">
        <h1>About Me</h1>
            <div className="bio">
                <p className="p1">
                Have a passion for technology and the outdoors<br/> 
                Self-motivated individual seeking more experience in front-end development<br/>
                Located right outside of Philadelphia, PA<br/>
                Currently studying Computer Science, Statistics, and Mathematics at Misericordia University<br/>
                Captain of the Misericordia University Men's Soccer Team and member of the E-Sports Team<br/>
                Have traveled to eleven National Parks throughout the U.S.<br/>
                Use free time to enjoy action sports including rock climbing, trail running, and board activities<br/>
                </p>
                <img src={require("./icon3.jpg")} alt="icon" height="175px" width="225px"/>
                <p className="p2">
                1 Corinthians 10:31
                </p>
            </div>
    </div>
    )
  }
}

export default About;