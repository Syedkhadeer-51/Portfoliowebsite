import React from 'react';
import './About.css';
import { useEffect } from 'react';
import factIcon from "../Home/home-icons/about .png";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

    useEffect(() => {
        AOS.init({ duration:1000 });
     }, []);
    return (
      <>
      <div className="about" id="about" data-aos="slide-right">
          <div className="row no-gutters py-3">
          <div className="About-title d-flex justify-content-lg-start justify-content-md-center justify-content-center px-md-5 px-3" data-aos="fade-right">
                 <div className="about-title-border"></div>
                 <div className="px-3">About Me & Some Facts</div>
                 
                </div>     
              <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <img src={factIcon} alt="facts-icons" className="fact-icon " />
              </div>
              <div className="col-md-6 col-12 about-me-section py-5">
                  <div className="container-fluid">
                         <div className="about-decription">
                            I'm a Front-End-developer, I have a serious passion towards Ui effects, animations and creating dynamic and responsive web pages to provide better user experience.
                            <br /> 
                            <br />
                            Problem solver, well-organised and pay's high attention to details.
                            Intrested in entire front-end spectrum, currently learning backend enthusiastically, loves to work on projects in time sprints..
                            <br /> 
                            <br />
                            Besides making webpages and coding, I like playing football, working out and sketching, And during all these years i couldn't make a choice between Cofee and Tea, Cofee keeps me going and tea makes me feel good...!
                         </div>
                  </div>
              </div>
          </div>
      </div>
      </>
    )
}
