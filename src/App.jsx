import React, {useContext} from 'react';
import './App.css';
import About from './components/About/About';
import Education from './components/Education/Education';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Education/>
    </div>
  );
}

export default App;
