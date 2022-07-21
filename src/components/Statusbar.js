const Statubar = ({ questionCount, questionIconList }) => {
  return (
    <div className="statusbar">
      <p>{questionCount}/4 CONCLUÍDOS</p>
      {questionIconList}
    </div>
  )
}

export default Statubar;