import React from 'react'
import { useRef } from 'react'
import'./Contact.css'
import LinkedIn from '../Assets/linkedin.svg'
import Github from '../Assets/github.svg'
import Instagram from '../Assets/instagram.svg'
import Facebook from '../Assets/facebook.svg'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xzy9b3b', 'template_n0kgsih', form.current, {
        publicKey: '1RT9N5c0PikkTELub',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contact'>
        <div id='social'>
            <h1 className='socialTitle'>Socials</h1>
            <p className='socialDesc'>Here You Can Connect With Me On My Social Media</p>

             <div className='socialImg'>
               
                <a href='#'><img src={LinkedIn} alt='LinkedIn' className='socialImg'/></a>
                <a href='#'><img src={Github} alt='Github' className='socialImg'/></a>
                <a href='#'><img src={Instagram} alt='Instagram' className='socialImg'/></a>
                <a href='#'><img src={Facebook} alt='Facebook' className='socialImg'/></a>
                 
             </div>
        </div>
 
        <div id="contactPage">

          <h1 className='contactTitle'>Contact</h1>
          <span className="contactDesc">Feel free to contact me</span>

          <form className='contactForm' ref={form} onSubmit={sendEmail} >
            <input type="text" className="name" placeholder="Your Name" name="from_name" required/>
            <input type="email" className="email" placeholder="Your Email" name="your_email" required/>
            <textarea className='msg' rows="5" placeholder="Message" name="message" required></textarea>
            <button type="submit" value="Send" className="submitBtn" onClick={() => {alert("Your form is submitted")}}>Submit</button>
          </form>
        </div>

    </section>
  )
}

export default Contact
