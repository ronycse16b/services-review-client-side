import React from 'react';
import './Footer.css';
import logo from './logo.png';

const Footer = () => {
  return (
    <div className='custom-bg' >
      <footer className="footer p-10  text-white lg:px-44 container mx-auto lg:mt-24  ">
        <div className='lg:mt-24'>
        <img src={logo} className='lg:w-32 w-20' alt="" />
        </div>
        <div className='lg:mt-24'>
          <span className="footer-title mb-2">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className='lg:mt-24'>
          <span className="footer-title mb-2">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className='lg:mt-24'>
          <span className="footer-title mb-2">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>

         <hr />
         <div className='text-center lg:py-2 '>
       	<span className='text-white'>	Copyright&#169; 2022 Design by Rony</span>
         </div>
    </div>
  );
};

export default Footer;