import React, { useCallback, useState } from 'react';

function Section1() {

    const [scrollEnabled, setScrollEnabled] = useState(
        () => localStorage.getItem('scrollEnabled') === 'true'
    );

    const handleScroll = useCallback(() => {
        document
            .getElementById('projects-section')
            .scrollIntoView({ behavior: 'smooth' });

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
        <section className="vh-100 d-flex align-items-center text-center">
            <div className="container p-5">

                <div className="row align-items-center">

                    <div className="col-md-6 mb-4 mb-md-0">
                        <h1 className="display-5">
                            ¡Hola! Soy Larry Rodríguez, un estudiante de desarrollo
                            de aplicaciones multiplataforma, en busca de explorar
                            y aprender en el emocionante mundo de la tecnología.
                        </h1>
                    </div>

                    <div className="col-md-6 text-center">
                        <img
                            src="img-icon.svg"
                            alt="Icono descriptivo"
                            className="img-fluid w-75"
                        />
                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col text-center">

                        <button
                            className="btn btn-primary btn-lg rounded-pill px-4 mx-2"
                            onClick={handleScroll}
                        >
                            Ver Proyectos
                        </button>

                        <button
                            className="btn btn-outline-primary btn-lg rounded-pill px-4 mx-2"
                            onClick={handleDownloadCV}
                        >
                            Descargar CV
                        </button>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Section1;