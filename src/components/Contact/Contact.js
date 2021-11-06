import React, { useRef } from "react";
import "./Contact.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from 'emailjs-com';



export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const formRef = useRef();

  const [done, setDone] = useState(false);

  const handleSubmit =(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_7xu775s', 'template_pp584i5', formRef.current, 'user_vyrQ7Ap6WmWHghc0iJHhZ')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
 
  return (
    <>
      <div className="contact py-3" id="contact"  data-aos="fade-up">
                <div className="contact-title d-flex justify-content-lg-start justify-content-md-center justify-content-center px-md-5 px-3">
                 <div className="contact-title-border"></div>
                 <div className="px-3">Contact Me</div>
                </div>  
                <div className="c-talk text-center p-3">
                <div >Let's Talk...</div> 
                <div className="c-desc py-2">I'm intrested in freelance oppurtunities, However for any other querries do get in touch. </div> 
                </div> 
                <div className="contact-icons d-flex justify-content-center py-2">
         <div className="contact-btn py-3 px-3 mx-2">
          <a href="https://github.com/Syedkhadeer-51"><GitHubIcon fontSize="large" color="secondary" /></a>
        </div>
        <div className="contact-btn py-3 px-3 mx-2">
          <a href="https://www.linkedin.com/in/syed-khadeer-21a4851b1/"><LinkedInIcon fontSize="large" color="primary" /></a>
        </div>
                </div>
                <form className="my-4 pb-5 d-flex flex-column align-items-center justify-content-center" ref={formRef} onSubmit={handleSubmit} >
                  <input type="text" placeholder="Name" name="user_name" className="px-3 py-2" />
                  <input type="text" placeholder="Subject" name="user_subject" className="px-3 py-2"/>
                  <input type="text" placeholder="Email" name="user_email"className="px-3 py-2" />
                  <textarea rows="5" placeholder="Message" name="message" className="px-3 py-2" ></textarea>
                  <button className="py-2 px-5 my-3" type="button">Submit</button>
                  <div className="confirmation-txt py-2">
                  {done && "Thank you"}
                  </div>
              
                </form>
      </div>
   
    </>
  );
}
