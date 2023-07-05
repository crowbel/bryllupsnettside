import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Her kommer Ine og Magnus sin bryllupsnettside
        </p>
        <a
          className="App-link"
          href="https://www.1881.no/person/ullensaker/kloefta/ine-antonette-kirkemo_31516176S1/"
        >
          Hvem er Ine ?
        </a>
        <a
          className="App-link"
          href="https://no.pinterest.com/magkrstar/"
        >
          Hvem er Magnus ?
        </a>
      </header>
    </div>
  );
}

export default App;
