import React, { Component } from "react";


class Contact extends Component {
  render(){
      return (
      <div className="contact" id="contact">
        <h1>Contact</h1>
        <p>
          Thank you for looking at my webpage.<br/>
           I will have more examples of my work in the upcoming weeks. 
        </p>
        <div className="logos">
          <a href="https://www.linkedin.com/in/ethan-benedict-135996156/">
          <img src={require("./icons/in.png")}  alt="in" height="25px" width="25px"/>
          </a>
          <a href="mailto:ethanbenedict.dev@gmail.com">
          <img src="https://img.icons8.com/ios-filled/100/000000/email-sign.png" alt="in" height="25px" width="25px"/>
          </a> 
          <a href="https://github.com/EthanBenedict">
          <img src={require("./icons/github.png")}  alt="in"  height="25px" width="25px"/>
          </a>
        </div>
      </div>
      )
  }
}

export default Contact;