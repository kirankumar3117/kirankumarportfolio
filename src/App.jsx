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

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* <Allprojects/> */}
      {/* <Followme/> */}
      {/* <About/>
      <Education/>
      <Skills/> */}
    </div>
  );
}

export default App;
