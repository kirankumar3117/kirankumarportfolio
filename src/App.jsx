import React, {useContext} from 'react';
import './App.css';
import About from './components/About/About';
import Education from './components/Education/Education';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Education/>
    </div>
  );
}

export default App;
