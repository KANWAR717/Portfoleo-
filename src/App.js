import './App.css';
import './About.css';
import './Main.css';
import './Education.css';
import'./Project.css';
import './Footer.css';
import './Contact.css';
import './Resume.css';
import { useState, useEffect } from 'react';
import Splash from './Splash';
import Navbar from './Navbar';
import Main from './Main';
import About from './About';
import Projects from './Projects';
import Project from './Project';
import Education from './Education';
import Contact from './Contact'
import Resume from './Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [show , setshow]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setshow(false)
    },7000)
  },[])
  const top =(()=>{
    window.scroll(0,0)
  })
  return (
    <>
  { show ? (<Splash/>):(<div>      <Navbar /> 
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/pro' element={<Projects/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resume' element={<Resume/>}/>
       </Routes> 
       <div className='blink-button'>
      <button onClick={top}>
        <img 
          src='https://cdn-icons-png.flaticon.com/128/16821/16821898.png' 
          alt='top-icon' 
          className='button-icon' 
        />
        <div className='button-text'>
        </div>
      </button>
    </div>
    
     </div>
 ) }
      </>
  );
}

export default App;


