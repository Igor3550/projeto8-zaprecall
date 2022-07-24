import React from "react";
import { motion } from 'framer-motion';

import Questions from "./Questions";

import succesIcon from '../assets/images/party.png';
import failureIcon from '../assets/images/sad.png';

const Statubar = ({ 
  answers, 
  setAnswers, 
  questionIconList, 
  setQuestionIconList, 
  setRestartPage, 
  restartPage, 
  zapGoal 
}) => {

  const [resultMessage, setResultMessage] = React.useState({title:'', text:'', img:succesIcon});

  if(answers.length > 3 && resultMessage.title === ''){

    let isZapList = answers.filter(answer => answer.text === 'zap');
    if(isZapList.length < zapGoal){
      let message = `Você não cumpriu sua meta de ${zapGoal} zaps... Mas não desanime!`
      setResultMessage({title:"Putz...", text:message, img:failureIcon})
    }else{
      let message = `Você conseguiu bater sua meta de ${zapGoal} zaps!`
      setResultMessage({title:'Parabéns!', text:message, img:succesIcon})
    }
  }

  return (
    restartPage ? <Questions />
    : 
      (<motion.div initial={{ y: '100vh' }} animate={{ y: 0 }} className="statusbar">
        
        {resultMessage.title === '' ? <></> :
          <motion.div 
            className="result-message" 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
          >
            <span>
              <img src={resultMessage.img} />
              {resultMessage.title}
            </span>
            <p>{resultMessage.text}</p>
          </motion.div>
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
      </motion.div>)
  )
}

export default Statubar;