import React from 'react'
import './Css/project.css'

const Project = ({Projects}) => {
  return (
    <section className='mt-12 project-section' id='Projects'>
      <div className='page-width lg:container'>
        <div className='pb-5 section__title-contatiner'>
          <h2 className='section--title'>My Project</h2>
        </div>
        <div className='pb-12 overflow-x-hidden project-list__wrap carousel' data-flickity='{ "autoPlay": 2500, "freeScroll": true, "contain": true, "adaptiveHeight": true, "wrapAround": true, "prevNextButtons": false, "pageDots": false }'>
          {Projects.Projects.map((project, index) => (
            <div className='shadow-2xl carousel-cell' key={index}>
              <a href={project.link} className='block project-list--item'>
                <div className='project-image'>
                  <img src={project.image} alt={project.alt} />
                </div>
                <div className='p-3 bg-white project-info'>
                  <h4 className='project-title text-lg md:text-2xl text-[#FF2B2B] font-bold lowercase text-center'>{project.title}</h4>
                  <p className='mt-3 text-base font-semibold text-center underline md:text-lg project-link underline-offset-2 text-sky-500'>Click To See</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
