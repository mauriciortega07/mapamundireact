import {Routes, Route} from 'react-router-dom';
import SignIn from "./components/UserSession/SignIn/index.tsx"
import UserSession from './components/UserSession/index.js';
import MainContent from './components/MainContent/index.tsx';
import EuropeContent from './components/MainContent/EuropeContent/index.tsx';
import "./styles/styles.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserSession />}/>
        <Route path="/Inicio" element={<MainContent />}/>
        <Route path='/Continente_Europeo' element = {<EuropeContent />}/>
      </Routes>
    </div>
  );
}

export default App;
