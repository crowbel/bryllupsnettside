import React from 'react';
import logo from './assets/logo.png';
import flower1 from './assets/flower1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="main">
        {/*<img src={flower1} className="flower1" alt=""/>*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Her kommer Ine og Magnus sin bryllupsnettside
        </p>
        <a
          className="logo"
          href="https://www.1881.no/person/ullensaker/kloefta/ine-antonette-kirkemo_31516176S1/"
        >
          Hvem er Ine ?
        </a>
        <a
          className="logo"
          href="https://no.pinterest.com/magkrstar/"
        >
          Hvem er Magnus ?
        </a>
      </main>
    </div>
  );
}

export default App;
