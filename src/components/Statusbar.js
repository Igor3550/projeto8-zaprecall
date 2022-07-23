import React from "react";
import Questions from "./Questions";

import succesIcon from '../assets/images/party.png';
import failureIcon from '../assets/images/sad.png';

const Statubar = ({ answers, setAnswers, questionIconList, setQuestionIconList, setRestartPage, restartPage }) => {

  const [resultMessage, setResultMessage] = React.useState({title:'', text:'', img:succesIcon});

  if(answers.length > 3 && resultMessage.title === ''){

    let isNot = answers.filter(answer => answer.text === 'not');
    if(isNot.length > 0){
      let message = 'Ainda faltam alguns... Mas não desanime!'
      setResultMessage({title:"Putz...", text:message, img:failureIcon})
    }else{
      let message = 'Você não esqueceu de nenhum flashcard!'
      setResultMessage({title:'Parabéns!', text:message, img:succesIcon})
    }
  }

  return (
    restartPage ? <Questions />
    : 
      (<div className="statusbar">
        
        {resultMessage.title === '' ? <></> :
          <div className="result-message" >
            <span>
              <img src={resultMessage.img} />
              {resultMessage.title}
            </span>
            <p>{resultMessage.text}</p>
          </div>
        }

        <p>{answers.length}/4 CONCLUÍDOS</p>
        <div className="questionIcons">
          {questionIconList.map((icon, index) => {
            return (
              <span key={index}>{icon}</span>
            )
          })}
        </div>

        {resultMessage.title === '' ? <></> :
          <button className="restart-button" onClick={() => {
            setRestartPage(true)
            setAnswers([])
            setQuestionIconList([<></>])
          }}>
            REINICIAR RECALL
          </button>
        }
      </div>)
  )
}

export default Statubar;