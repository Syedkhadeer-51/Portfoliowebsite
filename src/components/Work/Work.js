import React from "react";
import "./Work.css";
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Product from "../Product/Product";

export default function Work() {
    useEffect(() => {
        AOS.init({ duration:1000 });
     }, []);

  return (
    <>
      <div className="work py-2" id="work" >
      <div className="work-title d-flex justify-content-lg-start justify-content-md-center justify-content-center px-md-5 px-3" data-aos="fade-right">
      <div className="work-title-border"></div>
                 <div className="px-3">My Work</div>
                 
                 
                </div>
          <div className="text-right d-flex justify-content-end  py-4 px-3" data-aos="fade-left">
          <div className="work-descripiton px-md-4 px-2">
              This is the collection of recent webpages done by me, I've worked on the complete Front end, collaborated with amazing people for the backend integration from an ed-tech company and also i have built a few projects independently, In my timeline of working as a Front end developer,
              I have worked on numerous webpages which are yet to be deployed, below are just a few samples from the entire list.
          </div>
          </div>
          <div className="pl-list py-3">
            <Product/>
          </div>
      </div>
    </>
  );
}
