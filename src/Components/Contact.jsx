import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Css/contact.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact_number: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send the email
    emailjs.send(
      'service_xhr9nwc',        // Replace with your service ID
      'template_vjoannu',       // Replace with your template ID
      formData,
      'UW_pN311O28WcKK_z'            // Replace with your user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send the message. Please try again later.');
    });

    // Clear the form after submission
    setFormData({
      name: '',
      contact_number: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className='py-14 contact-section bg-lime-100' id='Contact'>
        <div className='page-width lg:container'>
            <div className='section__title-contatiner '>
                <h2 className='section--title'>Contact Me</h2>
            </div>
            <div className='mt-3 contact-note'><p className='w-full text-lg text-center'> <span className='pr-2 font-semibold'>Note:</span>If you required any consultation. Kindly, fill the form.</p></div>
            <form className='w-full m-auto mt-5 lg:w-6/12' onSubmit={handleSubmit}>
                <div className='flex flex-col items-start w-full gap-4 mb-5 md:items-center md:flex-row form-name__wrap lg:gap-7'>
                    <label htmlFor="name" className='w-40 text-xl font-semibold text-left capitalize'>Name :</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder='Name'
                    required 
                    className='w-full h-8 p-6 bg-transparent border border-zinc-300'
                    autoFocus
                    />
                </div>
                <div className='flex flex-col items-start w-full gap-4 mb-5 md:items-center form-mobile__wrap md:flex-row lg:gap-7'>
                    <label htmlFor="mobile" className='w-40 text-xl font-semibold text-left capitalize'>Mobile No. :</label>
                    <input 
                    type="number" 
                    id="mobile" 
                    name="mobile" 
                    value={formData.contact_number} 
                    onChange={handleChange} 
                    placeholder='Mobile number'
                    required 
                    className='w-full h-8 p-6 bg-transparent border border-zinc-300'
                    />
                </div>
                <div className='flex flex-col items-start w-full gap-4 mb-5 md:items-center form-email__wrap md:flex-row lg:gap-7'>
                    <label htmlFor="email" className='w-40 text-xl font-semibold text-left capitalize'>E-mail ID : </label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder='E-mail Id'
                    required 
                    className='w-full h-8 p-6 bg-transparent border border-zinc-300'
                    />
                </div>
                <div className='flex flex-col items-start w-full gap-4 mb-5 md:items-center form-msg__wrap md:flex-row lg:gap-7'>
                    <label htmlFor="message" className='w-40 text-xl font-semibold text-left capitalize'>Message :</label>
                    <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder='Write me a Message'
                    required 
                    className='w-full p-6 bg-transparent border border-zinc-300'
                    />
                </div>
                <div className='flex justify-center w-full pt-5 btn-wrap'>
                    <button type="submit" className='py-4 text-white capitalize bg-blue-800 rounded-full shadow-xl text-md btn px-7'>Send Message</button>
                </div>
            </form>
        </div>
    </section>
  );
};

export default ContactForm;
