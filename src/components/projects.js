
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { Link } from 'react-router-dom'

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../css/projects.css';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);



export default function Projects( { projectsData, projectsRef}) {
    

const containerRef = useRef()


useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
        {
            small: '(max-width: 767px)',
            large: '(min-width: 768px)',
        },

        (ctx) => {
            const { small } = ctx.conditions;
            
            gsap.fromTo(
                ".title-slide",
                { x: small ? '-40vw' :'-25vw', opacity: 0.1 },
                {
                    x: 0,
                    opacity: 1,
                    duration: small ? 0.5 : 1.8,
                    scrollTrigger: {
                        trigger: ".title-slide",
                        start: small ? "top 95%" : "top 65%",
                        end: "top 20%",
                        scrub: true,
                        once: false,
                        
                        
                    },
                }
            );

            gsap.fromTo(
                ".fade",
                { opacity: 0.3, x: small ? -20 : -100 },
                {
                    x:0,
                    opacity: 1,
                    duration: 1,
                  
                    stagger: {
                    amount: 0.3, 
                    from: "start",
                    },
                    scrollTrigger: {
                        trigger: ".projects-title", 
                        start: "top 70%",
                        end: "top 15%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    );
}, { scope: containerRef });


return(
    
    <div className='projects-flex-wrapper' ref={containerRef} >
       <div>-----</div>
        <div className='main-projects-title title-slide' ref={projectsRef}>Projects</div>
       
            { projectsData.map((items, index) => (
            
              <div className='projects-items-flex fade' key={items.id}>
                    <div className='description-flex'>
                        <div className='title-flex'>
                            <div className='projects-title'>{ items.title }</div>
                                <Link to={`/projects/${items.id}/${items.titleSlug}`} style={{ textDecoration: 'none' }}>
                                    <div className='info-btn'>More info</div>
                                </Link>
                            </div>
                        <div className='projects-description'>{ items.description }</div>
                        <div className='tech-stack' ><strong>Stack: </strong>{ items.techstack } </div>
                    </div>
                    <img className='projects-image' alt="productimage" src={ items.imageUrl }/>
               
               </div>
            
            ))}
        </div>
    
 )
}



 
/* useEffect(() => {
    const element = titleRef.current;

    const mm = gsap.matchMedia();

  
    mm.add('(min-width: 780px)', () => {
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
                   
                    onLeave: () => scrollTriggerInstance.kill()
                }
            }
        );
    }); 


 return () => {
     mm.revert(); 
   };

 }, []); */



 /* const titleRef = useRef(null);

 useGSAP(() => {
     const mm = gsap.matchMedia();
     mm.add(
         {
             small: '(max-width: 767px)',
             large: '(min-width: 768px)',
         },
 
         (ctx) => {
             const { small } = ctx.conditions;
             
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
  */