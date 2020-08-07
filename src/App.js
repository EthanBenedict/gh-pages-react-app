import React from 'react';
import './App.css';

import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Main from "./components/Main.js";
import Experience from "./components/Experience"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Main />
     <About />
     <Experience />
     <p className="copyright">
      Thank you for visiting my website. Have a blessed day!<br/> 
      ©Copyright 2020 Ethan Benedict
     </p>
    </div>
  );
}

export default App;
