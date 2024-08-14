import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} />
      <Main language={language} />
    </div>
  );
}

export default App;
