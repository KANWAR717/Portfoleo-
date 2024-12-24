import React from 'react';
import Footer from './Footer';

const projectdata = [
  {
    id: '1',
    name: 'Weather App',
    description: 'Weather app is a program that provides information about the weather, such as the temperature, precipitation,  .',
    link: 'Link',
  },
  {
    id: '2',
    name: 'To-Do List',
    description: 'To-Do List app is a task management tool that helps users organize and prioritize tasks by creating and checking off items in a list.',
    link: 'Link',
  },
  {
    id: '3',
    name: 'Fitness Website',
    description: 'Fitness Website helps users track their workouts, set goals, and monitor their progress over time.',
    link: 'Link',
  },
  {
    id: '4',
    name: 'Motervical',
    description: 'Motervical is a web-based platform providing information about motorcycles, including reviews, specs, and purchase guides.',
    link: 'Link',
  }
];

const Project = () => {
  return (
    <>
      <div className="container-group projectitem">
<div className='container text-center'>        
  <h1>Project</h1>
        <p>Professional Profile - There Is All About Me</p>
        <h1 style={{ fontSize: '90px', marginTop: '-1.9cm', }}>....</h1>
        <br/><br/>
        <div className=" text-center dis">
          <div className="row">
            {projectdata.map((project) => (
              <div key={project.id} className="col-6 mb-3 colitem"data-aos="fade-up">
                <div className="card w-75 box-size ">
                  <div className="card-body  ">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href="#" className="btn btn-primary">{project.link}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default Project;
