import React from "react";

import Landing from './Landing'
import Header from "./Header";
import Statubar from "./Statusbar";
import FlashCard from "./FlashCard";

const decksArray = [
  {
    id: 1,
    title:"React",
    questions: [
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
  ]},

  {
    id: 2,
    title: 'Naruto',
    questions: [
    {
      text: 'Qual era o nome da esposa de Hashirama Senju?',
      answer: 'Mito Uzumaki'
    },
    {
      text: 'Qual o nome do segundo hokage da Vila da Folha?',
      answer: 'Tobirama Senju'
    },
    {
      text: 'Quem é o único ninja a conseguir o título de chunnin depois da prova realizada na fase clássica do anime?',
      answer: 'Shikamaru Nara'
    },
    {
      text: 'Qual o nome do jutsu utilizado por Hinata na luta contra Pain em Naruto Shippuden?',
      answer: 'Punho de leões gêmeos'
    },
    {
      text: 'Qual o nome da primeira usuária de chakra da história ninja?',
      answer: 'Kaguya Otsutsuki'
    },
    {
      text: 'Qual o título do livro escrito por Jiraya e que sempre é lido por Kakashi?',
      answer: 'Jardim dos Amassos'
    },
  ]},

  {
    id: 3,
    title: 'Dragon Ball',
    questions: [
    {
      text: 'Qual o nome da forma animal de Goku?',
      answer: 'Oozaru'
    },
    {
      text: 'Qual o nome do filho de Goku?',
      answer: 'Gohan'
    },
    {
      text: 'Qual o nome do filho de Vegeta?',
      answer: 'Trunks'
    },
    {
      text: 'Qual o nome do avô adotivo terráqueo de Goku?',
      answer: 'Gohan'
    },
    {
      text: 'Qual o nome da primeira tranformação de Goku',
      answer: 'Super Sayajin'
    },
  ]}
]

function comparador() { 
	return Math.random() - 0.5; 
}

const Questions = ({ zapGoal, setZapGoal, zapDeck, setZapDeck, restartPage, setRestartPage }) => {

  const [answers, setAnswers] = React.useState([]);
  const [questionIconList, setQuestionIconList] = React.useState([<></>]);

  const [questionList, setQuestionList] = React.useState(getQuestions(parseInt(zapDeck)));

  function getQuestions (deckId) {

    const arrayOfQuestions = (decksArray.filter((item) => {if(item.id === deckId) return item} ))
    let arrayDeck = arrayOfQuestions[0].questions
    arrayDeck.sort(comparador);

    return arrayDeck.slice(0, 4);
  }

  return (
    restartPage ? <Landing setHideLandingPage={setRestartPage} hideLandingPage={restartPage} restartPage={restartPage} /> :
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