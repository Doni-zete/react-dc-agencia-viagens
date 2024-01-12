import Logo from '../../assets/logo.png'
import IconeLua from '../../assets/moon.png'
import IconeSol from '../../assets/sun.png'
import './style.css'

export default function Topo(props) {
 return (
  <header className={props.temaEscuro ? 'topo-modo-escuro' : 'topo-modo-claro'}>
   <img className="logo" src={Logo} alt="logoimagem" />

   <button
    onClick={props.alterarCor}
    className={props.temaEscuro ? 'botao-escuro' : 'botao-claro'}
   >
    <img
     className="icone"
     src={props.temaEscuro ? IconeSol : IconeLua}
     alt="iconeSol"
    />
   </button>
  </header>
 )
}
