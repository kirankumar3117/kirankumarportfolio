import React from 'react'
import "./contact.css"
import {SiGmail} from "react-icons/si"
import {ImWhatsapp} from "react-icons/im"
import {GoLocation} from "react-icons/go"
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {BsInstagram,BsMedium} from "react-icons/bs"
import Allprojects from '../allprojects/Allprojects'
import {BrowserRouter as Router,Route,
  Redirect,Switch} from 'react-router-dom';



const Contact = () => {
  const sendEmail=(event)=>{
    event.preventDefault()
    alert("Message sent")
  }
  return (
    <div id="contact">
    <button className="viewmore" onClick={()=>{
        
        
        
      }}>View More </button>
    <div className="contact__line"></div>

    <div className="contact__name">Contact</div>


    <div className="contact__form">

    <div className="form">
      <form action="" onSubmit={sendEmail
      
      }>
        <input type="text" placeholder='Enter Your Name'/>
        <input type="email" placeholder='Enter Your Email..' required/>
        <input type="text" placeholder='Please write something...' required/>
       <input type="submit" value="Send"/  >
      </form>
    </div>

    </div>



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

      <div className='contact__socials'>

        <a href="https://github.com/kirankumar3117" target="__blank"><AiFillGithub className="contact__footersocials"/></a>
        <a href="https://www.linkedin.com/in/kirankumar3117/" target="__blank"><AiFillLinkedin className="contact__footersocials"/></a>
        <a href="https://www.instagram.com/ch.kirankumar311/" target="__blank"><BsInstagram className="contact__footersocials"/></a>
        <a href="https://medium.com/@ch.kirankumar311" target="__blank"><BsMedium className="contact__footersocials"/></a>
      {/* <AiFillCopyrightCircle className="copyrights"/> */}

      </div>
      
    </div>
  )
}

export default Contact