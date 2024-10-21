import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

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
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-4 bg-gray-100 shadow-md">
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
