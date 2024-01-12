import Rodape from "./components/Rodape";
import SecaoBanner from "./components/SecaoBanner";
import SecaoExperienciaTrabalho from "./components/SecaoExperienciaTrabalho";
import Topo from "./components/Topo";
import './App.css';
import { useState } from "react";

function App() {

  const [temaEscuro, setTemaEscuro] = useState(false)

  const alterarCor = () => {
    setTemaEscuro(!temaEscuro)
  }

  return (
    <main>
      <Topo alterarCor={alterarCor} temaEscuro={temaEscuro} />
      <SecaoBanner temaEscuro={temaEscuro} />
      <SecaoExperienciaTrabalho temaEscuro={temaEscuro} />
      <Rodape temaEscuro={temaEscuro} />
    </main>

  );
}

export default App;
