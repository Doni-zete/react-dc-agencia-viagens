import Logo from '../../assets/logo.png'
import IconeLua from '../../assets/moon.png'

export default function Topo() {
 return (
  <header>
   <img src={Logo} alt="logoimagem" />

   <button>
    <img src={IconeLua} alt="iconeLua" />
   </button>
  </header>
 )
}
