import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Section3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faJava } from '@fortawesome/free-brands-svg-icons';

function Section3() {
    const skills = [
        { name: 'JavaScript', level: 50, icon: faJsSquare },
        { name: 'Bootsatrp', level: 50, icon: faBootstrap },
        { name: 'Java', level: 60, icon: faJava },
        { name: 'HTML', level: 90, icon: faHtml5 },
        { name: 'CSS', level: 90, icon: faCss3Alt },
        { name: 'React', level: 50, icon: faReact }
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section className="section3" ref={ref} id='habilidades'>
            <div className="container-section3 container-lg">
            <h2 className="text-center">Habilidades en Programación</h2>
                <div className="row">
                    {skills.map((skill, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <div className="skill-container">
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={skill.icon} size="2x" className="mr-3" />
                                    <h4 className="mb-0">{skill.name}</h4>
                                </div>
                                <div className="progress mt-3">
                                    <div
                                        className={`progress-bar ${inView ? 'fill' : ''}`}
                                        role="progressbar"
                                        style={{ width: `${inView ? skill.level : 0}%` }}
                                        aria-valuenow={skill.level}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        {skill.level}%
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

export default Section3;

