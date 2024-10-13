
import '../css/loading.css';
import React, { useState, useEffect } from 'react';

export default function Loading({ progress }) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (progress >= 80) {
      setLoadingComplete(true);
    }
  }, [progress]);

  return (
    <div className={`loading ${loadingComplete ? 'complete' : ''}`}>
      <h1>{progress}%</h1>
    </div>
  );
}