import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "./Contact.css";

function Contact() {
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hadilbennacer', 'template_x3mp6p6', e.target, 'vPGW-dwiTXGESrOpB')
      .then((result) => {
          setMessage('Message envoyé avec succès!');
      }, (error) => {
          setMessage('Erreur lors de l\'envoi du message.');
      });

    e.target.reset();
  };

  return (
    <div className="contact">
      <h2>Contactez-nous</h2>
      <form onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="from_name" required />

        <label>Email</label>
        <input type="email" name="from_email" required />

        <label>Message</label>
        <textarea name="message" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Contact;
