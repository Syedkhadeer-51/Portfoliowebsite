import React from "react";
import "./Product.css";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import faqicon from "../Home/home-icons/faq.png";
import hocicon from "../Home/home-icons/hoc.png";
import wizicon from "../Home/home-icons/wizskill.png";

export default function Product() {
  useEffect(() => {
    AOS.init({ duration:1000 });
 }, []);
  return (
    <>
   <div className="row no-gutters py-3 mx-md-5 mx-3" data-aos="fade-up">
     <div className="col-md-6 col-12 p-0">
     <div className="project-company py-2 px-3">Frequently Asked Questions</div>
     <div className="pl-card pl-border my-1 mx-2">
     <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
         <a href="https://wizklub.com/company/faq/">
           <img src={faqicon} className="p-img img-fluid lazyloaded" alt="faq-icon" />
         </a>
       </div>
     </div>
     <div className="col-md-6 col-12 d-flex align-items-center">
      <div className="project-description">An FAQ page at Wizklub.co for the user's to interact and pose their questions and to provide better understanding of the courses offered and also to clarify the doubts related to it.</div>
     </div>
   </div>
   <div className="row no-gutters py-3 mx-md-5 mx-3" data-aos="fade-left">
   <div className="col-md-6 col-12 d-flex align-items-center ">
      <div className="project-description">A product page at Wizklub.co that display's information about a program offered to the kids to participate. </div>
     </div>
     <div className="col-md-6 col-12 p-0 order-first order-md-last">
     <div className="project-company py-2 px-3">Hour of Code</div>
     <div className="pl-card pl-border my-1 mx-2">
     <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
         <a href="https://wizklub.com/get-engaged/hour-of-code/">
           <img src={hocicon} className="p-img img-fluid lazyloaded" alt="hoc-icon" />
         </a>
       </div>
     </div>
    
   </div>
   <div className="row no-gutters py-3 mx-md-5 mx-3" data-aos="fade-right">
     <div className="col-md-6 col-12 p-0">
     <div className="project-company py-2 px-3">Wiz Alexa developement</div>
     <div className="pl-card pl-border my-1 mx-2">
     <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
         <a href="https://wizklub.com/product/wizskill/">
           <img src={wizicon} className="p-img img-fluid lazyloaded" alt="wiz-icon" />
         </a>
       </div>
     </div>
     <div className="col-md-6 col-12 d-flex align-items-center">
      <div className="project-description">A product page displaying information about the program to develope alexa skills offered to the kids at Wizklub</div>
     </div>
   </div>
         
    </>
  );
}
