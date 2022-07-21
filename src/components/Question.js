import React from "react";
import FlashCard from "./FlashCard";
import hold from '../assets/images/setinha.png'

const Question = ({ index, question, setQuestionCount, questionCount }) => {
    
  const [turned, setTurned] = React.useState(false);
  const [answer, setAnswer] = React.useState(null)
  const [answered, setAnswered] = React.useState(false)

  function reply (answer) {
    setQuestionCount(questionCount+1)
    setAnswer(answer)
    setAnswered(true)
  }

  const AnsweredCard = () => {
    switch (answer) {
      case 1:
        return (<FlashCard index={index} color={1} answered={true}/>)
        
      case 2:
        return (<FlashCard index={index} color={2} answered={true}/>)

      case 3:
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
        (<div className='flash-card showQuestion turned' >
          <p>{question.answer}</p>
          <span className="buttons">
            <button onClick={() => reply(1)}>Não lembrei</button>
            <button onClick={() => reply(2)}>Quase não lembrei</button>
            <button onClick={() => reply(3)}>Zap!</button>
          </span>
        </div>)
      )
    :
      (<div className='flash-card showQuestion'>
        <p>{question.text}</p>
        <img src={hold} onClick={() => setTurned(true)}/>
      </div>)
  )
}

export default Question;