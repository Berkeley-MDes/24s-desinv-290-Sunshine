import React, { useState, useEffect } from 'react';

import LeftDisplay from './components/LeftDisplay';
import RightDisplay from './components/RightDisplay';
import './App.css'

import { JSONData } from './types';

function App() {

  const [data, setData] = useState<JSONData | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/data.json');
      const jsonData: JSONData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchData, 2000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className='main-wrapper'>
      <div className='left-wrapper'><LeftDisplay data={data}/></div>
      <div className='right-wrapper'><RightDisplay data={data}/></div>    
    </div>
  )
}

export default App
