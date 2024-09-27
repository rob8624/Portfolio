
import './App.css';
import pb from './services/pocketbase';
import { fetchHeaderData, fetchHeroData } from './services/pocketbase';
import React, { useState, useEffect } from 'react';
import Header from './components/header.js';
import Hero from './components/hero.js';


function App() {
  const [headerData, setHeaderData] = useState([])
  const [heroData, setHeroData] = useState([])

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
    setHeaderData(headerData.items);
    setHeroData(heroData.items);
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
    <Hero heroData={heroData} />
  </div>
   
   </>
  );

}

export default App;
