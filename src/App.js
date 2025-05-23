import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Portfolio from './components/Portfolio';
import './components/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
    </div>
  );
}

export default App;