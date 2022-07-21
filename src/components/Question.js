import React from "react";
import FlashCard from "./FlashCard";
import hold from '../assets/images/setinha.png'

const Question = ({ index, question }) => {
    
  const [turned, setTurned] = React.useState(false);

  return (
    turned ? 
    //(<FlashCard index={index} question={{text: 'sadfasdf'}} />)
      (<div className='flash-card showQuestion turned' >
        <p>{question.answer}</p>
        <span className="buttons">
          <button>Não lembrei</button>
          <button>Quase não lembrei</button>
          <button>Zap!</button>
        </span>
      </div>)
    :
      (<div className='flash-card showQuestion'>
        <p>{question.text}</p>
        <img src={hold} onClick={() => setTurned(true)}/>
      </div>)
  )
}

export default Question;