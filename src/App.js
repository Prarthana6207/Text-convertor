import React,  { useState } from 'react'

import './App.css';
//import About from './components/About';
import Inputtext from './components/Inputtext';
import Navbar from './components/Navbar';




function App() {

  const [mode,setDarkMode]= useState('light');
  
  const toggleMode=()=>{
    if (mode=== 'light'){
    setDarkMode ('dark');
  document.body.style.backgroundColor='#2E2C2C';}
    else{
    setDarkMode('light');
    document.body.style.backgroundColor='white';
  }
  }
  
  return (
    <div className="App">
      <Navbar mode = {mode} toggleMode={toggleMode}/>
      <div className="container max-5" >
      <Inputtext heading="Enter the text" mode = {mode}/>
      {/* <About /> */}
      </div>
      
    </div>
  );
}

export default App;
