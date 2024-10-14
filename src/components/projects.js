
import '../css/projects.css';

export default function Projects( { projectsData }) {
    
 return(
    
    <div className='projects-flex-wrapper'>
       
        <div className='projects-title'>PROJECTS</div>
       
            { projectsData.map((items, index) => (
              <div className='projects-items-flex' key={items.id}>

                    <div className='projects-description'>{ items.description }</div>
                    <img className='projects-image' alt="productimage" src={ items.imageUrl }/>
               
               </div>
            ))}
        </div>
    
 )
}