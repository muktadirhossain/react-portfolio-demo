import React from 'react';
import './Footer.css';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Footer() {
    const imgLink = '';
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_k77c4fu', 'template_rmi83eb', form.current, 'LNKqcpwLAIxUCAHN2')
        .then((result) => {
            alert('message sent successfully...!');
            e.target.value='';
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='footer-area'>
    <div className="container">
    <div className="row">
        <div className="col-md-3">
            <h2>Contact US</h2>
            <ul>
                <li>76/A Green Road NYC</li>
                <li><a className='text-white' href="tel:+44-785-7895">+88 017 40451306</a></li>
                <li>contact@contact.com</li>
            </ul>
        </div>
        <div className="col-md-3">
        <h2>Our Location</h2>
            <img src={imgLink} alt="" /><span>A map will help you to find us</span>
        </div>
        <div className="col-md-3">
            <h2>Follow US on</h2>
            <ul>
                <li>fb</li>
                <li>twitter</li>
                <li>linkdin</li>
                <li>gitHub</li>
            </ul>
        </div>
        <div className="col-md-3">
            <h2>Get In Touch</h2>
            <div className='form-body'>
             <form ref={form} onSubmit={sendEmail}>
             <input className='form-control' placeholder='Type your Email here...' type="email" name="user_email" /><br/>
             <input className='btn btn-danger' type="submit" value="Send" />
           </form>
        </div>
        </div>
      </div>
      <div>
        <p className='footer-copyRight text-center'>© Copyright 2022. All rights reserved by <a target='_blank' href="https://devmuktadir.com/" >Muktadir Hossain.</a></p>
      </div>
    </div>
    </div>
  )
}

export default Footer
