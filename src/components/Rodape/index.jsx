import Logo from '../../assets/logo.png'
import iconeFacebook from '../../assets/facebook.png'
import iconeTwiter from '../../assets/twitter.png'
import iconeLinkedin from '../../assets/linkedin.png'
import iconeDribe from '../../assets/dribble.png'
import iconeBehance from '../../assets/behance.png'
import iconeGoogle from '../../assets/google-plus.png'

export default function Rodape() {
 return (
  <footer>
   <img src={Logo} alt="logoempresa" />
   <img src={iconeFacebook} alt="icone facebook" />
   <img src={iconeTwiter} alt="icone twwitter" />
   <img src={iconeLinkedin} alt="icone linkedin" />
   <img src={iconeDribe} alt="icone Dribe" />
   <img src={iconeBehance} alt="icone behance" />
   <img src={iconeGoogle} alt="icone google" />
   <p>
    Ajudamos a criar uma personalidade digital construindo sua marca no ambiente
    online utilizando estratégias, ferramentas e tecnologias personalizadas.
   </p>

   <p>
    Copyright 2024 <span>Donizete Crisostomo</span>
   </p>
  </footer>
 )
}
