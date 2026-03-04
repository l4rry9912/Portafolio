import React, { useCallback, useState } from 'react';

function Section1() {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleScroll = useCallback(() => {
        const section = document.getElementById('proyectos');

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

    }, []);

    const handleDownloadCV = () => {

        setLoading(true);
        setMessage('');

        const cvUrl = '/cv-larry-rodriguez.pdf';

        setTimeout(() => {

            const link = document.createElement('a');
            link.href = cvUrl;
            link.download = 'cv-larry-rodriguez.pdf';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setLoading(false);
            setMessage('Curriculum descargado');

        }, 800);

    };

    return (
        <section className="vh-100 d-flex align-items-center text-center mt-2">
            <div className="container p-5">

                <div className="row align-items-center">

                    <div className="col-md-6 mb-4 mb-md-0">
                        <h1 className="display-6">
                            Soy desarrollador de software y me apasiona el mundo de la tecnología y la programación. Me gusta aprender y experimentar con nuevas herramientas que me permitan construir proyectos funcionales y seguir mejorando mis habilidades técnicas.
                        </h1>
                    </div>

                    <div className="col-md-6 text-center">
                        <img
                            src="/fotoLarry.jpeg"
                            alt="Icono descriptivo"
                            className="img-fluid shadow"
                            style={{ border: '1px dashed black', borderRadius: '100%', height: '400px', width: '400px', objectFit: 'cover' }}
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
                            disabled={loading}
                        >
                            {loading ? "Descargando..." : "Descargar CV"}
                        </button>

                        {message && (
                            <p className="mt-3 text-success fw-semibold">
                                {message}
                            </p>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Section1;