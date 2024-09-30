
import './App.css';
import pb from './services/pocketbase';
import { fetchHeaderData, fetchHeroData, fetchSocialsData, fetchAboutData, fetchSkillsLogos } from './services/pocketbase';
import React, { useState, useEffect } from 'react';
import Header from './components/header.js';
import Hero from './components/hero.js';
import About from './components/about.js';


function App() {
  const [headerData, setHeaderData] = useState([])
  const [heroData, setHeroData] = useState([])
  const [socialsData, setSocialsData] = useState([])
  const [aboutData, setAboutData] = useState([])
  const [skillsLogos, setSkillsLogos] = useState([])

  const [activeIndex, setActiveIndex] = useState(0);

  

  

useEffect(() => {
  const authenticateUser = async () => {
    try{
      const authData = await pb.collection('users').authWithPassword(
        process.env.REACT_APP_POCKETBASE_USERNAME, 
        process.env.REACT_APP_POCKETBASE_PASSWORD  
    );
    console.log('Authentication successful:', authData);
    const headerData = await fetchHeaderData();
    const heroData = await fetchHeroData();
    const socialsData = await fetchSocialsData()
    const aboutData = await fetchAboutData()
    const skillsLogos = await fetchSkillsLogos()
    console.log(skillsLogos)
    setHeaderData(headerData.items);
    setHeroData(heroData.items);
    setSocialsData(socialsData.items)
    setAboutData(aboutData.items)
    setSkillsLogos(skillsLogos)

}
   catch(error){
    console.error('Error during authentication:', error);
              }  
  }
authenticateUser()
}, [])




  
return (
  <>
  <div>
    <Header headerData={headerData} />

    <Hero heroData={heroData} socialsData={socialsData}/>

    <About aboutData={aboutData} 
    skillsLogos={skillsLogos}
    activeIndex={activeIndex}
    setActiveIndex={setActiveIndex}
    />
   
  </div>
   
   </>
  );

}

export default App;
