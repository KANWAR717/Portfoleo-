import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './About';
import myimg from './phtos/myimg.jpg';

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className='main'>
        <div className='backvid'>
          <div className='info'>
            <h2>Hi! I am Tarsem Singh</h2>
            <h1>MERN Stack Developer</h1>
            <p>
              I am an enthusiastic, self-motivated, reliable, responsible, and
              hardworking person. I am a mature team worker and adaptable to all
              challenging situations. I am able to work well both in a team
              environment as well as using my own initiative.
            </p>
            <NavLink to='/resume'>View C.V</NavLink>
          </div>
          <div className='info-img'>
            <img src={myimg} alt="Tarsem Singh" />
          </div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Main;
