import './App.css';
import Buton from './components/Buton';
import Count from './components/Count';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const driveClick = () => {
    setNumClicks(numClicks + 1);
  };

  const rebootCount = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-div'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='div-principal'>
        <Count numClicks={numClicks} />
        <Buton
          text='Click'
          isClick={true}
          manageClick={driveClick} />
        <Buton
          text='Reboot'
          isClick={false}
          manageClick={rebootCount} />
      </div>
    </div>
  );
}

export default App;
