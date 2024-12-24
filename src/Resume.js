import React from 'react';

const Resume = () => {
  return (
    <>
      <div className="container">
        <h2>Tarsem Singh</h2>
        <p>
          Solan H.P<br />
          7876321451<br />
          kanwartarsem55@gmail.com
        </p>

        <div className="objective">
          <h5>Objective</h5>
          <p>
            To start my career as a technical person in software field by using my technical knowledge and skills in learning environment for the better growth of the organization.
          </p>
        </div>

        <div className="education">
          <h5>Education</h5>
          <table>
            <thead>
              <tr>
                <th>      Course / Degree</th>
                <th>    School / University</th>
                <th>   Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>        Batchular Of Computer Application</td>
                <td>ICFAI UNIVERSITY</td>
                <td>2021-24</td>
              </tr>
              <tr>
                <td>10th</td>
                <td>G.S.S.S KOT-BEJA</td>
                <td>2018</td>
              </tr>
              <tr>
                <td>12th</td>
                <td>G.S.S.S KOT-BEJA</td>
                <td>2020</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br/>
        <div className='skil'>
            <h5>Skills</h5>
            <br/>
            <ul>
                <li>HTML 5</li>
                <li>CSS</li>
                <li>java Script</li>
                <li>React J.S</li>
                <li>Node J.S</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ul>
        </div>
        <div className='Language'>
            <h5>Language</h5>
            <br/>
            <ul>
                <li>English</li>
                <li>Hindi</li>
            </ul>
        </div>
        <div className='hobbi'>
<h5>Intrest & Hobbies</h5>
<br/>
<ul>
<li>Playing Kabaddi</li>
<li>Travelling</li>
</ul>
      </div>
      <div className='detail'>
        <h5>Personal Detail</h5>
        <ul>
            <li>Date Of Birth : 11/06/2003</li>
            <li>   Gender      :          Male</li>
            <li>Place : kasauli</li>
        </ul>
      </div><br/><br/><br/>
      <div div className='sig'>
        Tarsem Singh
      </div>
      </div>
    </>
  );
};

export default Resume;
