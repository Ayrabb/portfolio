import React from 'react'
import './contact.css'
import {GrMail} from 'react-icons/gr'
import {IoLogoTwitter} from 'react-icons/io'
// import {FaFacebookMessenger} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_piesorp', 'template_uustsao', form.current, {
        publicKey: 'yQeeiFlFJq4iqezIQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message Sent');
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact'>
      
      <h2>Get In Touch</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GrMail className='contact__option-icon' color='#f44336'/>
            <h4>Email</h4>
            <a href="mailto:iamibrahimhamid@gmail.com" target="_blank" >Send a message</a>
          </article>

          <article className="contact__option">
            <IoLogoTwitter className='contact__option-icon' color='#00b0ff'/>
            <h4>Twitter</h4>
             
            <a href="https://twitter.com/consolelog_ibro" target="_blank" class="twitter-follow-button" data-show-count="false">Follow me</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8" ></script>
          </article>

          {/* <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon' color='#00b0ff'/>
            <h4>Facebook</h4>
            <a href="https://m.me/" target="_blank">Send a massage</a>
          </article>
             */}
        </div>
        {/* ===========End of Contact option ============== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' placeholder='Enter Full Name' required />
          <input type="email" name='user_email' placeholder='Email' />
          <textarea name="message" rows="7" placeholder='Type Message' required></textarea>
          <button type='submit' className='btn btn-1'> Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact