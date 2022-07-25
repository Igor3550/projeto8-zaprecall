import React from 'react';

import Landing from './Landing/Landing'
import Questions from './Questions/Questions';
import './style.css';


function App () {
  
  const [hideLandingPage, setHideLandingPage] = React.useState(false);
  const [zapGoal, setZapGoal] = React.useState('')
  const [zapDeck, setZapDeck] = React.useState(0)
  const [restartPage, setRestartPage] = React.useState(false);

  return (
    <div className="page">
      {hideLandingPage ?
        <Questions 
        zapGoal={zapGoal} 
        setZapGoal={setZapGoal} 
        zapDeck={zapDeck} 
        setZapDeck={setZapDeck}
        restartPage={restartPage}
        setRestartPage={setRestartPage}
      />
      :
        <Landing 
          setHideLandingPage={setHideLandingPage} 
          hideLandingPage={hideLandingPage} 
          zapGoal={zapGoal} 
          setZapGoal={setZapGoal}
          zapDeck={zapDeck}
          setZapDeck={setZapDeck}
          restartPage={restartPage}
        />
      }
    </div>
  )
}

export default App;