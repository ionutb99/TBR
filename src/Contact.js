import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();

  const sendMess = (e) => {
    e.preventDefault();
    toast.success("Message sent succesfully!");
    form.current.reset();
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contactează-mă!</h1>
      <ToastContainer />
      <form ref={form} className="contact-form" onSubmit={sendMess}>
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
        <p>
          <b>Telefon:</b> 0734 813 971{" "}
        </p>
        <p>
          <b>Email:</b> ionutbuzila00@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;
