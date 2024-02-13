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
        


    {/* 1mg tata project*/}
     <div data-aos="fade-up">
          <div  className='project__return' >
            <div className="projects__name">Nova Gas (Ghana)</div>

            {/* /*used this website ===== https://ezgif.com/maker and postimage ====to amke gif anime lik below link*/ }
            <img src="https://s6.ezgif.com/tmp/ezgif-6-7681d9f5f0.gif" alt="hello" className="project__image"/>
            <div className="project__footer">
              <div>
                <a href="https://github.com/kirankumar3117/1mtata_project" ></a>
               </div>
              <div className="project__discription">
              <p>Responsible for ui design.</p>
              <ul>
                  <li>Api integration</li>
                  <li>Project structure design</li>
                  <li>Component design and state management</li>
                  <li>Secure authontications</li>
              </ul>
               </div>
            <div className="project__a">
              {/* <a href= "https://1mg-gamma.vercel.app/" target="_blank"  className="project__vercel a">Go Live</a> */}
                {/* <a href="https://github.com/kirankumar3117/1mtata_project" target="_blank"><BiGitRepoForked className="project__repo a"/></a> */}
                </div>
               
            </div>
          </div>
          </div>

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
              <p>Mainly focused on front-end ui-design with minimul user flow through server.</p>
              <ul>
                  <li>Used localstorage</li>
                  <li>Authontication & Verfication</li>
                  <li>Api deployment on heroku</li>
                  <li>ES6 funactinalities</li>
              </ul>
               </div>
            <div className="project__a">
              <a href= "https://friendly-sable-65643a.netlify.app/" target="_blank"  className="project__vercel a">Go Live</a>
                <a href="https://github.com/kirankumar3117/snapdeal-unit4" target="_blank"><BiGitRepoForked className="project__repo a"/></a>
                </div>
               
            </div>
          </div>
          </div>


        
        
      </div>
      </div>
     
    </div>
  )
}

export default Projects