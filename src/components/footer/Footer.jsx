import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export const Footer = () => {
  return (
    <div id='footer-container'> 
      <div id='icons'>
        <FaInstagram className='icon' />
        <FaFacebook className='icon' />
        <FaTwitter className='icon' />
        <FaYoutube className='icon' />
      </div>
        <p>Copyright &copy; {new Date().getFullYear()} OVAT</p>
    </div>
  )
}

// https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80

