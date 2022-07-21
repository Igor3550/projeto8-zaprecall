import React from "react";

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

const Questions = () => {

  const [questionCount, setQuestionCount] = React.useState(0)
  const [questionIconList, setQuestionIconList] = React.useState((<></>))
  const questionList = getQuestions()

  function getQuestions () {
    const arrayOfQuestions = questionsArray.sort(comparador)
    return arrayOfQuestions.slice(0, 4);
  }

  return (
    <div className="questions">
      <Header />
      
      {questionList.map((item, index) => {
        return (
          <FlashCard 
            key={index} 
            index={index} 
            question={item} 
            setQuestionCount={setQuestionCount} 
            questionCount={questionCount}
            questionIconList={questionIconList}
            setQuestionIconList={setQuestionIconList} 
          />
        )
      })}

      <Statubar questionCount={questionCount} questionIconList={questionIconList} />
    </div>
  )
}

export default Questions;