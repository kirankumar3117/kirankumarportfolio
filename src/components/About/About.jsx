import React from 'react'
import "./about.css"
import MYEDIT from "../../assets/workin.png"

const About = () => {
  return (
    <div id="about">
      <div className="about__top">
        <div className='about__top1'></div>
        <div className='about__top2'></div>
        <div className='about__top3'></div>
      </div>


    <div className="about__content">
      <div className="about__content1">
        <div className='whoiam'>Who I am</div>
       <p> My name's kiran kumar. I've recently completed a skill development course from Masai School with strong background in Full-Stack Web Development, Data Structures And Algorithms.</p>       
        <div>During The Course I Have Done Countless Of Projects Individualy.and Done Three Collaborative Projects. I spent my leisure hours writing codes and blogs. Right now I'm also trying a hand at mastering the skills i have learned, and I love to learn and explore new arenas.</div>

      </div>
      <div className="about__content2">
        <img src={MYEDIT} alt="PASSION OF CODING" className="myeditedimg" />
      </div>
    </div>

    </div>
  )
}

export default About