import logo from '../assets/images/logo.png'

const Landing = () => {
  return (
    <div className="landingPage">
      <img src={logo} />
      <h1>ZapRecall</h1>
      <button>Iniciar Recall!</button>
    </div>
  )
}

export default Landing;