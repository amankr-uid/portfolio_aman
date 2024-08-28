import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const SkillCategory = ({ categoryTitle, skills, index }) => {
  const getClassName = () => {
    switch (index) {
      case 0:
        return 'skill-category-first';
      case 1:
        return 'skill-category-second';
      case 2:
        return 'skill-category-third';
      default:
        return 'skill-category-default';
    }
  };
  
  return (
    <div className={`mt-5 skills--data ${getClassName()} box-border`}>
      <div className='mb-4 category__title-contatiner'>
        <h3 className='text-xl font-extrabold text-left text-blue-900 underline lowercase md:text-2xl category--title'>{categoryTitle}</h3>
      </div>
      <div className='box-border flex flex-row gap-3 skills-wrapper swiper-wrapper'>
        {skills.map((skill, idx) => (
          <div key={idx} className='box-border flex items-center h-auto mb-4 ml-2 mr-2 rounded shadow-lg swiper-slide skill-data-wrap shadow-gray-400'>
            <div className='flex justify-center w-6/12 bg-gray-100 skillIconWrap'>
              <img 
                src={skill.logo} 
                alt={skill.title}
                className='object-contain w-32 h-32 skill-icon'
              />
            </div>
            <div className='w-6/12 p-4 skillContentWrap'>
              <p className='text-xl font-bold text-center capitalize whitespace-pre-wrap skill-title'>{skill.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;