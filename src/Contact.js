import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contactează-ne!</h1>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      <div>

      <p><b>Telefon:</b> 0734813971 </p>
      <p><b>Email:</b> ionutbuzila00@gmail.com</p>
      <p><b>Adresă:</b> Rebrișoara, Principala, 242</p>
      </div>
    </div>
  );
}

export default Contact;
