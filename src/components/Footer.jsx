import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import '../styles/Footer.css'

function Footer() {
  return (
    <>
      <footer>
        <div className="social-media">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </div>
        <p>Tüm hakları saklıdır. | Burger Yiyelim</p>
      </footer>
    </>
  );
}

export default Footer;
