import React from 'react'
import './experience.css'
import {IoLogoHtml5} from 'react-icons/io'
import {SiCss3} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import { FaVuejs } from "react-icons/fa";
import {BsGithub} from 'react-icons/bs'
 import {SiBootstrap} from 'react-icons/si'
 import { SiReact } from "react-icons/si";
 import { FaLink } from "react-icons/fa6";
 import { SiTypescript } from "react-icons/si";
 



const Experience = () => {
  return (
    <section id='experience'>
      
      <h2>Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        
          
          <div className="experience__content">
            <article className='experience__details'>
            <IoLogoHtml5 size="1.5em" color='#ff5722'/>
            <h4>HTML 5</h4>
            <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
            <SiCss3 size="1.5em" color='#0027ff'/>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </article>

           
            <article className='experience__details'>
            <IoLogoJavascript size="1.5em" color="#FFEF06"/>
            <h4>Javascript </h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <SiTypescript size="1.5em" color="#FFEF06"/>
            <h4>Typescript </h4>
            <small className='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>
            <FaReact size="1.5em" color='#00A3FF'/>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <SiReact size="1.5em" color="#FFEF06"/>
            <h4>React Native </h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <FaVuejs size="1.5em" color="#FFEF06"/>
            <h4> VueJs</h4>
            <small className='text-light'>Intermediate</small>
            </article>
 

            <article className='experience__details'>
            <BsGithub size="1.9em" color='#000000'/>
            <h4>Git</h4>
            <small className='text-light'>Basic</small>
            </article>


             <article className='experience__details'>
            <SiBootstrap size="1.5em" color="##8b23c5"/>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
            </article> 

            <article className='experience__details'>
            <FaLink  size="1.5em" color="##8b23c5"/>
            <h4>API Integration</h4>
            <small className='text-light'>Intermediate</small>
            </article> 


           
</div>
</div>
        </div>
     </section>
)
}
export default Experience
