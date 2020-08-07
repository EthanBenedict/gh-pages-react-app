import React, { Component } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 

class Experience extends Component {
  render(){
    return (
    <div className="experience">
        <h1>Experience</h1>
        <Accordion >
            <AccordionItem>
                <AccordionItemHeading >
                    <AccordionItemButton>
                        Bachelor of Science in Computer Science - Misericordia University
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <h5>AUGUST 2017 – MAY 2021</h5>
                    <p>
                    With minors in Statistics and Mathematics.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading >
                    <AccordionItemButton>
                    Software Developer Intern - Mobiniti
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <h5>APRIL 2019 - AUGUST 2019</h5>
                    <p>
                        Member of the software development team. Worked with different web development programming languages 
                        and development environments on multiple projects with a primary focus on front-end. Gained experience in a professional work environment. 
                        Used GitHub on a daily basis.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading >
                    <AccordionItemButton>
                        Game Development - Before the Night
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <h5>DECEMBER 2018</h5>
                    <p>
                    Built and released a mobile game for the Apple App store and Google Play titled Before the Night. 
                    Used Unity and C# to build the application.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading >
                    <AccordionItemButton>
                        Intern - College Hound
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <h5>July 2020 - August 2020</h5>
                    <p>
                        Met once a week to be further educated about the different stages of full stack web devlopment. 
                        Learned about freelancing
                        in the computer science industry.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading >
                    <AccordionItemButton>
                        This Website
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Webpage was built with react, java script, and css. Learned more about front-end development.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        
        <div className="connectMobile">
            <h2>Connect with me!</h2>
            <a href="https://www.linkedin.com/in/ethan-benedict-135996156/">
            <img src={require("./icons/in.png")}  alt="in" height="50px" width="50px"/>
            </a>
            <a href="mailto:ethanbenedict.dev@gmail.com">
            <img src="https://img.icons8.com/ios-filled/100/000000/email-sign.png" alt="in" height="50px" width="50px"/>
            </a> 
            <a href="https://github.com/EthanBenedict">
            <img src={require("./icons/github.png")}  alt="in"  height="50px" width="50px"/>
            </a>
            <h2>Ethan Benedict</h2>
        </div>
    </div>
    )
  }
}

export default Experience;

