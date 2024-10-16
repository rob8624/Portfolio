
import '../css/projects.css';

export default function Projects( { projectsData }) {
    
 return(
    
    <div className='projects-flex-wrapper'>
       <div>-----</div>
        <div className='main-projects-title'>Projects</div>
       
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