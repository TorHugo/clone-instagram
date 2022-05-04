import { BrowserRouter } from "react-router-dom";

import './App.css';
import { Nav } from './Components/header';
import {Rotas} from './routes';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
