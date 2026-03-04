import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faJava, faPhp, faCloudflare} from '@fortawesome/free-brands-svg-icons';

function Section3() {

    const skills = [
        { name: 'JavaScript', level: 80, icon: faJsSquare },
        { name: 'Bootstrap', level: 80, icon: faBootstrap },
        { name: 'Java', level: 60, icon: faJava },
        { name: 'HTML', level: 90, icon: faHtml5 },
        { name: 'CSS', level: 90, icon: faCss3Alt },
        { name: 'React', level: 80, icon: faReact },
        { name: 'PHP', level: 70, icon: faPhp },
        { name: 'Sql', level: 60, icon: faCloudflare }
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section id="habilidades" className="py-5" ref={ref}>

            <div className="container">

                <h2 className="text-center mb-5">
                    Habilidades en Programación
                </h2>

                <div className="row g-4">

                    {skills.map((skill, index) => (

                        <div className="col-12 col-md-6" key={index}>

                            <div className="card shadow-sm border-0 rounded-4 h-100 p-4">

                                <div className="d-flex align-items-center gap-3">

                                    <FontAwesomeIcon icon={skill.icon} size="2x" />

                                    <h4 className="mb-0">{skill.name}</h4>

                                </div>

                                <div className="progress mt-4 rounded-pill" style={{ height: "20px" }}>

                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `${inView ? skill.level : 0}%`,
                                            transition: "width 2s ease-in-out"
                                        }}
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