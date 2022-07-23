import React from "react";

import Landing from './Landing'
import Header from "./Header";
import Statubar from "./Statusbar";
import FlashCard from "./FlashCard";

const questionsArray = [
  {
    text: 'O que é JSX?',
    answer: 'Uma extensão de linguagem do JavaScript'
  },
  {
    text: 'O React é',
    answer: 'uma biblioteca JavaScript para construção de interfaces'
  },
  {
    text: 'Componentes devem iniciar com __',
    answer: 'letra maiúscula'
  },
  {
    text: 'Podemos colocar __ dentro do JSX',
    answer: 'expressões'
  },
  {
    text: 'O ReactDOM nos ajuda __ ',
    answer: 'interagindo com a DOM para colocar componentes React na mesma'
  },
  {
    text: 'Usamos o npm para __',
    answer: 'gerenciar os pacotes necessários e suas dependências'
  },
  {
    text: 'Usamos props para __',
    answer: 'passar diferentes informações para componentes'
  },
  {
    text: 'Usamos estado (state) para __',
    answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
  },
]

function comparador() { 
	return Math.random() - 0.5; 
}

const Questions = ({ zapGoal, setZapGoal }) => {

  const [answers, setAnswers] = React.useState([])
  const [questionIconList, setQuestionIconList] = React.useState([<></>])
  const [restartPage, setRestartPage] = React.useState(false)
  //const [zapGoal, setZapGoal] = React.useState(1)

  const questionList = getQuestions()

  function getQuestions () {
    const arrayOfQuestions = questionsArray.sort(comparador)
    return arrayOfQuestions.slice(0, 4);
  }

  return (
    restartPage ? <Landing setHideLandingPage={setRestartPage} hideLandingPage={restartPage}/> :
    <div className="questions">
      <Header />
      
      {questionList.map((item, index) => {
        return (
          <FlashCard 
            key={index} 
            index={index} 
            question={item} 
            setAnswers={setAnswers} 
            answers={answers}
            questionIconList={questionIconList}
            setQuestionIconList={setQuestionIconList} 
          />
        )
      })}

      <Statubar 
        answers={answers} 
        setAnswers={setAnswers}
        questionIconList={questionIconList} 
        setQuestionIconList={setQuestionIconList}
        restartPage={restartPage}
        setRestartPage={setRestartPage}
        zapGoal={zapGoal}
        setZapGoal={setZapGoal}
      />
    </div>
  )
}

export default Questions;