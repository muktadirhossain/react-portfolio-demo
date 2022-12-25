import React,{ useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';


function Contact() {
    const [from_name, setForm_name] = useState('');
    const [user_email, setUser_email] = useState('');
    const [message, setMessage] = useState('');

    const handelName = (e)=>{
      setForm_name(e.target.value);
    };
    const handelEmail = (e)=>{
      setUser_email(e.target.value);
    };
    const handelMessage = (e)=>{
      setMessage(e.target.value);
    };




    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_k77c4fu', 'template_rmi83eb', form.current, 'LNKqcpwLAIxUCAHN2')
        .then((result) => {
            alert('message sent successfully...!');
            setForm_name('');
            setUser_email('');
            setMessage('');

        }, (error) => {
            console.log(error.text);
        });
    };

    return (
      <div className="container contact-section">
        <h2 className='text-center pb-5'>Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
          <div className='contact-form shadow-sm'>
             <form ref={form} onSubmit={sendEmail}>

            <div className="form-group">
              <label>Name</label>
              <input value={from_name} onChange={handelName} placeholder='Type your name here...' className='form-control' type="text" name="from_name" />
            </div>
             
             <div className="form-group">
              <label>Email</label>
              <input value={user_email} onChange={handelEmail} placeholder='Type your Email here...' className='form-control' type="email" name="user_email" />
             </div>
             
             <div className="form-group">
              <label>Message</label> 
              <textarea value={message} onChange={handelMessage} placeholder='Type your Message here...' className='form-control' name="message" />
             </div>

             <div className="mt-2">
             <input className='btn btn-danger' type="submit" value="Send Message" />
             </div>

           </form>
        </div>
          </div>

          <div className="col-md-6">
            Google Map will be here to help You find Us
          </div>

        </div>

      </div>
         );
}

export default Contact;
