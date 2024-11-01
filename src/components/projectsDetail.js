import '../css/projects-detail.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pb from '../services/pocketbase';




export default function ProjectsDetail( { projectsData } ) {
    const { projectId } = useParams(); 
    const [projectData, setProjectData] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        
       const fetchData = async () => {
         try {
            const data = await pb.collection('projects').getFirstListItem(`id="${projectId}"`)
            console.log('data', data, loading)
            setProjectData(data)
            setLoading(false);
            
            
         } catch (error) {
                console.log('cant get data')
                setLoading(false)         
            }
      
       }  

       fetchData()

        
    })


    return (
        <div className="projects-detail-flex">
            {projectData ? (
                <>
                    <h1>{projectData.title}</h1>
                    <p>{projectData.description}</p>
                  
                </>
            ) : (
                <p>Project not found.</p>
            )}
        </div>
    );
}