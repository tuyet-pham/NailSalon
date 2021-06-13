import React from 'react';
import { useState } from 'react';
import './pages.css';


function ContactForm(){
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting ${email} : ${subject}`)
  }

  return (
    <div className="contact-ui">
      <form onSubmit={handleSubmit}>
        <label>
          Contact us
        </label>
        <input
          type="text"
          placeholder="Email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br/>
        <input
          type="text"
          placeholder="Subject" 
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <br/>
        <textarea 
          rows="15"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <input className="contact-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}



function Time(){
  return (
    <div className="time-area">
      <h3>Hours of operations</h3>
      <ul>
        <li><strong>Monday - Friday</strong> : 9:00 pm – 7:00 pm</li>
        <li><strong>Saturday</strong> : 9:00 pm – 6:00 pm</li>
        <li><strong>Sunday</strong> : Closed</li>
      </ul>

      
      <h3>Contact</h3>
      <ul>
        <li><strong>Phone</strong> : 972-318-0889</li>
        <li><strong>Address</strong> : 1601 Village Pkwy Ste 140 <br/> Highland Village, Texas 75077</li>
      </ul>


    </div>
  );
}

// Will require real map for google map function probably
function Map(){
  return (
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.2589870542593!2d-97.37608738481637!3d32.83839378095342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e75bff0186813%3A0xbc8eec710c74d7c5!2s729%20Riverflat%20Dr%2C%20Fort%20Worth%2C%20TX%2076179!5e0!3m2!1sen!2sus!4v1623567391973!5m2!1sen!2sus" title="Address"/>
    </div>
  );
}

function Contact(){

  return (
    <div className="contact-page">
      <ContactForm/>
      <Time/>
      <Map/>
    </div>
  );
}

export default Contact;
