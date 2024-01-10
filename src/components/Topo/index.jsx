import Logo from '../../assets/logo.png'
import IconeLua from '../../assets/moon.png'

import './style.css'

export default function Topo() {
 return (
  <header className="topo-modo-claro">
   <img className="logo" src={Logo} alt="logoimagem" />

   <button className="botao-claro">
    <img className="icone" src={IconeLua} alt="iconeLua" />
   </button>
  </header>
 )
}
