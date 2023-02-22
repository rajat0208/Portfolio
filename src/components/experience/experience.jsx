// import React from 'react'
// import './experience.css'
// import img1 from '../../assets/portfolio_cover.png'

// const experience = () => {
//   return (
//     <section id='projects'>
//       <h5>My Recent Work</h5>
//       <h2>Projects</h2>

//       <div className='container portfolio_container'>
//         <article className='portfolio_item'>
//           <div className='portfolio_item-image'><img src={img1} alt=''></img></div>
//             <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
//             <a href='https://.com' className='btn btn-primary' target='_blank'>Live Demo</a>
//         </article>
//         <article className='portfolio_item'>
//           <div className='portfolio_item-image'><img src={img1} alt=''></img></div>
//             <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
//             <a href='https://.com' className='btn btn-primary' target='_blank'>Live Demo</a>
//         </article>
//         <article className='portfolio_item'>
//           <div className='portfolio_item-image'><img src={img1} alt=''></img></div>
//             <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
//             <a href='https://.com' className='btn btn-primary' target='_blank'>Live Demo</a>
//         </article>
//         <article className='portfolio_item'>
//           <div className='portfolio_item-image'><img src={img1} alt=''></img></div>
//             <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
//             <a href='https://.com' className='btn btn-primary' target='_blank'>Live Demo</a>
//         </article>
//         <article className='portfolio_item'>
//           <div className='portfolio_item-image'><img src={img1} alt=''></img></div>
//             <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
//             <a href='https://.com' className='btn btn-primary' target='_blank'>Live Demo</a>
//         </article>
      
//       </div>
//       </section>
//   )
// }

// export default experience
import React from 'react';
import './experience.css'
import img1 from '../../assets/portfolio_cover.png'
const RecentWork = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'A brief description of Project 1',
      image: 'image-url-1.jpg',
      link1:"https://github.com",
      link2: 'project-1-url'
    },
    {
      name: 'Project 2',
      description: 'A brief description of Project 2',
      image: 'image-url-2.jpg',
      link1:"https://github.com",
      link2: 'project-2-url'
    },
    {
      name: 'Project 3',
      description: 'A brief description of Project 3',
      image: 'image-url-3.jpg',
      link1:"https://github.com",
      link2: 'project-3-url'
    },
  ];

  return (
    <section>
      <h4>Recent Work</h4 >
      <h2>Projects</h2>
      <ul>
      <div className='container portfolio_container'>
      <article className='portfolio_item'>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={img1} alt={project.name} />
            <div className='link'>
            <a className='btn' href={project.link1}>GitHub</a>
            <a className='btn btn-primary' href={project.link2}>Live Demo</a>
            </div>
          </li>
        ))}
        </article>
        </div>
      </ul>
    </section>
  );
};

export default RecentWork;



