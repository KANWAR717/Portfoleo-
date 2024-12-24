import React from 'react'
import Projects from './Projects';
import Footer from './Footer';
const educationdata = [
    {
        degree: '10th 12th H.P Board dharmshala ',
        institution: 'G.S.S.S Kot-Beja',
        year: '2018',
        discription: "Completed high school education with a focus on science",
    },
    {
        degree: 'Bachelor Of Computer Application',
        institution: 'ICFAI University Himachal Pradesh',
        year: '2021-24',
        discription: 'A comprehensive degree that covered various aspects of computer .'
    },
    {
        degree: 'Mern Stack Web development ',
        institution: 'Execllence Technology ',
        year: '2024',
        discription: 'Intensive program to learn full-stack web .'
    }
]

const Education = () => {
    return (
        <>       
         <div className='container-group section'>
         <h2 >Education</h2>
            <div className='edudata'>
            {educationdata.map((education, index) => {
                return (
                    <div className='backhover ' data-aos="zoom-in">
                    <div key={index} className='container  educationitem'>
                        <h5>{education.degree}</h5>
                        <p className='institution'>{education.institution}</p>
                        <p className='year'>{education.year}</p>
                        <p className='discription'>{education.discription}</p>
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
        <Projects/>
        <Footer/>
        </>

    )
}

export default Education