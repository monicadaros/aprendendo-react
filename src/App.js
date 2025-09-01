import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';  

function App() {
  return (<Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/empresa">Empresa</Link></li>
      <li><Link to="/contato">Contato</Link></li>
    </ul>
    <Routes>
      <Route exact patch="/" element= {<Home/>} ></Route>
      <Route patch="/empresa" element= {<Empresa/>} > </Route>
      <Route patch="/contato" element= {<Contato/>} ></Route>
    </Routes>
  </Router>
    
  );
}

export default App;
