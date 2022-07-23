import React from 'react';

import Landing from './Landing'
import Questions from './Questions';
import './style.css';

function App () {

  const [hideLandingPage, setHideLandingPage] = React.useState(false);
  const [zapGoal, setZapGoal] = React.useState(1)

  return (
    <div className="page">
      {hideLandingPage ?
        <Questions zapGoal={zapGoal} setZapGoal={setZapGoal} />
      :
        <Landing 
          setHideLandingPage={setHideLandingPage} 
          hideLandingPage={hideLandingPage} 
          zapGoal={zapGoal} 
          setZapGoal={setZapGoal}
        />
      }
    </div>
  )
}

export default App;