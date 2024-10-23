import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FloatingDockDemo } from './FooterIcons';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_SERVICE_KEY, // your EmailJS service ID
      process.env.REACT_TEMPLATE_ID, // your EmailJS template ID
      form.current, //  your EmailJS user ID
      process.env.REACT_TEMPLATE_NAME,
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.error('Email sending error:', error.text);
        alert('Failed to send message. Please try again later.');
      });

    e.target.reset(); // Clears the form after submission
  };

  return (
    <div className='p-10 flex flex-col justify-between h-full'>
      <div className='flex flex-col sm:flex-row justify-evenly items-center '>

        <div className="flex flex-col justify-between items-start md:items-start  ">
          <div className="mb-6 p-5 text-black bg-slate-200 ">
            <p className="font-bold text-sm md:text-xl mb-2">Contact Us:</p>
            <div className=" font-semibold text-sm md:text-lg flex flex-row items-center mb-2">
              <span className="d"> +91 97904 84558</span>
            </div>
            <div className=" font-semibold text-sm md:text-lg flex flex-row items-center mb-2">

              <span className=""> srirangalaser.coimbatore@gmail.com</span>
            </div>
            <div className="font-semibold text-sm md:text-lg flex flex-row items-center">

              <span className=""> 9/1E, Gandhi Nagar, Ondiputhur Road, Irugur, Coimbatore - 641103</span>

            </div>

          </div>
          {/* Open Hours */}
          <div className="mb-6 p-5 bg-slate-200">
            <p className=" font-bold text-sm md:text-lg mb-2">Open Hours:</p>
            <p className=" font-semibold text-sm md:text-base">
              Monday-Friday: 7:00AM – 5:00PM<br />
              Sat-Sun: CLOSED
            </p>
          </div>
        </div>
        <div className='w-3/5'>

          <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-4 bg-slate-200 shadow-md">

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input type="text" name="user_name" className="w-full p-2 border" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input type="email" name="user_email" className="w-full p-2 border" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea name="message" rows="4" className="w-full p-2 border" required></textarea>
            </div>
            <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded-md">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
