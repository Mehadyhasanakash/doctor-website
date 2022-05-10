import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize:'cover'
        }} >
  <div className='footer p-10 mt-20'>
  <div>
    <Link to='/' class="footer-title">Services</Link> 
    <Link to='/' class="link link-hover">Branding</Link>
    <Link to='/' class="link link-hover">Design</Link>
    <Link to='/' class="link link-hover">Marketing</Link>
    <Link to='/' class="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <Link to= '/' class="footer-title">Company</Link> 
    <Link to= '/' class="link link-hover">About us</Link>
    <Link to= '/' class="link link-hover">Contact</Link>
    <Link to= '/' class="link link-hover">Jobs</Link>
    <Link to= '/' class="link link-hover">Press kit</Link>
  </div> 
  <div>
    <Link to = '/' class="footer-title">Legal</Link> 
    <Link to = '/' class="link link-hover">Terms of use</Link>
    <Link to = '/' class="link link-hover">Privacy policy</Link>
    <Link to = '/' class="link link-hover">Cookie policy</Link>
  </div>
  </div>



  <div className='my-20 text-center text-primary'>
    <p>Copyright © 2022 - All right reserved by Doctor-Portal-Client</p>
  </div>
</footer>
    );
};

export default Footer;