import React from 'react';
import logo from './assets/logo.png';
import star from './assets/Rectangle 10.png';
import flower1 from './assets/Rectangle 6.png';
import flower2 from './assets/Rectangle 9.png';
import flower3 from './assets/Rectangle 27.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="rectangle" />
            <div className="div" />
            <img className="img" alt="Rectangle" src={logo} />
            <img className="rectangle-2" alt="Rectangle" src={flower2} />
            <img className="rectangle-3" alt="Rectangle" src={flower1} />
            <div className="frame">
              <div className="frame-2">
                <div className="text-wrapper">PROGRAM</div>
                <div className="text-wrapper">GJESTELISTE</div>
              </div>
              <div className="frame-2">
                <div className="text-wrapper">GENERELL INFO</div>
                <div className="text-wrapper">OM OSS</div>
              </div>
            </div>
            <img className="rectangle-4" alt="Rectangle" src={star} />
            <img className="rectangle-5" alt="Rectangle" src={star} />
            <img className="rectangle-6" alt="Rectangle" src={star} />
            <img className="rectangle-7" alt="Rectangle" src={star} />
            <img className="rectangle-8" alt="Rectangle" src={star} />
            <img className="rectangle-9" alt="Rectangle" src={star} />
            <img className="rectangle-10" alt="Rectangle" src={star} />
            <img className="rectangle-11" alt="Rectangle" src={star} />
            <img className="rectangle-12" alt="Rectangle" src={flower3} />
          </div>
        </div>
    </div>
  );
}

export default App;
