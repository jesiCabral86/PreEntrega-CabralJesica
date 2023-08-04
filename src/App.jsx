import './App.css';
import { NavBar } from './componentes/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer';

function App() {
  return (
  <div>
  <NavBar /> 
  <ItemListContainer greeting="Bienvenidos!!!"></ItemListContainer>
  </div>
  );
}
      
export default App;
