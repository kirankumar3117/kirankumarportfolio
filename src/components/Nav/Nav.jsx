import React from 'react';
import {useState} from "react";
import {SiAboutdotme} from "react-icons/si";

import "./nav.css";
import {AiOutlineHome,AiOutlineFundProjectionScreen} from "react-icons/ai";
import {GiSkills} from "react-icons/gi";
import {GoProject} from "react-icons/go";
import {GrContact} from "react-icons/gr";
import {RiContactsFill} from "react-icons/ri";
import {ImTree} from "react-icons/im";
const Nav = () => {
  const [activenav, setactivenav] = useState("#")
  return (
    <div>
      <nav>
        <a href="#" onClick={() =>{
          setactivenav("#")
        }} className={activenav === "#" ? "active":""}>
        <AiOutlineHome className="nav__socials"/>
        </a>
        <a href="#about"  onClick={() =>{
          setactivenav("#about")
        }} className={activenav === "#about" ? "active":""}>
       <RiContactsFill className="nav__socials"/>
        </a>
        <a href="#skills" onClick={() =>{
          setactivenav("#skills")
        }} className={activenav === "#skills" ? "active":""}>
          <ImTree className="nav__socials"/>
        </a>
        <a href="#projects" onClick={() =>{
          setactivenav("#projects")
        }} className={activenav === "#projects" ? "active":""}>
         <AiOutlineFundProjectionScreen className="nav__socials"/>
        </a>
        <a href="#contact" onClick={() =>{
          setactivenav("#contact")
        }} className={activenav === "#contact" ? "active":""}>
         <GrContact className="nav__socials"/>
        </a>
        
      </nav>
    </div>
  )
}

export default Nav