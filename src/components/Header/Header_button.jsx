import React from 'react'
import CV from "../../assets/KiranKumar_Resume.pdf"
import styled from "./Header_buttons.module.css"

const Header_button = () => {
  return (
    <div class={styled.header__buttons}>
        <a href={CV} download >
            <button className={styled.downloadcv}>Download CV</button>
        </a>
        <a href="#contact" >
            <button className={styled.header__contact}>Contact</button>
        </a>
    </div>
  )
}

export default Header_button