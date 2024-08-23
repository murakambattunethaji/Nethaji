
import React from 'react';
import { ThemeProvider, useTheme } from './Lighttodark';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Dark Mode</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}


