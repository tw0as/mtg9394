import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProdCard from './components/Cards/ProdCard/ProdCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Welcome to Old School MTG"/>
      <ProdCard />
    </div>
  );
}

export default App;
