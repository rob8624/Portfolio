
import './App.css';
import pb from './services/pocketbase';
import { fetchHeaderData } from './services/pocketbase';
import React, { useState, useEffect } from 'react';
import Header from './components/header.js';


function App() {
  const [headerData, setHeaderData] = useState([])

useEffect(() => {
  const authenticateUser = async () => {
    try{
      const authData = await pb.collection('users').authWithPassword(
        process.env.REACT_APP_POCKETBASE_USERNAME, // Username from .env
        process.env.REACT_APP_POCKETBASE_PASSWORD  // Password from .env
    );
    console.log('Authentication successful:', authData);
    const data = await fetchHeaderData();
    setHeaderData(data.items); // Update state with the fetched data
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
  </div>
   
   </>
  );

}

export default App;
