import './App.css';
import { NavBar } from "./componentes/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer";

function App() {
  return (
  <>
  <NavBar /> 
  <ItemListContainer greeting="Bienvenidos"/>
  </>
  );
}
      
export default App;