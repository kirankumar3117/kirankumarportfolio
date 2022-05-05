import React from 'react'
import {FaReact} from 'react-icons/fa'
import "./skills.css"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {IoLogoJavascript} from "react-icons/io"
import {DiMongodb} from "react-icons/di"
import {SiExpress} from "react-icons/si"
import {DiNodejsSmall} from "react-icons/di"
import {SiBlender} from "react-icons/si"
import {SiHeroku} from "react-icons/si"
import {SiPostman} from "react-icons/si"
import {SiVercel} from "react-icons/si"
import {DiGit} from "react-icons/di"


import Aos from "aos"
import "aos/dist/aos.css"

const Skils = () => {
  return (
    <div id="skills">
      <div className='skills__container'>
        <div clasName="skills__name"></div>
        <div className="skills__set">
         
         
         <div data-aos="fade-up"> <AiFillHtml5 size="100px" background="blue"/></div>
         <div data-aos="fade-up"> <DiCss3 size="100px" background="blue"/></div>
         <div data-aos="fade-up"> <IoLogoJavascript size="100px" background="blue"/></div>
         <div data-aos="fade-up"> <FaReact size="100px" background="blue"/></div>
         <div data-aos="fade-up"> <DiMongodb size="100px" background="blue"/></div>
         <div data-aos="fade-up"> <SiExpress size="100px" background="blue"/></div>
         <div data-aos="fade-up"> <DiNodejsSmall size="100px" background="blue"/></div>
         <div data-aos="fade-up"> <SiBlender size="100px" background="blue"/></div>
         <div data-aos="fade-up"> <SiHeroku size="100px" background="blue"/></div>
         <div data-aos="fade-up"> <SiPostman size="100px" background="blue"/></div>
         <div data-aos="fade-up"> <DiGit size="100px" background="blue"/></div>
         <div data-aos="fade-up"> <SiVercel size="100px" background="blue"/></div>
        

        </div>
      </div>
   
    </div>
  )
}

export default Skils