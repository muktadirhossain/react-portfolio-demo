import React,{ useEffect, useRef } from 'react';
import Typed from "typed.js";
import './Banner.css';

function Banner() {
    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      //strings: ["Web Development.", "eCommerce Development.", "SM Branding.", "Digital Marketing..."], // Strings to display
      strings: ["Bigger.", "Better.", "Smarter.", "Simpler."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100, 
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='banner'>
        <div className="container container-banner">
        <p className='text-light'>The Power House Of Your One Stop eCommerce Solution.</p>
        <h1 className='text-white'>Make Your<br/> Business <span className='text-danger container textEffect'  ref={el}></span></h1>
        {/* <span className='container textEffect'  ref={el}></span> */}
        <button className="btn btn-danger mt-5 px-3">Let's Talk</button>
        
        </div>      
        
    </div>
  )
}

export default Banner
