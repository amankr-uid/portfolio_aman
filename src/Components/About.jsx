import React from 'react';
import "./Css/about.css";
import my_img from '../assets/my_img.png';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const About = ({ Abouts }) => {

const el = useRef(null);

useEffect(() => {
    new Typed(el.current, {
    strings: ["FrontEnd Developer.", "UI-UX Developer."], 
    typeSpeed: 30,
    startDelay:200,
    backDelay: 100,
    backSpeed:100,
    smartBackspace:true,
    showCursor:false,
    loop:true,
  });

});

  return (
   <section className='about-section' id='About'>
    <div className='page-width'>
      <div className='about-wrapper'>
        <div className='about-img-wrap' >
          <img src={my_img} alt='my_img' className='about-img'/>
        </div>
        <div className='about-detail-wrap'>
            {Object.entries(Abouts).map(([key, value]) => {
              return value.map((val)=>{
                return <div className='about-data-wrap' key={val.id}>
                        <h1 className='title'> {val.title}</h1>
                        <p className='role' >{val.role} <span ref={el}></span></p>
                        <p className='summary'>{val.summary}</p>
                      </div>
                      
                })
   
             })}

        </div>
      </div>
    </div>
  </section>

  )
}

export default About
