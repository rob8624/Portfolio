
import './App.css';
import pb from './services/pocketbase';
import { fetchHeaderData, fetchHeroData, 
  fetchSocialsData, fetchAboutData, 
  fetchSkillsLogos, fetchProjects } from './services/pocketbase';
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/header.js';
import Hero from './components/hero.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import BackToTop from './components/backtotop.js';
import ProjectsDetail from './components/projectsDetail.js';

import { Routes, Route } from 'react-router-dom';

import HashLoader from "react-spinners/HashLoader";



function App() {
  const [headerData, setHeaderData] = useState([])
  const [heroData, setHeroData] = useState([])
  const [socialsData, setSocialsData] = useState([])
  const [aboutData, setAboutData] = useState([])
  const [skillsLogos, setSkillsLogos] = useState([])
  const [projectsData, setProjects] = useState([])
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true)
  

  const projectsRef = useRef(null)

  
  const data = useRef({})

  
 
  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const authData = await pb.collection('users').authWithPassword(
          process.env.REACT_APP_POCKETBASE_USERNAME, 
          process.env.REACT_APP_POCKETBASE_PASSWORD  
        );

        // Fetch cached data inside the useEffect
        const cachedData = JSON.parse(localStorage.getItem('apidata'));
        console.log('Cached Data:', cachedData);
        
        if (cachedData) {
          
          setHeaderData(cachedData.headerData || []);
          setHeroData(cachedData.heroData || []); // Ensure this is lowercase
          setSocialsData(cachedData.socialsData || []);
          setAboutData(cachedData.aboutData || []);
          setSkillsLogos(cachedData.skillsLogos || []);
          setProjects(cachedData.projectsData)
          setLoading(false);
          return; // Skip fetching new data
        }

       
        console.log('Authentication successful:', authData);
        
        const headerData = await fetchHeaderData();
        setHeaderData(headerData.items);
        data.current.headerData = headerData.items;
       

        const heroData = await fetchHeroData();
        setHeroData(heroData.items);
        data.current.heroData = heroData.items; 
        

        const socialsData = await fetchSocialsData();
        setSocialsData(socialsData.items);
        data.current.socialsData = socialsData.items;
       

        const aboutData = await fetchAboutData();
        setAboutData(aboutData.items);
        data.current.aboutData = aboutData.items;
        

        const skillsLogos = await fetchSkillsLogos();
        setSkillsLogos(skillsLogos);
        data.current.skillsLogos = skillsLogos;
        

        const projectsData = await fetchProjects();
        setProjects(projectsData)
        data.current.projectsData = projectsData;
        
       
        setLoading(false);
        console.log(data);
        localStorage.setItem('apidata', JSON.stringify(data.current));

      } catch (error) {
        console.error('Error during authentication:', error);
      }  
    };

    authenticateUser();
  }, []);




  
return (
  <>
  {  loading ? <div className={`loader-wrapper ${loading ? "active" : " "} `}>
    <HashLoader color="black" size="150"  className='loader'/>
    </div> :
  <div>
   <Header headerData={headerData} activeIndex={activeIndex} />
   <Routes>
      <Route path="/" element={
        <>
        <Hero heroData={heroData} 
            socialsData={socialsData} 
            activeIndex={activeIndex}
            projectsRef={projectsRef}/>

      <About aboutData={aboutData} 
        skillsLogos={skillsLogos}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}/>

      <Projects projectsData={projectsData} 
                projectsRef={projectsRef}/>
      </>
      }/>

      <Route path="/projects/:projectId/:projectSlug" element={<ProjectsDetail projectsData={projectsData} />}/>  

    </Routes>
    
   <BackToTop />
  </div> 
}
   </>
  );

}

export default App;


/* return (
  <>
  {  loading ? <Loading progress={progress} cachedData={cachedData}/> :
  <div>
   <Header headerData={headerData} activeIndex={activeIndex} />

      <Hero heroData={heroData} 
            socialsData={socialsData} 
            activeIndex={activeIndex}
            projectsRef={projectsRef}/>

      <About aboutData={aboutData} 
        skillsLogos={skillsLogos}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        />
      <Projects projectsData={projectsData} 
                projectsRef={projectsRef}/>
  
    
   <BackToTop />
  </div> 
}
   </>
  ); */