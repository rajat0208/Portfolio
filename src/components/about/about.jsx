import React from 'react'
import "./about.css"

import { BiCodeCurly } from 'react-icons/bi'
import { HiServerStack } from 'react-icons/hi2'
import { SiAffinitydesigner } from 'react-icons/si'
import { BsThreeDotsVertical } from 'react-icons/bs'

/*CIRCULAR PROGRESS BAR*/
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'


/*Animation*/
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../../Animation/animation";



const about = (props) => {
  return (
    <section id='about'>
      <h4>Know more</h4>
      <h2>About me</h2>
      <div className='contianer about_container'>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <h1>SKILLS</h1>

{/*--------------------------------------------FRONTEND BAR AND ANIMATION-----------------------------------------------------------*/}
               <div className='frontend'>
                <div className='skill_icon'>
                  <BiCodeCurly></BiCodeCurly>
                </div>
                <div className='skill_text'>
                  <h3>FrontEnd</h3>
                </div>
              </div>
              <div className='frontend_bar'>
                <Animation >
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={90}
                    duration={2}
                    easingFunction={easeQuadInOut}>
                    {value => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <div>
                    <strong>HTML</strong>
                  </div>
                </Animation>
                <Animation >
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={75}
                    duration={2}
                    easingFunction={easeQuadInOut}>
                    {value => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <div>
                    <strong>CSS</strong>
                  </div>
                </Animation>
                <Animation >
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={70}
                    duration={2}
                    easingFunction={easeQuadInOut}>
                    {value => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <div>
                    <strong>JavaScript</strong>
                  </div>
                </Animation>
                <Animation >
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={70}
                    duration={2}
                    easingFunction={easeQuadInOut}>
                    {value => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <div>
                    <strong>React JS</strong>
                  </div>
                </Animation>
              </div>

{/*--------------------------------------------BACKEND BAR AND ANIMATION-----------------------------------------------------------*/}
              <div className='backend'>
                <div className='skill_icon'>
                  <HiServerStack></HiServerStack>
                </div>
                <div className='skill_text'>
                  <h3>BackEnd</h3>
                </div>
              </div>
              <div className='backend_bar'>
                <div className="backend_progress_bar">
                  <Animation >
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={65}
                      duration={2}
                      easingFunction={easeQuadInOut}>
                      {value => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                        );
                      }}
                    </AnimatedProgressProvider>
                    <div>
                      <strong>JavaScript</strong>
                    </div>
                  </Animation>
                  <Animation >
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={60}
                      duration={2}
                      easingFunction={easeQuadInOut}>
                      {value => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                        );
                      }}
                    </AnimatedProgressProvider>
                    <div>
                      <strong>ExpressJS</strong>
                    </div>
                  </Animation>
                  <Animation >
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={60}
                      duration={2}
                      easingFunction={easeQuadInOut}>
                      {value => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                        );
                      }}
                    </AnimatedProgressProvider>
                    <div>
                      <strong>MongoDB</strong>
                    </div>
                  </Animation>
                </div>
              </div>

{/*--------------------------------------------DESIGN BAR AND ANIMATION-----------------------------------------------------------*/}
              <div className='design'>
                <div className='skill_icon'>
                  <SiAffinitydesigner></SiAffinitydesigner>
                </div>
                <div className='skill_text'>
                  <h3>Design</h3>
                </div>
              </div>
              <div className='design_progress_bar'>
                <Animation >
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={60}
                    duration={2}
                    easingFunction={easeQuadInOut}>
                    {value => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <div>
                    <strong>Figma</strong>
                  </div>
                </Animation>
                <Animation >
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={65}
                    duration={2}
                    easingFunction={easeQuadInOut}>
                    {value => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <div>
                    <strong>Photoshop</strong>
                  </div>
                </Animation>
                <Animation >
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={80}
                    duration={2}
                    easingFunction={easeQuadInOut}>
                    {value => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <div>
                    <strong>Canva</strong>
                  </div>
                </Animation>
                <Animation >
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={50}
                    duration={2}
                    easingFunction={easeQuadInOut}>
                    {value => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <div>
                    <strong>Illustrator</strong>
                  </div>
                </Animation>
              </div>

{/*--------------------------------------------OTHER BAR AND ANIMATION-----------------------------------------------------------*/}
              <div className='others'>
                <div className='skill_icon'>
                  <BsThreeDotsVertical></BsThreeDotsVertical>
                </div>
                <div className='skill_text'>
                  <h3>Others</h3>
                </div> 
              </div>
              <div className='others_progress_bar'>
                <Animation >
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={50}
                    duration={2}
                    easingFunction={easeQuadInOut}>
                    {value => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({ pathTransition: "none", textColor: 'var(--color-bar)', pathColor: 'var(--color-bar)' })} />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <div>
                    <strong>WordPress</strong>
                  </div>
                </Animation>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
  function Animation(props) {
    return (
      <>  <div className="progress_bar" style={{ width: 80, height: 100 }}>{props.children}</div></>
    );
  }
}

export default about
