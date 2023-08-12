import React from 'react'
import '../styles/Contact.css'  

function Contact() {
  return (
    <>
      <div className="container">
        <div className="container-body">
          <div className="contact-img"></div>
          <div className="contact-form">
            <h1>Bizimle İletişime Geçin</h1>
            <form>
              <label htmlFor="name">Ad / Soyad</label>
              <input type="text" id='name' placeholder='Lütfen adınızı soyadınızı giriniz.' />
              <label htmlFor="e-mail">E-Mail</label>
              <input type="text" id='e-mail' placeholder='Lütfen adınızı soyadınızı giriniz.' />
              <label htmlFor="message">Mesajınız</label>
              <textarea id="message" rows="5" placeholder='Mesajınızı giriniz.'></textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact