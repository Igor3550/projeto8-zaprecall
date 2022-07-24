import React from 'react';
import { motion } from 'framer-motion'

import logo from '../assets/images/logo.png'

const Landing = ({ 
  setHideLandingPage, 
  hideLandingPage, 
  zapGoal, 
  setZapGoal,
  zapDeck,
  setZapDeck,
  restartPage
}) => {

  function hidePage () {
    setHideLandingPage(!hideLandingPage);
  }

  const Input = () => {
    return (
      <input 
        className='goal-input'
        type='number' 
        placeholder='Digite sua meta de zaps...' 
        value={zapGoal} 
        onChange={(e) => setZapGoal(e.target.value)} 
      />
    )
  }
    
  const Select = () => {
    return (
      <select className="deck-select cursor-pointer" value={zapDeck} onChange={(e) => setZapDeck(e.target.value)}>
        <option value={0}>Escolha seu deck</option>
        <option value={1}>React</option>
        <option value={2}>Naruto</option>
        <option value={3}>Dragon Ball</option>
      </select>
    )
  }

  return (
    <motion.div 
      className="landingPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={logo} />
      <h1>ZapRecall</h1>
      {restartPage ?
          <></>
        :
        <>
          <Input />
          <Select />
        </>
        }
      {( zapGoal < 1 || zapGoal > 4 || zapDeck < 1) ? 
        <button className='disable-button'>Iniciar Recall!</button>
      : 
        <button onClick={hidePage}>Iniciar Recall!</button>
      }
    </motion.div>
  )
}

export default Landing;