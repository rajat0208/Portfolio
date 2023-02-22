import React from 'react'
import './header.css'
import ME from '../../assets/Me.png'
import CTA from './cta'
import Social from './social'
import Icon from './icon'
const header = () => {
  return (
    <>
    <Social/>
    <header>
       <div className='me'>
        <img src={ME} alt="me" />
      </div>
      <div className="container header__container" >
        <h5>Hi, my name is </h5>
        <h1>Rajat Shrestha</h1>
        <h5 className='text-light'>I am a FullStack Developer</h5>
        <CTA /> 
        <Icon/>
      </div>
    </header>
    </>
  )
}

export default header
