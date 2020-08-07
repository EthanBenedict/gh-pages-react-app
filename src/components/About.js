import React, { Component } from "react";

class About extends Component {
  render(){
    return (
    <div className="about">
        <h1>About Me</h1>
            <div className="bio">
               
                  <ul>
                    <li>Have a passion for technology and the outdoors</li>
                    <li>Self-motivated individual seeking more experience in front-end development</li>
                    <li>Located right outside of Philadelphia, PA</li>
                    <li>Currently studying Computer Science, Statistics, and Mathematics at Misericordia University</li>
                    <li>Captain of the Misericordia University Men's Soccer Team and member of the E-Sports Team</li>
                    <li>Have traveled to eleven National Parks throughout the U.S.</li>
                    <li>Use free time to enjoy action sports including rock climbing, trail running, and board activities</li>
                </ul>
                
                <img src={require("./profile.jpg")} alt="icon" height="225" width="175"/>
                <p className="p2">
                1 Corinthians 10:31
                </p>
            </div>
    </div>
    )
  }
}

export default About;