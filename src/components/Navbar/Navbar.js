import React from 'react';
import './Navbar.css';


export default function Navbar() {


    return (
        <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3">
  <div className="container-fluid">
    <a className="navbar-brand p-3" href="#home">SK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item mx-3">
          <a className="nav-link active" href="#home">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#work">Work</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
