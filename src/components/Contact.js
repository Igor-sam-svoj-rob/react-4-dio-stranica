import React from 'react'

function Contact() {
  return (
    <div id="contact">
        <h3>Pošalji nam mail</h3>
        <div className="contact-input">
            <input type="email" placeholder="example@mail.com" />
            <a href="#">Kontakt</a>
        </div>
    </div>
  )
}

export default Contact