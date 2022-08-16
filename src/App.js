import './App.css';
// import ComingSoon from './ComingSoon.js';
import { ComingSoon as ComingSoonView } from './views/supportPages';
import getTheme from './views/theme';
import palettes from './views/common/paletteTypes';
import { ThemeProvider } from '@mui/material/styles';

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
    <div bgcolor={'alternate.main'} className="App">
      <ThemeProvider theme={getTheme('light', 'green')}>
        <ComingSoonView themeMode={'light'} paletteType={'green'} />
      </ThemeProvider>
    </div>
  );
}

export default App;
