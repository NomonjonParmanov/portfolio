import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <p className="contact__title">Contact</p>
        <p>I’m currently available for freelance work</p>
        <div className="message">
          <p>Send me a message</p>
        </div>
        <form action="">
          <div className="inps">
            <div className="inp">
              <label htmlFor="">Your name *</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="inp">
              <label htmlFor="">Your email *</label>
              <input type="text" placeholder="Enter your email" />
            </div>
          </div>
          <div className="inp">
            <label className="label" htmlFor="">
              Your message *
            </label>
            <textarea placeholder="Enter your needs"></textarea>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
