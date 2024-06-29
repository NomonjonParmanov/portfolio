import React, { useState } from "react";
import { PatternFormat } from "react-number-format";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState("");
  const BOT_TOKEN = "6765319054:AAGM7Q5sdKWUSY2ShxsGEu__RjKjaVuAyTA";
  const CHAT_ID = "-1002101256953";
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "Xaridor  %0A%0A";
    text += `Name: ${name} %0A`;
    text += `email: ${email} %0A`;
    text += `koment: ${mess} %0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setName("");
    setEmail("");
    setMess("");
  };
  return (
    <div className="contact">
      <div className="container">
        <p className="contact__title">Contact</p>
        <p>I’m currently available for freelance work</p>
        <div className="message">
          <p>Send me a message</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inps">
            <div className="inp">
              <label htmlFor="">Your name *</label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="inp">
              <label htmlFor="">Your number *</label>
              <PatternFormat
                format="+998 (##) ###-##-##"
                allowEmptyFormatting
                mask="_"
                placeholder="Enter your number"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="inp">
            <label className="label" htmlFor="">
              Your message *
            </label>
            <textarea
              value={mess}
              onChange={(e) => setMess(e.target.value)}
              required
              placeholder="Enter your needs"
            ></textarea>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
