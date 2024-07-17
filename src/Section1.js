import React, { useCallback, useEffect, useState } from 'react';
import './Section1.css';

const Section1 = () => {
    const [scrollEnabled, setScrollEnabled] = useState(() => localStorage.getItem('scrollEnabled') === 'true');

    useEffect(() => {

    }, [scrollEnabled]);

    const handleScroll = useCallback(() => {
        document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
        setScrollEnabled(true);
        localStorage.setItem('scrollEnabled', 'true');
    }, []);

    const handleDownloadCV = () => {
        
        const cvUrl = '/CV-Larry-Rodriguez.pdf'; 

        const link = document.createElement('a');
        link.href = cvUrl;
        link.setAttribute('download', 'cv-larry-rodriguez.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="section1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>¡Hola! Soy Larry Rodríguez, un estudiante de desarrollo de aplicaciones multiplataforma, en busca de explorar y aprender en el emocionante mundo de la tecnología.</h1>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="img-icon.svg" alt="Icono descriptivo" className="img-fluid" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center botones">
                        <button className="btn btn-info mx-4" onClick={handleScroll}>Ver Proyectos</button>
                        <button className="btn btn-info mx-4" onClick={handleDownloadCV}>Descargar CV</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
