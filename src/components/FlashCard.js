import React from 'react';
import Question from './Question';

import play from '../assets/images/play.png'


const FlashCard = ({ index, question }) => {
  
  const [showQuestion, setShowQuestion] = React.useState(false);

  return (
    showQuestion ?
      (<Question index={index} question={question}/>)
    :
      (<div className="flash-card" onClick={() => setShowQuestion(true)}>
        <p>Pergunta {index+1}</p>
        <img src={play} />
      </div>)
  )
}

export default FlashCard;