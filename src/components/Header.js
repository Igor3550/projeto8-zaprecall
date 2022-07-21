import logo from '../assets/images/logo-pequeno.png';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} />
      <h1>ZapRecall</h1>
    </div>
  )
}

export default Header;