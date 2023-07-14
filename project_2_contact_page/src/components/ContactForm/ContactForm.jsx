import Button from "../Buttons/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {FiMail} from 'react-icons/fi'
import './ContactForm.css'
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const onSubmitHandle = (event) => {
      event.preventDefault();
      console.log(event)
      setName(event.target[0].value)
      setEmail(event.target[1].value)
      setMessage(event.target[2].value)
  }

  return (
    <div className="contactForm">
      <div className="contactFormBody">
        <div className="primaryBtns">
            <Button icon={<MdMessage fontSize='24px'/>} text="VIA SUPPORT CHAT" />
            <Button icon={<FaPhoneAlt fontSize='24px'/>} text="VIA CALL" />
        </div>
        <Button isOutline={true} icon={<FiMail fontSize='24px'/>} text="VIA EMAIL FORM" />
        <form onSubmit={onSubmitHandle}>
            <div className="formControl">
                <label htmlFor="name">Name</label>
                <input type="name" name="name"/>
            </div>
            <div className="formControl">
                <label htmlFor="email">E-Mail</label>
                <input type="email" name="email"/>
            </div>
            <div className="formControl">
                <label htmlFor="text">Message</label>
                <textarea name="message" rows="8"/>
            </div>
        <div style={{
          display: "flex",
          justifyContent: "end"
        }}>
          <Button text="SUBMIT" />
        </div>
        <div>{name}</div>
        <div>{email}</div>
        <div style ={{maxWidth: "470px"}}> {message}</div>
        </form>
      </div>
      <div className="contactImage">
        <img src="/images/contact_now.svg" />
      </div>
    </div>
  );
};

export default ContactForm;
