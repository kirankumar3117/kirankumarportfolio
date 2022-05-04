import React from 'react'
import CV from "../../assets/kiran_resume.pdf"

const Header_button = () => {
  return (
    <div class="header__buttons">
        <a href={CV} download >
            <button className="downloadcv">Download CV</button>
        </a>
        <a href="#contact" >
            <button className="header__contact">Contact</button>
        </a>
    </div>
  )
}

export default Header_button