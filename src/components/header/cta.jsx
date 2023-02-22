import React from 'react'
import CV from "../../assets/CV.pdf"
const cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contacts' className='btn btn-primary'>Get In Touch</a>
    </div>
  )
}

export default cta