
import gsap from 'gsap';

import { useRef, useEffect } from 'react';


import '../css/projects.css';

export default function Projects( { projectsData }) {
    
const titleRef = useRef(null);

useEffect(() => {
    const element = titleRef.current;
    gsap.fromTo(element, 
        { x: -100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 2 })
}, [])

 
 
return(
    
    <div className='projects-flex-wrapper'>
       <div>-----</div>
        <div className='main-projects-title' ref={titleRef}>Projects</div>
       
            { projectsData.map((items, index) => (
              <div className='projects-items-flex' key={items.id}>
                    <div className='description-flex'>
                        <div className='projects-title'>{ items.title }</div>
                        <div className='projects-description'>{ items.description }</div>
                        <div className='tech-stack'><strong>Stack: </strong>{ items.techstack } </div>
                    </div>
                    <img className='projects-image' alt="productimage" src={ items.imageUrl }/>
               
               </div>
            ))}
        </div>
    
 )
}