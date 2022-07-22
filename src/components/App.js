import React from 'react';

import Landing from './Landing'
import Questions from './Questions';
import './style.css';

function App () {

  const [hideLandingPage, setHideLandingPage] = React.useState(false);

  return (
    <div className="page">
      {hideLandingPage ?
        <Questions />
      :
        <Landing setHideLandingPage={setHideLandingPage}/>
      }
    </div>
  )
}

export default App;