import React from 'react'
import styled from "./Allprojects.module.css"
import {Projects} from "./projects"
import {BsDot} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"

const Allprojects = () => {
  return (
    <div>
      <div className={styled.allprojects}>All Projects</div>
        <div className={styled.container}>
          {Projects.map(e=>{
            return <div className={styled.projectmain}>

            <div className={styled.project_name}>{e.name}</div>
            <div style={{background:"rgb(167, 101, 101)"}}><img src={e.img} alt="" className={styled.project_image}/></div>
            <div className={styled.project_description}>{e.description}</div>
            <ul>{e.list.map(ist=>{
              return <li className={styled.list}>{ist}</li>
            })}</ul>
            <div className={styled.last}>
            <div onClick={()=>{
              const win=window.open(e.live,'_blank');
              if(win != null){
                win.focus()
              }
            }}>Go Live</div>
            <div onClick={()=>{
              const win=window.open(e.git,'_blank');
              if(win != null){
                win.focus()
              }
            }}><AiFillGithub className={styled.git}/></div>
            </div>
            <br/>
            </div>
          })}
         
        </div>

    </div>
  )
}

export default Allprojects