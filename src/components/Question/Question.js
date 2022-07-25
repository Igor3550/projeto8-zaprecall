import React from "react";

import FlashCard from "../FlashCard/FlashCard";
import hold from '../../assets/images/setinha.png'
import './style.css';

const Question = ({ index, question, setAnswers, answers, questionIconList, setQuestionIconList }) => {
    
  const [turned, setTurned] = React.useState(false);
  const [answer, setAnswer] = React.useState(null)
  const [answered, setAnswered] = React.useState(false)

  function reply (resp) {
    setAnswer(resp)
    setAnswered(true)
    setAnswers([...answers, resp])
    setQuestionIconList([...questionIconList, getAnswerIcon(resp)])
  }

  function getAnswerIcon (resp) {
    switch (resp.text) {
      case 'not':
        //questionIcon = <ion-icon name="close-circle"></ion-icon>
        return <ion-icon class={`color1`} name="close-circle"></ion-icon>
        
      case 'half':
        //questionIcon = <ion-icon name="help-circle"></ion-icon>
        //setQuestionIconList([...questionIconList, (questionIcon)])
        return <ion-icon class={`color2`} name="help-circle"></ion-icon>

      case 'zap':
        //questionIcon = <ion-icon name="checkmark-circle"></ion-icon>
        //setQuestionIconList([...questionIconList, (questionIcon)])
        return <ion-icon class={`color3`} name="checkmark-circle"></ion-icon>

      default:
        break
    }
  }

  const AnsweredCard = () => {
    switch (answer.text) {
      case 'not':
        return (<FlashCard index={index} color={1} answered={true}/>)
        
      case 'half':
        return (<FlashCard index={index} color={2} answered={true}/>)

      case 'zap':
        return (<FlashCard index={index} color={3} answered={true}/>)

      default:
        break;
    }
  }

  return (
    turned ? 
    //
      (
      answered ? 
        <AnsweredCard />  
      :
        (<div className='showQuestion turned' >
          <p>{question.answer}</p>
          <span className="buttons">
            <button onClick={() => reply({text: 'not'})}>Não lembrei</button>
            <button onClick={() => reply({text: 'half'})}>Quase não lembrei</button>
            <button onClick={() => reply({text: 'zap'})}>Zap!</button>
          </span>
        </div>)
      )
    :
      (<div 
        className='showQuestion'
      >
        <p>{question.text}</p>
        <img className="cursor-pointer" src={hold} onClick={() => setTurned(true)}/>
      </div>)
  )
}

export default Question;