
import './App.css';
import Button from './components/Button.js';
import Contador from './components/Contador';
import freecodecampicon from './images/freecodecampicon.png';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);
  
  const handleClick = () => {
    setNumClics(numClics + 1);
  }
  const resetClick = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className = 'container-icon-freecodecamp'>
        <img 
          className = 'freecodecampicon'
          src = {freecodecampicon}
          alt= 'Icon of freeCodeCamp' 
        />

         </div>
         <div className = 'main-container'>
          <Contador numClics ={numClics}/>
          <Button
            text = 'Click'
            isAClickButton = {true}
            handleClick = {handleClick} />
          <Button
            text = 'Reset'
            isAClickButton = {false}
            handleClick = {resetClick} />

         </div>
    </div>
  );
}

export default App;
