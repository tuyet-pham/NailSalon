import React from 'react';
import { useState } from 'react';


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
      <label className="header-s3">
          Contact Us
      </label>
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
      <label className="header-s3">
        Hours of operations
      </label>
      <br/>
      <br/>
      <p>
        <b>Monday - Friday</b>
        <br/>
        9:00 pm – 7:00 pm
        <br/>
        <br/>        
        <b>Saturday</b>
        <br/>
        9:00 pm – 6:00 pm
        <br/>
        <br/>
        <b>Saturday</b>
        <br/>
        Closed
      </p>
    </div>
  );
}


function Map(){
  return (
    <div className="map">
       <img alt="unavailable" src={process.env.PUBLIC_URL + '/map.png'}/>
    </div>
  );
}

function Contact(){

  return (
    <div className="contact-page">
      <Map/>
      <Time/>
      <ContactForm/>
    </div>
  );
}

export default Contact;
