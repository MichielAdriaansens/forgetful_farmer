import '../styles/App.css';
import { useState } from 'react';
import Canvas from './Canvas';
import Game from './Game';

function App() {

  const [gameStart, setGameStart] = useState(false);

  function onClickHandler() {
    setGameStart(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Twente Games!!</h1>
      </header>
      {!gameStart ? (
        <img
          src={`${process.env.PUBLIC_URL}/images/American_Gothic.jpg`}
          alt='intro img'
          className='introImg clickable'
          onClick={onClickHandler}
        />
      ) : (
        <Game />
      )}
      <Canvas />
    </div>
  );
}

export default App;
