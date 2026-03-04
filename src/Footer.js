import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';
import { Zenitho } from "uvcanvas";

function Footer() {

  return (
    <footer id="contacto" className="position-relative overflow-hidden text-white py-4">
      <div className="position-absolute top-0 start-0 w-100 h-100 ">
        <Zenitho />
      </div>
      <div className="container position-relative py-5">

        <div className="row text-center text-lg-start align-items-center rounded-4 bg-dark opacity-75 p-5">
          <div className="col-lg-4 col-12 text-center">

            <h5 className="fw-bold mb-3">Contacto</h5>

            <ul className="list-unstyled small">

              <li className="mb-2">
                <a href="mailto:larrysebastianrp@gmail.com"
                  className="text-white text-decoration-none">

                  <FaEnvelope className="me-2" />
                  larrysebastianrp@gmail.com

                </a>
              </li>

              <li>
                <FaPhone className="me-2" />
                +34 674 65 83 22
              </li>

            </ul>

          </div>
          <div className="col-lg-4 col-12">

            <h5 className="fw-bold mb-3 text-center">Redes Sociales</h5>

            <div className="d-flex justify-content-center gap-4 fs-2">

              <a href="https://github.com/l4rry9912"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white">

                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/larry-rodriguez-pati%C3%B1o-800430309/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white">

                <FaLinkedin />
              </a>

              <a href="https://www.instagram.com/larry_rodriguez9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white">

                <FaInstagram />
              </a>

            </div>

          </div>

          {/* Botón arriba */}
          <div className="col-lg-4 col-12 text-center">

            <button
              className="btn btn-info rounded-pill px-4 mb-3"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Volver Arriba
            </button>

            <h6 className="small opacity-75">
              © 2024 Larry Rodriguez
            </h6>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;