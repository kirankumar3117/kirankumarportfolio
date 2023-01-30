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
            <div className="projects__name">1mgtata</div>

            {/* /*used this website ===== https://ezgif.com/maker and postimage ====to amke gif anime lik below link*/ }
            <img src="https://media.tenor.com/images/fae2f53c37ed325ad232e7536aaf11f8/tenor.gif" alt="hello" className="project__image"/>
            <div className="project__footer">
              <div>
                <a href="https://github.com/kirankumar3117/1mtata_project" ></a>
               </div>
              <div className="project__discription">
              <p>All india access for users through mobile otp .user data stored in server.</p>
              <ul>
                  <li>Used The rest Api</li>
                  <li>Uniq firebase mobile otp authontication</li>
                  <li>Built in with redux and reactjs</li>
                  <li>User state management</li>
              </ul>
               </div>
            <div className="project__a">
              <a href= "https://1mg-gamma.vercel.app/" target="_blank"  className="project__vercel a">Go Live</a>
                <a href="https://github.com/kirankumar3117/1mtata_project" target="_blank"><BiGitRepoForked className="project__repo a"/></a>
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