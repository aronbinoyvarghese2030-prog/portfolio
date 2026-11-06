import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Check localStorage or default to 'blue'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('abv-portfolio-theme');
    return saved === 'red' ? 'red' : 'blue';
  });

  useEffect(() => {
    localStorage.setItem('abv-portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    if (newTheme) {
      setTheme(newTheme);
    } else {
      setTheme((prev) => (prev === 'blue' ? 'red' : 'blue'));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

