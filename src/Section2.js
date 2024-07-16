import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaGithub, FaFilePdf } from 'react-icons/fa';
import './Section2.css';

const projects = [
    {
        title: "My Agenda",
        images: ["MyAgenda1.png", "MyAgenda2.png", "MyAgenda3.png"],
        description: "Mi Trabajo Final de Grado Superior realizado con Java, SQLite y Firebase en Android Studio. My Agenda es una aplicación que facilita la gestión de notas y calendarios integrando estas funcionalidades en una sola app. Permite la gestión de múltiples calendarios, notas y tareas.",
        repoLink: "https://github.com/l4rry9912/MyAgenda",
        pdfLink: "/TFG_LarryRodriguez_DAM.docx.pdf"
    },
    
    {
        title: "GeneradorBase Universae",
        images: ["Generador1.png", "Generador2.png", "Generador3.png"],
        description: "Aplicación de escritorio para cargar, modificar y guardar preguntas tipo test desde un archivo CSV, ademas incluye la funcionalidad para comprimir estas en un archivo ZIP. Desarrollada en Java y Swing con Ant, utilizando Java 8 y JDK 17 en ApacheNetbeans.",
        repoLink: "https://github.com/l4rry9912/GeneradorUniversae"
    },
    {
        title: "Launcher Universae",
        images: ["Launcher1.png", "Launcher2.png", "Launcher3.png"],
        description:  "Launcher a pantalla completa para lanzar simuladores educativos en ferias. Interfaz interactiva con miniaturas de grados y carrusel de imágenes de simuladores. Desarrollado con Java y Swing utilizando Java 8 y JDK 17 en ApacheNetbeans.",
        repoLink: "https://github.com/lalovalls/LauncherUniversae"
    },
    {
        title: "WEB Universae",
        images: ["WebUniversae1.png", "WebUniversae2.png", "WebUniversae3.png"],
        description: "Web para la demostración de simuladores educativos de Universae. Permite a los usuarios seleccionar y jugar diferentes simuladores. La plataforma está desarrollada en HTML, CSS y JavaScript. Cada simulador tiene su propia pagina, juegos y descripción.",
        repoLink: "https://github.com/lalovalls/WEB-UNIVERSAE"
    }
];

function Section2() {
    return (
        <section className="section2 container-md" id="projects-section">
            <div className="container-section2 container-lg">
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-lg-6" key={index}>
                            <div className="service">
                                <div className="service-content">
                                    <h3>{project.title}</h3>
                                    <Carousel>
                                        {project.images.map((image, idx) => (
                                            <Carousel.Item key={idx}>
                                                <img
                                                    className="imagen-carrusel"
                                                    src={image}
                                                    alt={`slide-${idx}`}
                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                    <p>{project.description}</p>
                                    <div className="buttons">
                                        <a href={project.repoLink} className="btn btn-info me-2" target="_blank" rel="noopener noreferrer">
                                            Repositorio <FaGithub />
                                        </a>
                                        {project.pdfLink && (
                                            <a href={project.pdfLink} className="btn btn-info me-2" target="_blank" rel="noopener noreferrer">
                                                TFG <FaFilePdf />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section2;
