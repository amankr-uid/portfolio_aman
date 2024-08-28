import React from 'react'

const Footer = ({ SocialLinks }) => {
  return (
    <footer className='bg-blue-800 footer-section'>
      <div className='page-width lg:container'>
        <div className='pt-8 pb-4 footer-top__wrap'>
          <ul className='flex justify-center w-full gap-5'>
            {SocialLinks.map((link, index) => (
                <li key={index} >
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className='block w-[30px] h-[30px] '>
                    <i className={`${link.icon} text-white text-[30px] h-[30px] leading-normal`} aria-hidden="true"></i>
                  </a>
                </li> 
            ))}
          </ul>
        </div>
        <div className='w-full border-t-2 border-blue-600 footer-bottom__wrap'>
          <p className='py-4 text-sm text-center text-white'>Copyright @2024 Aman Gupta. All right reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
