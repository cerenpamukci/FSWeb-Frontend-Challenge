import React from 'react';

function Header({ darkMode, setDarkMode, language, setLanguage }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const switchLanguage = () => {
    setLanguage(language === 'EN' ? 'TR' : 'EN');
  };

  return (
    <header className={darkMode ? 'dark-mode' : ''}>
      <div className="toggle-darkmode">
        <label>
          <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
          Dark Mode
        </label>
      </div>
      <div className="language-switch">
        <button onClick={switchLanguage}>
          {language === 'EN' ? "Türkçe'ye Geç" : 'Switch to English'}
        </button>
      </div>
    </header>
  );
}

export default Header;
