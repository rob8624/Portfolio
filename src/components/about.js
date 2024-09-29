import React from 'react'
import '../css/about.css';

export default function About({ aboutData, skillsLogos }) {
  return(
    
    <div className='flex-wrapper'>
        {console.log('skillslogs', skillsLogos)}
        {aboutData.map((items, index) => (
            <div className='about-wrapper' key={items.id}>
                <div className='about-content'>
                    <div className='about-title'>About</div>
                    <i className="fa-regular fa-address-card centre-icon"></i>
                </div>
                <div dangerouslySetInnerHTML={{ __html: items.About }} className='about-text'></div>
                <div className='skills-title'>Skills</div>
                {skillsLogos.map((items, index) => (
                    <img src={items} alt="skillslogo"></img>
                ))}
            </div>)
        )}
    </div>
  )
}