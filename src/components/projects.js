
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../css/projects.css';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);



export default function Projects( { projectsData }) {
    

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
                { x: '-25vw', opacity: 0.1 },
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
                { opacity: 0.5 },
                {
                    opacity: 1,
                    duration: 0.6, // Total duration for the fade-in
                    stagger: {
                    amount: 0.8, // Total time for the stagger effect
                    from: "start", // Start stagger from the first element
                    },
                    scrollTrigger: {
                        trigger: ".projects-title", // Use the container as the trigger
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
        <div className='main-projects-title title-slide'>Projects</div>
       
            { projectsData.map((items, index) => (
              <div className='projects-items-flex fade' key={items.id}>
                    <div className='description-flex'>
                        <div className='projects-title'>{ items.title }</div>
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