import './App.css';
import ComingSoon from './ComingSoon.js';
import ReactGA from 'react-ga4';
import React, { useState, useEffect } from 'react';

function App() {
  const setGA = () => {
    ReactGA.initialize('G-485S81XQ4W');
    ReactGA.send({ hitType: 'pageview', page: '/' });
  };

  useEffect(() => {
    setGA();
  });

  return (
    <div className="App">
      <ComingSoon />
    </div>
  );
}

export default App;
