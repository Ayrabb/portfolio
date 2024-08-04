import React from 'react'
import './about.css'
import ME from '../../assets/avataaars.png'
import { MdComputer } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_card">
            <article className='about__card'>
            <MdComputer className='about__icon'/>
              <h5>Developer</h5>
              <small>Web and Mobile</small>
            </article>

            <article className='about__card'>
              <BsBriefcase className='about__icon'/>
              <h5>Freelancer</h5>
              <small>Project/gig-Based</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p>
         I've tried alot of things only programming stuck. That says something I guess. 
         Available for freelancing—hire me so I can gain the experience you're looking for on my portfolio ;)
</p>     
        </div>
      </div>
      
    </section>
    
  )
}

export default About
