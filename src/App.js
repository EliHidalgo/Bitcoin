import React from 'react';
import './App.css';
import BitcoinRate from './components/BitcoinRate';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BitcoinRate />
    </div>
  );
}

export default App;
