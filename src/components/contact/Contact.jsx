import React, {useRef} from "react";
import "./contact.css";
import ContactCard from "./ContactCard";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6qdrl7n', 'template_pak8z3p', form.current, 'BEvufh6CvNHrCqwuU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <ContactCard
            icon={<MdOutlineEmail className="contact__option-icon" />}
            contactMethod="Email"
            connect="daniel.rossano10@gmail.com"
            contactLink="mailto:daniel.rossano10@gmail.com"
          />
          <ContactCard
            icon={<RiMessengerLine className="contact__option-icon" />}
            contactMethod="Messenger"
            connect="Daniel Rossano"
            contactLink='https://m.me/daniel.rossano.31'
          />
          <ContactCard
            icon={<BsWhatsapp className="contact__option-icon" />}
            contactMethod="WhatsApp"
            connect="Daniel Rossano"
            contactLink='https://api.whatsapp.com/send?phone+18605580400'
          />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message"  rows='7' placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary"> Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
