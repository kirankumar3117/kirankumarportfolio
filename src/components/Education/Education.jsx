import React,{useEffect} from 'react'
import "./education.css"
import DATA from "./edudata.json"
import Aos from "aos"
import "aos/dist/aos.css"

const Education = () => {

    useEffect(()=>{
      Aos.init({duration:2000})
    },[])
 
  return (
    <div id="education">
       <div className="edu__line"></div>
      <div className="education__container">
     <div className="education__top">Education</div>
      <div className="education__grid">{DATA.map(e=>{
        return (<div className="after__grid" data-aos="fade-up">
          <div className="education__image"><img src="https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg"/></div>
          <div className="edu__final">
          <div class_name="education__content">
            <div className="education__year">{e.year}</div>
            <div className="education__learns">{e.learn}</div>
            <div className="education__school">{e.school}</div>
            </div>
          </div>
        </div>)
      })}</div>
      </div>
     
    </div>
  )
}

export default Education