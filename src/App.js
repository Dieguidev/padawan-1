import Pie from './Pie';
import './App.css';
import Cabecera from './Cabecera';
import Cuerpo from './Cuerpo';
import Fechahora from './FechaHora';
import Menu from './Menu';

function App() {
  return (
    <div className="container">
      <Cabecera/>
      <Menu/>
      <Fechahora/>
      <Cuerpo/>
      <Pie/>
    </div>
  );
}

export default App;
