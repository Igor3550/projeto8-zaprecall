import React from "react";

import succesIcon from '../assets/images/party.png';
import failureIcon from '../assets/images/sad.png';

const Statubar = ({ answers, questionIconList }) => {

  const [resultMessage, setResultMessage] = React.useState({title:'', text:'', img:succesIcon});

  if(answers.length > 3 && resultMessage.title === ''){
    // TA BUGADO AQUI
    let isNot = answers.filter(answer => answer.text === 'not');
    if(isNot.length > 0){
      let message = 'Ainda faltam alguns...Mas não desanime!'
      setResultMessage({title:"Putz...", text:message, img:failureIcon})
    }else{
      let message = 'Você não esqueceu de nenhum flashcard!'
      setResultMessage({title:'Parabéns!', text:message, img:succesIcon})
    }
    console.log(isNot);
  }

  return (
    <div className="statusbar">
      
      {resultMessage.title === '' ? <></> :
        <p className="result-message" >
          <span>
            <img src={resultMessage.img} />
            {resultMessage.title}
          </span>
          <p>{resultMessage.text}</p>
        </p>
      }

      <p>{answers.length}/4 CONCLUÍDOS</p>
      <div className="questionIcons">
        {questionIconList.map((icon, index) => {
          return (
            <span key={index}>{icon}</span>
          )
        })}
      </div>
    </div>
  )
}

export default Statubar;