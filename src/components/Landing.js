import React from 'react';

import logo from '../assets/images/logo.png'

const Landing = ({ setHideLandingPage }) => {

  function hidePage () {
    setHideLandingPage(true);
  }

  return (
    <div className="landingPage">
      <img src={logo} />
      <h1>ZapRecall</h1>
      <button onClick={hidePage}>Iniciar Recall!</button>
    </div>
  )
}

export default Landing;