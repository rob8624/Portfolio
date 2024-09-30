import React from 'react'
import '../css/about.css';


export default function About({ aboutData, skillsLogos, activeIndex, setActiveIndex}) {
    


const handleAboutClick = () => {
   setActiveIndex((prevState) => (prevState !== 1 ? 1 : 0))
}

const handleSkillsClick = () => {
    setActiveIndex((prevState) => (prevState !== 2 ? 2 : 0))
 }
 
   

  return(
    
    <div className='flex-wrapper'>
        {console.log(activeIndex)}
        
        {aboutData.map((items, index) => (
            <div className='about-wrapper' key={items.id}>
                <div className='about-content'>
                    <div className='about-title' onClick={handleAboutClick}>About</div>
                    <i className="fa-regular fa-address-card centre-icon"></i>
                </div>
               <div dangerouslySetInnerHTML={{ __html: items.About }} className={`about-text ${activeIndex === 1 ? 'active' : ''}`} ></div>
                <div className='skills-title' onClick={handleSkillsClick}>Skills</div>
                <div className={`logo-grid ${activeIndex === 2 ? 'active' : ''}`}>
                    {skillsLogos.map((items, index) => (
                            <div className='logo-item'>
                                <img className="logo-image" src={items} alt="skillslogo"></img>
                            </div>
                    ))}
                </div> 
            </div>)
        )}
    </div>
  )
}