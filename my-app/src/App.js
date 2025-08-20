import './App.css';
import HelloWord from './components/HelloWord';
import Pessoas from './components/Pessoas';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Maria"
  return (
    <div className="App">
      <HelloWord />
      <Frase />
      <Frase />
      <List/>
      <Pessoas 
        nome="Monica" idade="32" profissao="Professora" 
      />
    </div>
  );
}

export default App;
