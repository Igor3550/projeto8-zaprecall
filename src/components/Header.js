import { motion } from 'framer-motion';
import logo from '../assets/images/logo-pequeno.png';

const Header = () => {
  return (
    <motion.div initial={{ y: '-100vh' }} animate={{ y: 0 }} className='header'>
      <img src={logo} />
      <h1>ZapRecall</h1>
    </motion.div>
  )
}

export default Header;