import React from 'react'
import MainHeadNav from './Components/MainHeadNav'
import About from './Components/About'
import Experience  from './Components/Experience'
import Footer from './Components/Footer'
import Abouts from './Components/db-json/about.json';
import Experiences from './Components/db-json/experience.json'
import skillsData from './Components/db-json/skills'
import Skill from './Components/Skills/Skill'
import ContactForm from './Components/Contact'
import SocialLinks from './Components/db-json/socialLinks.json'
import Project from './Components/Project'
import projectsData from './Components/db-json/projects'

function Panel() {
  return ( 
    <>
      <MainHeadNav />
      <main>
      
        <About Abouts={Abouts} />
        <Experience Experiences={Experiences} />
        <Skill Skills={skillsData} />
        <Project Projects={projectsData} />
        <ContactForm />
      </main>
      <Footer SocialLinks={SocialLinks} />
    </>
  )
}

export default Panel
