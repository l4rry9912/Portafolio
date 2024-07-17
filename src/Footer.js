import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';
import './Footer.css';
import { Zenitho } from "uvcanvas";

const Footer = () => {
  return (
    <footer className="footer" id='contacto'>
      <div className="zenitho-background">
        <Zenitho className="zenitho-img" />
      </div>
      <div className="container footer-content">
        <div className="row">
          <div className="col-lg-4 col-sm-12 mb-4">
            <div className="contact-info">
              <h5>Contacto</h5>
              <ul className="list-unstyled">
                <li><a href="mailto:larrysebastianrp@gmail.com"><FaEnvelope /> L4rry3201@Gmail.com</a></li>
                <li><FaPhone /> +34 638464575</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mb-4">
            <div className="social-links">
              <h5>Redes Sociales</h5>
              <ul className="list-unstyled d-flex justify-content-center">
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/l4rry9912"><FaGithub /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/larry-rodriguez-pati%C3%B1o-800430309/"><FaLinkedin /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/larry_rodriguez9/"><FaInstagram /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <button className="btn btn-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Volver Arriba
            </button>
            <h6 className="copyright">© 2024 Larry Rodriguez</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
