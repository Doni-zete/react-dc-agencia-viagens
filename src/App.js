import Rodape from "./components/Rodape";
import SecaoBanner from "./components/SecaoBanner";
import SecaoExperienciaTrabalho from "./components/SecaoExperienciaTrabalho";
import Topo from "./components/Topo";
import './App.css';

function App() {
  return (
    <main>
      <Topo />
      <SecaoBanner />
      <SecaoExperienciaTrabalho />
      <Rodape/>
    </main>

  );
}

export default App;
