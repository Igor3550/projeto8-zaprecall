import React from 'react';
import Question from './Question';

import play from '../assets/images/play.png'

const FlashCard = ({ index, question, answered=false, color=0, setQuestionCount, questionCount, questionIconList, setQuestionIconList }) => {

  const [showQuestion, setShowQuestion] = React.useState(false);
  let questionIcon = (<></>)

  function getAnswerIcon () {
    switch (color) {
      case 1:
        questionIcon = <ion-icon name="close-circle"></ion-icon>
        //setQuestionIconList(questionIcon)
        return (questionIcon)
        
      case 2:
        questionIcon = <ion-icon name="help-circle"></ion-icon>
        //setQuestionIconList([...questionIconList, (questionIcon)])
        return (questionIcon)

      case 3:
        questionIcon = <ion-icon name="checkmark-circle"></ion-icon>
        //setQuestionIconList([...questionIconList, (questionIcon)])
        return (questionIcon)

      default:
        break;
    }
    return 
  }

  const Card = () => {
    return (
      answered ?
        (<div className={`flash-card color${color}`} onClick={() => console.log() }>
          <p>Pergunta {index+1}</p>
          {getAnswerIcon()}
        </div>)
      :
        (<div className="flash-card" onClick={() => setShowQuestion(true)}>
        <p>Pergunta {index+1}</p>
        <img src={play} />
      </div>)
    )
  }

  return (
    showQuestion ?
      (<Question 
        index={index} 
        question={question} 
        questionCount={questionCount} 
        setQuestionCount={setQuestionCount} 
      />)
    :
      (<Card />)
  )
}

export default FlashCard;