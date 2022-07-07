import React, {useContext} from 'react';
import './App.css';
import About from './components/About/About';
import Education from './components/Education/Education';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skils';
import Contact from "./components/Contact/Contact";
import Allprojects from './components/allprojects/Allprojects';
// import Followme from "./Followme/Followme"
import {Routes,Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path={""} element={<LandingPage/>}/>
        <Route path={"allprojects"} element={<Allprojects/>}/>
      </Routes>
      {/* <Allprojects/> */}
      {/* <Followme/> */}
      {/* <About/>
      <Education/>
      <Skills/> */}
    </div>
  );
}

export default App;
