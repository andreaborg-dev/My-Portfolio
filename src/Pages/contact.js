import '../App.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_d9rserk', 'template_wnokbfu', form.current, {
        publicKey: '166hcYD_eEyhQSA-t',
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
    <>
    <head>
        <title>Contact Me</title>
    </head>
    <div className='contactcontainer'>
    <div className='contactcontainer2'>
      
    <form ref={form} onSubmit={sendEmail}>
      <h1>Email Me</h1>
      <div className='Name'>
      <label>Name</label>
      <input className='inputbox' type="text" name="name" />
      </div>

      <div className='Email'>
      <label>Email</label>
      <input className='inputbox' type="email" name="email" />
      </div>

      <div className='Message'>
      <label>Message</label>
      <input className='inputbox' name="message" />
      </div>

      <div className='Submit-Button'>
      <input type="submit" value="Submit" />
      </div>
    </form>
    </div>
    </div>
    </>
  );
};
