import React from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Education from '../components/Education/Education'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Projects from '../components/Projects/Projects'
import Skills from "../components/Skills/Skils"

const LandingPage = () => {
  return (
    <div>
         <Header/>
      <Nav/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default LandingPage