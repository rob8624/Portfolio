import React from 'react'
import '../css/about.css';
import { useState } from 'react';

export default function About({ aboutData, skillsLogos }) {
    const [isAboutVisible, setIsAboutVisible] = useState(false)
    const [isSkillsVisible, setIsSkillsVisible] = useState(false)

    const toggleAboutText = () => {
        setIsAboutVisible(!isAboutVisible)
        
    }

    const toggleSkillsText = () => {
        setIsSkillsVisible(!isSkillsVisible)
    }

  return(
    
    <div className='flex-wrapper'>
        {console.log('skillslogs', skillsLogos)}
        {aboutData.map((items, index) => (
            <div className='about-wrapper' key={items.id}>
                <div className='about-content'>
                    <div className='about-title' onClick={toggleAboutText}>About</div>
                    <i className="fa-regular fa-address-card centre-icon"></i>
                </div>
                {isAboutVisible && <div dangerouslySetInnerHTML={{ __html: items.About }}  className='about-text'></div>}
                <div className='skills-title' onClick={toggleSkillsText}>Skills</div>
               {isSkillsVisible && (
                <div className='logo-grid'>
                    {skillsLogos.map((items, index) => (
                            <div className='logo-item'>
                                <img className="logo-image" src={items} alt="skillslogo"></img>
                            </div>
                    ))}
                </div> )}
            </div>)
        )}
    </div>
  )
}