import React from 'react'
import "./contact.css"
import {SiGmail} from "react-icons/si"
import {ImWhatsapp} from "react-icons/im"
import {GoLocation} from "react-icons/go"
import Footer from './Footer'

const Contact = () => {
  return (
    <div id="contact">
    <div className="contact__line"></div>
    <div className="contact__name">Contact</div>
    <div className="contact__container">
      <div><SiGmail className="c__bottom"/>
      <p>ch.kirankumar311@gmail.com</p>
      </div>
      <div><ImWhatsapp className="c__bottom"/>
      <p>+91 7396192829</p>
      </div>
      <div><GoLocation className="c__bottom"/>
      <p>Vijayawada , AndhraPradhesh.</p>
      </div>
     
    
    </div>
    <Footer/>
    </div>
  )
}

export default Contact