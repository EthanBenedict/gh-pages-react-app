import React, { Component } from "react";
import { Link } from "react-scroll";

class Navbar extends Component {
  render() {
    return (
      <div className = "navbar">
        <ul className = "nav-list">
            <li className = "nav-item">
                <Link
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Main</Link> 
            </li>
            <li className = "nav-item">
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link>
            </li>
            <li className = "nav-item">
                <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Experience</Link>
            </li>
        </ul>
        <div className="name">
          <a href="https://www.linkedin.com/in/ethan-benedict-135996156/">
          <img src={require("./icons/in.png")}  alt="in" height="30px" width="30px"/>
          </a>
          <a href="mailto:ethanbenedict.dev@gmail.com">
          <img src="https://img.icons8.com/ios-filled/100/000000/email-sign.png" alt="in" height="30px" width="30px"/>
          </a> 
          <a href="https://github.com/EthanBenedict">
          <img src={require("./icons/github.png")}  alt="in"  height="30px" width="30px"/>
          </a>
            <h2>Ethan Benedict</h2>
        </div>
    </div>
    );
  }
}

export default Navbar;