import React from 'react'
import "./contact.css"
import {SiGmail} from "react-icons/si"
import {ImWhatsapp} from "react-icons/im"
import {GoLocation} from "react-icons/go"


const Contact = () => {
  return (
    <div id="contact">
    <div className="contact__line"></div>
    <div className="contact__name">Contact</div>
    <div className="contact__container">
      <div><a href="mailto:ch.kirankumar311@gmail.com"><SiGmail className="c__bottom"/></a>
      <p>ch.kirankumar311@gmail.com</p>
      </div>
      <div><a href="tel:+917396192829"><ImWhatsapp className="c__bottom"/></a>
      <p>+91 7396192829</p>
      </div>
      <div><a href=""><GoLocation className="c__bottom"/></a>
      <p>Vijayawada , AndhraPradhesh.</p>
      </div>
     
    
    </div>
    
    </div>
  )
}

export default Contact