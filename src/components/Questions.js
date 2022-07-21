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

  function getQuestions () {
    const arrayOfQuestions = questionsArray.sort(comparador)
    return arrayOfQuestions.slice(0, 4);
  }

  const questionList = getQuestions()

  return (
    <div className="questions">
      <Header />
      
      {questionList.map((item, index) => {
        return (
          <FlashCard key={index} index={index} question={item} />
        )
      })}

      <Statubar />
    </div>
  )
}

export default Questions;

/*
1. **Q:** O que é JSX? **R:** Uma extensão de linguagem do JavaScript
2. **Q:** O React é __ **R:** uma biblioteca JavaScript para construção de interfaces
3. **Q:** Componentes devem iniciar com __ **R:** letra maiúscula
4. **Q:** Podemos colocar __ dentro do JSX **R:** expressões
5. **Q:** O ReactDOM nos ajuda __ **R:** interagindo com a DOM para colocar componentes React na mesma
6. **Q:** Usamos o npm para __ **R:** gerenciar os pacotes necessários e suas dependências
7. **Q:** Usamos props para __ **R:** passar diferentes informações para componentes 
8. **Q:** Usamos estado (state) para __ **R:** dizer para o React quais informações quando atualizadas devem renderizar a tela novamente
*/