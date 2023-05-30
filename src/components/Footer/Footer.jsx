import valorLogo from '../../assets/valor.png'
import '../Footer/Footer.css'

export default function Footer() {
  return (
    <footer className='Footer'>
        <p>Create with</p>
        <img className='valor-logo' src={valorLogo} alt='Valor' />
        <p>by Nahuel Orselli</p>
    </footer>
  )
}
