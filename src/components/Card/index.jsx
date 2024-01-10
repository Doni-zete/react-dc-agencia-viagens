import './style.css'

export default function Card(props) {
 return (
  <div id="card" className="card-claro">
   <p className="primeiro-paragrafo">{props.data}</p>
   <h4>{props.titulo}</h4>
   <p className="primeiro-segundo">{props.empresa}</p>
   <p>{props.paragrafo}</p>
  </div>
 )
}
