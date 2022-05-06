import React from 'react'
import "./projects.css"
import Project from "./projectslist"

import "aos/dist/aos.css"
import {SiVercel} from "react-icons/si"
import {BiGitRepoForked} from "react-icons/bi"

const Projects = () => {
  console.log(Project.image)
  return (
    <div id="projects">
      <div className="projects__line"></div>
      <div className="projects__container">
      <div className="project__name">Projects</div>
      <div className="projects__sets">
        
      {/* snap deal project */}
        <div data-aos="fade-up">
          <div  className='project__return' >
            <div className="projects__name">Snapdeal</div>

            {/* /*used this website ===== https://ezgif.com/maker and postimage ====to amke gif anime lik below link*/ }
            <img src="https://i.postimg.cc/L6HwVG3x/snapgif.gif" alt="hello" className="project__image"/>
            <div className="project__footer">
              <div>
                <a href="https://github.com/kirankumar3117/snapdeal-unit4" ></a>
               </div>
              <div className="project__discription">
              <p>Mainly focused on backend part for the minimul user flow through server.</p>
              <ul>
                  <li>Used The rest Api</li>
                  <li>An accurate ui design</li>
                  <li>Api deployment on heroku</li>
                  <li>ES6 funactinalities</li>
              </ul>
               </div>
            <div className="project__a">
              <a href= "https://friendly-sable-65643a.netlify.app/" target="_blank"><SiVercel className="project__vercel a"/></a>
                <a href="https://github.com/kirankumar3117/snapdeal-unit4" target="_blank"><BiGitRepoForked className="project__repo a"/></a>
                </div>
               
            </div>
          </div>
          </div>


          {/*  shopbop project */}
        <div data-aos="fade-up">
          <div  className='project__return' >
            <div className="projects__name">Shopbop</div>

            {/* /*used this website ===== https://ezgif.com/maker and postimage ====to amke gif anime lik below link*/ }
            <img src="https://i.postimg.cc/4xGjKNJd/shopbop.gif" alt="shopbop" className="project__image"/>
            <div className="project__footer">
              {/* <div>
                <a href="https://github.com/kirankumar3117/shopbop" ></a>
               </div> */}
              <div className="project__discription">
              <p>Focused on UI Design and Effectively used the local storage.</p>
              <ul>
                  <li>SignUp and Login Using Localstorage</li>
                  <li>An accurate ui design</li>
                  <li>Soring methods</li>
                  <li>Different page sections</li>
              </ul>
               </div>
            <div className="project__a">
              <a href= "https://dynamic-florentine-94b127.netlify.app/" target="_blank"><SiVercel className="project__vercel a"/></a>
                <a href="https://github.com/kirankumar3117/shopbop" target="_blank"><BiGitRepoForked className="project__repo a"/></a>
                </div>
               
            </div>
          </div>
          </div>
        
      </div>
      </div>
      <div className="project__view">View more-{`>`}</div>
    </div>
  )
}

export default Projects