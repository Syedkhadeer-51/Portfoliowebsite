import React from 'react';
import "./Skills.css";
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Skills() {
    useEffect(() => {
        AOS.init({ duration:1000 });
     }, []);

 
 
    const htmlStyle={
        backgroundColor:"#2b00d4",
        width:"95%"
    };
    const CssStyle={
        backgroundColor:"#2b00d4",
        width:"95%"
    };
    const JSStyle={
        backgroundColor:"#2b00d4",
        width:"80%"
    };
    const JquerryStyle={
        backgroundColor:"#2b00d4",
        width:"65%"
    };
    const BootstrapStyle={
        backgroundColor:"#2b00d4",
        width:"90%"
    };
    const ReactStyle={
        backgroundColor:"#2b00d4",
        width:"65%"
    };
    const NodeStyle={
        backgroundColor:"#2b00d4",
        width:"55%"
    };
    const PythonStyle={
        backgroundColor:"#2b00d4",
        width:"65%"
    };
    
    return (
        <>
        <div className="skill" id="skills"  >
             <div className="skills-title d-flex justify-content-lg-start justify-content-md-center justify-content-center px-md-5 px-3" data-aos="fade-right">
                 <div className="title-border"></div>
                 <div className="px-3" >Skills & Experience</div>
                 
                </div>
           <div className="row no-gutters my-5"  data-aos="fade-left">
            <div className="col-md-6 col-12 skill-description d-flex align-items-center">
                <div className="skills-description px-4">
                    <div className="my-4 "> I create successfull webpages that are fast, easy to use and built with best practices.</div>
                    <div className="my-4 ">Front End Developer with 9 months of hands-on experience in designing and building responsive web designs.</div>
                    <div className="my-4 "> The main area of my expertise is front end developement, HTML, CSS, JS with modern frameworks and libraries like Bootstrap and React JS.</div>
                    <div className="my-4 "> I also have experience in Node JS and npm.</div>
               
                </div>
            </div>
             <div className="col-md-6 col-12 skill-representation d-flex align-items-center">
            <div className="container-fluid px-4">
                <div className="wrapper">
                    <div className="my-3">
                        <div className="skillname">HTML</div>
                        <div className="progress my-2">
                        <div className="bar" style={htmlStyle}></div>
                    </div>
                    <div className="my-3">
                        <div className="skillname">CSS</div>
                        <div className="progress my-2" >
                        <div className="bar" style={CssStyle}></div>
                    </div>
                    <div className="my-3">
                        <div className="skillname">JAVASCRIPT</div>
                        <div className="progress my-2" >
                        <div className="bar" style={JSStyle}></div>
                    </div>
                    </div>
                    <div className="my-3">
                    <div className="skillname">JQUERRY</div>
                        <div className="progress my-2" >
                        <div className="bar" style={JquerryStyle}></div>
                    </div>
                    </div>
                    <div className="my-3">
                        <div className="skillname">BOOTSTRAP</div>
                        <div className="progress my-2" >
                        <div className="bar" style={BootstrapStyle}></div>
                    </div>
                    </div>
                    <div className="my-3">
                        <div className="skillname">React JS</div>
                        <div className="progress my-2" >
                        <div className="bar" style={ReactStyle}></div>
                    </div>
                    </div>
                    <div className="my-3">
                        <div className="skillname">Node JS</div>
                        <div className="progress my-2" >
                        <div className="bar" style={NodeStyle}></div>
                    </div>
                    </div>
                    <div className="my-3">
                        <div className="skillname">PYTHON</div>
                        <div className="progress my-2" >
                        <div className="bar" style={PythonStyle}></div>
                    </div>
                    </div>
                    
                 
                 </div>

            </div>
            </div>
            </div>
            </div> 
            </div>
        </div>
        </>
    )
}
