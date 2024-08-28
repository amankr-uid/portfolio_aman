import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved user preference in localStorage
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, []);

  useEffect(() => {
    // Save the user preference and apply the class to the body
    localStorage.setItem('darkMode', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button className="w-6 h-6 dark-mode-toggler" onClick={toggleDarkMode}>
     <i className={`fa-solid ${isDarkMode ? 'fa-sun text-yellow-300' : 'fa-moon text-white'} text-[24px] h-6`} />
    </button>
  );
};

export default DarkMode
