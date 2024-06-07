import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
// import "bootstrap/dist/css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Component/Route/Route';
import GameContext from './Component/Context/context';
function App() {
  return (
   <>
   <GameContext>
   <BrowserRouter>
   <Header/>
   </BrowserRouter>
   </GameContext>
   </>
  );
}

export default App;
