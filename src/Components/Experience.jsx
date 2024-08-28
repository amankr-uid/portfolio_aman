import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import './Css/experience.css';

const Experience = ({section_title, Experiences}) => {
  return (
    <section className='mt-12 experience-section' id='Experience'>
      <div className='page-width lg:container'>
        <div className='section__title-contatiner'>
          <h2 className='section--title'>My Experience</h2>
        </div>
        <div className='experience-wrapper'>
          {Object.entries(Experiences).map(([key, value]) =>
            value.map((val) => (
              <div className='experience-data-wrap' key={val.id}>
                <div className='experienceIconWrap'>
                  <i className='fa fa-circle-check check-icon' /> {/* Check icon */}
                </div>
                <div className='flex flex-col flex-wrap justify-between w-full gap-4 md:flex-row experienceContentWrap'>
                  <div className='w-full md:w-5/12 companyExperience'>
                    <h3 className='flex items-center gap-2 text-lg font-semibold leading-4 text-blue-800 md:text-[22px] company-title'>
                      <i className="w-5 h-auto fa-solid fa-building text-slate-600"></i>
                      {val.company_title}
                    </h3>
                    <p className='flex items-center gap-2 pt-3 text-sm font-normal leading-3 md:text-lg company-location text-slate-600'>
                      <i className="w-4 h-auto fa-solid fa-location-dot text-slate-600" />
                      {val.location}
                    </p>
                  </div>
                  <div className='w-full md:w-5/12 companyDesignation'>
                    <h4 className='flex items-center gap-2 text-base font-semibold leading-4 lowercase md:text-xl designation'>
                    <i className="w-5 h-auto fa-solid fa-briefcase text-slate-600"></i>
                      {val.designation}
                    </h4>
                    <p className='flex items-center gap-2 pt-3 text-sm font-normal leading-3 text-red-600 md:text-lg duration'>
                      <i className="w-5 h-auto fa-solid fa-calendar-days text-slate-600" />
                      {val.duration}
                    </p>
                  </div>
                  <div className='flex w-full gap-2'>
                    <i className="fa-solid fa-list w-5 h-auto text-slate-600 pt-0.5 pr-4 text-lg"></i>
                    <p className='text-base font-medium md:text-lg summary'>
                      {val.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;