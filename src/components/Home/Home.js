import React from 'react';
import "./Home.css";
import { init } from 'ityped';
import icon from "../Home/home-icons/introicon.png";
import { useEffect, useRef } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
    useEffect(() => {
       AOS.init({ duration:1000 });
    }, []);

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: false,
            loop:false,
             strings: ['Web Developer Based in Silicon City, Banglore...' ],
             
             });
    }, [])
    return (
        <>
        <div className="home" id="home" >
            <div className="row no-gutters abt-section mt-5" >
            <div className="col-md-6 col-12 px-lg-2 px-0 py-5 desc-section  d-flex align-items-center">
            <div className="container-fluid" >
                        <div className="py-2 px-3">
                            <div className="title-txt py-2" data-aos="fade-right">Hey there, </div>
                            <div className="title-name py-2" data-aos="fade-left">I'm Syed khadeer</div>
                        </div>
                        <div className="py-2 px-3">
                        <div className="desc-txt py-2" ref={textRef}></div>
                             <div className="i-desc py-3" data-aos="fade-right">I enjoy making websites with creative designs and animations. When I'm not writing code, you'll find me cooking, gaming and working out in the gym.</div>
                        </div>
                    </div>
            </div>
            <div className="col-md-6 col-12 py-5 icon-section  d-flex align-items-center px-0">
            <div className="container-fluid text-center p-md-3 p-0">
                        <img className="intro-icon lazyloaded" src={icon} alt="intro-icon" />
                        <div className="center-con d-flex justify-content-center py-2">
                      
                            <div className="round">
                            <span></span>
                             <span></span>
                            <span></span>
                             <span></span>
                            </div>
    
                            </div>
                    </div>
            </div>
         

            </div>  
        </div>
        </>
    )
}
