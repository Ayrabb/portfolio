import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDev} from 'react-icons/fa'
import {SiHashnode} from 'react-icons/si'
import {FaTwitter} from 'react-icons/fa'


const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href="https://linkedin.com/in/iamibrahimhamid" target="_blank" ><BsLinkedin/></a>
      <a href="https://github.com/Ayrabb" target="_blank"><FaGithub/></a>
      <a href="https://twitter.com/consolelog_ibro" target="_blank"><FaTwitter/></a>
      <a href="https://dev.to/ayrab" target="_blank"><FaDev/></a>
      <a href="https://ayrab.hashnode.dev/" target="_blank"><SiHashnode/></a>
   </div>
  )
}

export default HeaderSocial