import React from 'react'
import "./about.css"
import MYEDIT from "../../assets/trial.gif"


const About = () => {
  return (
    <div id="about">
       <div className="about__line"></div> 
       <div className="about__top">
        <div className='about top1'></div>
        <div className='about top2'></div>
        <div className='about top3'></div>
      </div>
      {/* <div className="about__line"></div> */}


 <div className="about__content">
      <div className="about__content1">
        <div className='whoiam'>Who I am</div>
       <p className="whoiamp"> I hold a degree in Mechanical Engineering, but my fervor for programming and technology has led me to dedicate the past 3.5 years to mastering diverse tech stacks.</p>       
        <div className="whoiampdiv">Transitioning from a mechanical background, I've honed my skills in various technologies, driven by curiosity and a desire for innovation. Eager to leverage my cross-disciplinary expertise in programming, I bring a unique perspective and a passion for pushing boundaries in the ever-evolving tech landscape.</div>

      </div>
      <div className="about__content2">
        <img src={MYEDIT} alt="PASSION OF CODING" className="myeditedimg" />
      </div>
    </div> 

    </div>
  )
}

export default About