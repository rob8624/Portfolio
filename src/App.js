
import './App.css';
import pb from './services/pocketbase';
import { fetchHeaderData, fetchHeroData, fetchSocialsData, fetchAboutData, fetchSkillsLogos } from './services/pocketbase';
import React, { useState, useEffect } from 'react';
import Header from './components/header.js';
import Hero from './components/hero.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Loading from './components/loading.js';



function App() {
  const [headerData, setHeaderData] = useState([])
  const [heroData, setHeroData] = useState([])
  const [socialsData, setSocialsData] = useState([])
  const [aboutData, setAboutData] = useState([])
  const [skillsLogos, setSkillsLogos] = useState([])
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  

  

useEffect(() => {
  const authenticateUser = async () => {
    try{
      const authData = await pb.collection('users').authWithPassword(
        process.env.REACT_APP_POCKETBASE_USERNAME, 
        process.env.REACT_APP_POCKETBASE_PASSWORD  
    );
    setProgress(10)
    console.log('Authentication successful:', authData);
    
    const headerData = await fetchHeaderData();
    setHeaderData(headerData.items);
    setProgress(20)

    const heroData = await fetchHeroData();
    setHeroData(heroData.items);
    setProgress(40)

    const socialsData = await fetchSocialsData()
    setSocialsData(socialsData.items)
    setProgress(60)

    const aboutData = await fetchAboutData()
    setAboutData(aboutData.items)
    setProgress(80)
    
    const skillsLogos = await fetchSkillsLogos()
    setSkillsLogos(skillsLogos)
    setProgress(100)
   
    setLoading(false)
}
   catch(error){
    console.error('Error during authentication:', error);
              }  
  }
authenticateUser()
}, [])




  
return (
  <>
  { loading ? <Loading progress={progress}/> :
  <div>
    <Header headerData={headerData} activeIndex={activeIndex} />
   <Hero heroData={heroData} socialsData={socialsData} activeIndex={activeIndex}/>
   <About aboutData={aboutData} 
    skillsLogos={skillsLogos}
    activeIndex={activeIndex}
    setActiveIndex={setActiveIndex}
    />
   <Projects/>
  </div>
}
   </>
  );

}

export default App;
