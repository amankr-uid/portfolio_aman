import React from 'react';
import SkillCategory from './SkillCategory';
import '../Css/skills.css';

const Skill = ({ Skills }) => {
  return (
    <section className='mt-12 skill-section' id='Skills'>
      <div className='page-width lg:container'>
        <div className='section__title-contatiner'>
          <h2 className='section--title'>My Skills</h2>
        </div>
        <div className='skill-inner--wrapper'>
          {Skills.Skills.map((category, index) => (
            <SkillCategory 
              key={index} 
              categoryTitle={category['category-title']} 
              skills={category.skills} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;