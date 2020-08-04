import React, { Component } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

class Experience extends Component {
  render(){
    const slides = [
        { title: 'Software Developer Intern - Mobiniti', date: 'APRIL 2019 - AUGUST 2019', body: 'Member of the software development team. Worked with different web development programming languages and development environments on multiple projects. Gained experience in a professional work environment. Used GitHub on a daily basis.'},
        { title: 'Bachelor of Science in Computer Science - Misericordia University', date: 'AUGUST 2017 – MAY 2021', body: 'With minors in Statistics and Mathematics.'},
        { title: 'Game Developement - Before the Night', date: 'DECEMEBR 2018', body: 'Built and released a mobile game for the Apple App store and Google Play titled Before the Night. Used Unity and C# to build the application.'},
      ];
    return (
    <div className="experience">
        <h1>Experience</h1>
        <Slider direction="horizontal" infinite="TRUE" className="slider">
            {slides.map((slide, index) => <div key={index}>
                <div className="title">
                    {slide.title}
                </div>
                <div className="date">
                    {slide.date}
                </div>
                <div className="body">
                    {slide.body}
                </div>
            </div>)}
        </Slider>
        <h2>Portfolio coming soon!</h2>
    </div>
    )
  }
}

export default Experience;

