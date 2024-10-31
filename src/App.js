
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
import Loading from './components/loading.js';
import BackToTop from './components/backtotop.js';
import ProjectsDetail from './components/projectsDetail.js';

import { Routes, Route } from 'react-router-dom';




function App() {
  const [headerData, setHeaderData] = useState([])
  const [heroData, setHeroData] = useState([])
  const [socialsData, setSocialsData] = useState([])
  const [aboutData, setAboutData] = useState([])
  const [skillsLogos, setSkillsLogos] = useState([])
  const [projectsData, setProjects] = useState([])
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const projectsRef = useRef(null)

  
  const data = useRef({})

  const cachedData = JSON.parse(localStorage.getItem('apidata'));
 
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

        setProgress(10);
        console.log('Authentication successful:', authData);
        
        const headerData = await fetchHeaderData();
        setHeaderData(headerData.items);
        data.current.headerData = headerData.items;
        setProgress(20);

        const heroData = await fetchHeroData();
        setHeroData(heroData.items);
        data.current.heroData = heroData.items; 
        setProgress(40);

        const socialsData = await fetchSocialsData();
        setSocialsData(socialsData.items);
        data.current.socialsData = socialsData.items;
        setProgress(60);

        const aboutData = await fetchAboutData();
        setAboutData(aboutData.items);
        data.current.aboutData = aboutData.items;
        setProgress(80);

        const skillsLogos = await fetchSkillsLogos();
        setSkillsLogos(skillsLogos);
        data.current.skillsLogos = skillsLogos;
        setProgress(90);

        const projectsData = await fetchProjects();
        setProjects(projectsData)
        data.current.projectsData = projectsData;
        setProgress(100);
       
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
  {  loading ? <Loading progress={progress} cachedData={cachedData}/> :
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

      <Route path="/projects/:projectSlug" element={<ProjectsDetail projectsData={projectsData} />}/>  

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