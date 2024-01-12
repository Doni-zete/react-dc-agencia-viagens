import Logo from '../../assets/logo.png'
import iconeFacebook from '../../assets/facebook.png'
import iconeTwiter from '../../assets/twitter.png'
import iconeLinkedin from '../../assets/linkedin.png'
import iconeDribe from '../../assets/dribble.png'
import iconeBehance from '../../assets/behance.png'
import iconeGoogle from '../../assets/google-plus.png'

import './style.css'

export default function Rodape(props) {
 return (
  <footer className={props.temaEscuro ? 'rodape-escuro' : 'rodape-claro'}>
   <img src={Logo} alt="logoempresa" />

   <p className="paragrafo">
    Ajudamos a criar uma personalidade digital construindo sua marca no ambiente
    online utilizando estratégias, ferramentas e tecnologias personalizadas.
   </p>

   <div className="iconesRodape">
    <img src={iconeFacebook} alt="icone facebook" />
    <img src={iconeTwiter} alt="icone twwitter" />
    <img src={iconeLinkedin} alt="icone linkedin" />
    <img src={iconeDribe} alt="icone Dribe" />
    <img src={iconeBehance} alt="icone behance" />
    <img src={iconeGoogle} alt="icone google" />
   </div>

   <p className= "copyright">
    Copyright 2024 &copy;
    <a href="https://github.com/Doni-zete" target="_blank" rel="noreferrer">
     <span>Donizete Crisostomo</span>{' '}
    </a>
   </p>
  </footer>
 )
}
