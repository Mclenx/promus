import React, { useRef } from 'react';
import './contact.css';
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1m8pke5', 'template_dc9fa6g', form.current, 'Wz_lsYe8saOBgBT9U')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>eric.e.boisvert@gmail.com</h5>
          <a href="mailto:eric.e.boisvert@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Eric Boisvert</h5>
          <a href="https://m.me/profile.php?id=100067716886757" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          
          <a href="https://api.whatsapp.com/send?phone=+5147309443" target="_blank">Send a message</a>
        </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email'placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact