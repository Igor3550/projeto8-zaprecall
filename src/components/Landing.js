import React from 'react';
import { motion } from 'framer-motion'

import logo from '../assets/images/logo.png'

const Landing = ({ setHideLandingPage, hideLandingPage, zapGoal, setZapGoal}) => {

  function hidePage () {
    setHideLandingPage(!hideLandingPage);
  }

  return (
    <motion.div 
      className="landingPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={logo} />
      <h1>ZapRecall</h1>
      {//<input type='number' value={zapGoal} onChange={(e) => setZapGoal(e)} />}
      }
      <button onClick={hidePage}>Iniciar Recall!</button>
    </motion.div>
  )
}

export default Landing;