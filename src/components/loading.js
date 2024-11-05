
import '../css/loading.css';
import React, { useState, useEffect } from 'react';

export default function Loading({ progress }) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (progress >= 80) {
      setLoadingComplete(true);
    }
  }, [progress]);
  console.log('prog', progress)
  return (
    <div className={`loading ${loadingComplete ? 'complete' : ''}`}>
      { progress === 0 ? ' ' : <h1>{progress}%</h1>}
      
    </div>
  );
}