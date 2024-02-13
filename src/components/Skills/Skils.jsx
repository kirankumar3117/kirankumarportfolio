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
import {SiVercel,SiTypescript,SiRedux} from "react-icons/si"
import {DiGit,DiJava} from "react-icons/di"
import { FaVuejs } from "react-icons/fa";
// import { TbBrandNextjs } from "react-icons/tb";
import { SiNuxtdotjs } from "react-icons/si";

import Aos from "aos"
import "aos/dist/aos.css"

const Skils = () => {
  return (
    <div id="skills">
      <div className="skills__line"></div>
      <div className='skills__container'>
        <div className="skills__name">Skills</div>
        <div className="skills__set">
         
        {/* <div data-aos="fade-up"> <TbBrandNextjs size="60" background="blue"/></div> */}
        <div data-aos="fade-up"> <SiNuxtdotjs size="60" background="blue"/></div>
         <div data-aos="fade-up"> <FaVuejs size="60" background="blue"/></div>
         <div data-aos="fade-up"> <FaReact size="60" background="blue"/></div>
         <div data-aos="fade-up"> <AiFillHtml5 size="60" background="blue"/></div>
         <div data-aos="fade-up"> <DiCss3 size="60" background="blue"/></div>
         <div data-aos="fade-up"> <IoLogoJavascript size="60" background="blue"/></div>
         <div data-aos="fade-up"> <SiTypescript size="60" background="blue"/></div>
         <div data-aos="fade-up"> <SiRedux size="60" background="blue"/></div>
         <div data-aos="fade-up"> <DiMongodb size="60" background="blue"/></div>
         <div data-aos="fade-up"> <SiExpress size="60" background="blue"/></div>
         <div data-aos="fade-up"> <DiNodejsSmall size="60" background="blue"/></div>
         <div data-aos="fade-up"> <SiBlender size="60" background="blue"/></div>
         <div data-aos="fade-up"> <SiHeroku size="60" background="blue"/></div>
         <div data-aos="fade-up"> <SiPostman size="60" background="blue"/></div>
         <div data-aos="fade-up"> <DiGit size="60" background="blue"/></div>
         <div data-aos="fade-up"> <SiVercel size="60" background="blue"/></div>
        

        </div>
      </div>
   
    </div>
  )
}

export default Skils