
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../css/projects.css';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);



export default function Projects( { projectsData }) {
    
const titleRef = useRef(null);

const mm = gsap.matchMedia();

useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
        {
            small: '(max-width: 767px)',
            large: '(min-width: 768px)',
        },
        
        (ctx) => {
            const { small } = ctx.conditions;

            // Move gsap.fromTo inside the media query callback
            gsap.fromTo(
                titleRef.current,
                { x: small ? -30: -500, opacity: 0.2 },
                {
                    x: 0,
                    opacity: 1,
                    duration: small ? 0.5 : 2,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: small ? "top 52%" : "top 60%",
                        once: true,
                    },
                }
            );
        }
    );
}, {scope: titleRef} );

/* useEffect(() => {
    const element = titleRef.current;

    const mm = gsap.matchMedia();

    // Create a media query for larger screens
    mm.add('(min-width: 109px)', () => {
        const scrollTriggerInstance = gsap.fromTo(
            element,
            { x: -200, opacity: 0.2 },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                scrollTrigger: {
                    trigger: element,
                    start: "top 50%",
                    once: true,
                    // Store the instance to kill later
                    onLeave: () => scrollTriggerInstance.kill()
                }
            }
        );
    }); */

    // Cleanup function
 /*    return () => {
        mm.revert(); // Optional: remove all media queries
    };

}, []);
  */
 
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