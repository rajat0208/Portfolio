import React from 'react'
import './nav.css'
import { FaUser } from 'react-icons/fa'
import { SiBookstack } from 'react-icons/si'
import { HiPhone } from 'react-icons/hi'
import { HiHome } from 'react-icons/hi'
const nav = () => {
  return (
    <nav>
      <ul>
        <li className='list'>
          <a href='#'>
            <span className='icons'><HiHome></HiHome></span>
            <span className="text">Home</span></a>
        </li>
        <li className='list'>
          <a href='#about'>
            <span className='icons'><FaUser /></span>
            <span className="text">About</span>
            </a>
        </li>
        <li className='list'>
          <a href='#projects'> 
          <span className='icons'><SiBookstack /></span>
          <span className="text">Projects</span></a>
        </li>
        <li className='list'>
          <a href='#contacts'> 
          <span className='icons'><HiPhone /></span>
          <span className="text">Contact</span></a>
        </li>
        <div className='indicator'></div>
      </ul>
    </nav>
  )
}

export default nav