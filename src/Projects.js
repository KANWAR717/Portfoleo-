
import React, { useState, useEffect } from 'react';
import './App.css'; 
const ProgressBar = ({ skillName, percentage }) => (
  <div className="progress-bar-container">
    <div className="progress-bar-label">
      <span>{skillName}</span>
      <span>{percentage}%</span>
    </div>
    <div className="progress-bar">
      <div
        className="progress"
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const [htmlSkill, setHtmlSkill] = useState(0);
  const [cssSkill, setCssSkill] = useState(0);
  const [jsSkill, setJsSkill] = useState(0);
  const [reactSkill, setReactSkill] = useState(0);
  const [nodeSkill, setNodeSkill]=useState(0);
  const [expressSkill, setexpressSkill]=useState(0)
  const [mongodbSkill, setmongodbSkill]=useState(0)
  useEffect(() => {
    const skillTimers = [
      { setter: setHtmlSkill, value: 90 },
      { setter: setCssSkill, value: 80 },
      { setter: setJsSkill, value: 75 },
      { setter: setReactSkill, value: 75 },
      {setter:setNodeSkill , value: 70},
      {setter:setexpressSkill , value: 65},
      {setter:setmongodbSkill , value: 65}
    ];

    skillTimers.forEach((timer, index) => {
      setTimeout(() => {
        timer.setter(timer.value);
      }, index * 1000);
    });
  }, []);

  return (
    <div className="skills-section">
      <h2> <br/><br/><br/>My Skills</h2>
      <div className="skills-list">
        <ProgressBar skillName="HTML" percentage={htmlSkill} />
        <ProgressBar skillName="CSS" percentage={cssSkill} />
        <ProgressBar skillName="JavaScript" percentage={jsSkill} />
        <ProgressBar skillName="React" percentage={reactSkill} />
        <ProgressBar skillName='Node' percentage={nodeSkill}/>
        <ProgressBar skillName='Express' percentage={expressSkill}/>
        <ProgressBar skillName='MongoDB' percentage={mongodbSkill}/>
        
      </div>
    </div>
  );
};

export default SkillsSection;
