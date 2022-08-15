import './App.css';
import React from 'react';
import ComingSoon from './ComingSoon.js';
import ReactGA from 'react-ga';

function App() {
  const setGA = () => {
    ReactGA.initialize('G-485S81XQ4W');
    ReactGA.pageview('/');
  };

  function componentDidMount() {
    this.setGA();
  }

  return (
    <div className="App">
      <ComingSoon />
    </div>
  );
}

export default App;
