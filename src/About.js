import React from 'react';
import Education from './Education';
import myimg from './phtos/myimg.jpg'; 
import Projects from './Projects';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <div className="container-group backcolor">
        <div className="container py-5">
          <center>
            <h1 className="display-4">About Me</h1>
            <p className="lead">Professional Profile - Here's All About Me</p>
            <h1 style={{ fontSize: '90px', marginTop: '-1.9cm' }}>....</h1>
          </center>
          
          <div className="row align-items-center">
            <div className="col-12 col-md-4 mb-4" data-aos="fade-right">
              <img 
                src='https://i.pinimg.com/originals/97/e4/8b/97e48bc2d697451bcbf9eebd92010490.jpg'
                alt="Tarsem Singh" 
                className="about-img" 
                style={{ maxHeight: '400px', objectFit: 'cover' }} 
              />
            </div>
            <div className="col-12 col-md-8" data-aos="fade-left">
              <h2 className="display-5">I'm Tarsem Singh</h2>
              <p>
                I am an enthusiastic, self-motivated, reliable, responsible, and hard-working person. I am a mature team worker
                and adaptable to all challenging situations. I am able to work well both in a team environment and using my own
                initiative.
              </p>
              
              <div className="myinfo row">
                <div className="myinfo-section col-12 col-md-6">
                  <span>Name: <p>Tarsem Singh</p></span>
                  <span>Date of Birth: <p>11/06/2003</p></span>
                  <span>Address: <p>Solan</p></span>
                  <span>Languages: <p>English, Hindi</p></span>
                </div>

                <div className="myinfo-section col-12 col-md-6">
                  <span>Country: <p>India</p></span>
                  <span>Phone: <p>7876321451</p></span>
                  <span>Email: <p>tarsemkanwar55@gmail.com</p></span>
                  <span>Birthdate: <p>11/06/2003</p></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Education />
      <Projects/>
      <Footer/>

    </>
  );
};

export default About;
