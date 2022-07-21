import React from 'react';

import logo from '../assets/images/logo.png'

const Landing = () => {

  const [hidePage, setHidePage] = React.useState(true)

  return (

    hidePage ? 
      (<></>)
    : 
      (
        <div className="landingPage">
          <img src={logo} />
          <h1>ZapRecall</h1>
          <button onClick={() => setHidePage(true)}>Iniciar Recall!</button>
        </div>
      )
  )
}

export default Landing;