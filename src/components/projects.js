
import '../css/projects.css';

export default function Projects( { projectsData }) {
    
 return(
    
    <div className='projects-flex-wrapper'>
       
        <div className='projects-title'>Projects</div>
       
            { projectsData.map((items, index) => (
              <div className='projects-items-flex' key={items.id}>
                    <div className='description-flex'>
                        <div className='projects-description'>{ items.description }</div>
                        <div><strong>Stack: </strong>{ items.techstack } </div>
                    </div>
                    <img className='projects-image' alt="productimage" src={ items.imageUrl }/>
               
               </div>
            ))}
        </div>
    
 )
}