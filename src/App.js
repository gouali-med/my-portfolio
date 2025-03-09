import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';



import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <SideBar>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/Home" element={ <Home/>} />
        <Route path="/About" element={ <About/>} />
        <Route path="/Resume" element={ <Resume/>} />
        <Route path="/Projects" element={ <Projects/>} />
        <Route path="/Contact" element={ <Contact/>} />

        

      </Routes>
      </SideBar>
    </BrowserRouter>
     




  );
}

export default App;
