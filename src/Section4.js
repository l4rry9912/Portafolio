import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

function Section4() {

  const educationData = [
    {
      institution: 'Las Americas IED',
      degree: 'Bachillerato',
      period: '2006 - 2018',
      description: 'Cursé mi bachillerato en Las Americas IED.'
    },
    {
      institution: 'Universae',
      degree: 'Desarrollo de Aplicaciones Multiplataforma',
      period: '2022 - 2024',
      description: 'Realice mi grado superior de Desarrollo de Aplicaciones Multiplataforma.'
    },
    {
      institution: 'IES Clara del Rey',
      degree: 'Desarrollo de Aplicaciones Web',
      period: '2025 - Actualmente',
      description: 'Me encuentro realizando mi grado superior de Desarrollo de Aplicaciones Web.'
    }
  ];

  const experienceData = [
    {
      company: 'High Education',
      position: 'Prácticas',
      period: '3 meses',
      description: 'Prácticas en desarrollo de software y web.'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const aboutMeContent = `Soy estudiante de desarrollo de software. He finalizado el ciclo de Desarrollo de Aplicaciones Multiplataforma (DAM) y actualmente estoy cursando Desarrollo de Aplicaciones Web (DAW), donde sigo ampliando mis conocimientos en programación y tecnologías web.
Me gusta aprender nuevas herramientas y enfrentarme a problemas de desarrollo que me ayuden a mejorar mis habilidades técnicas.
Mi objetivo es seguir creciendo como desarrollador, participando en proyectos que me permitan aplicar lo que aprendo y ganar experiencia práctica en el mundo del software.`;

  const objectivesContent = `Mis objetivos profesionales se centran en seguir formándome como desarrollador, mejorando mis habilidades en el desarrollo de software y especializándome en el desarrollo de aplicaciones web y multiplataforma. Me gustaría participar en proyectos reales que me permitan crecer técnica y profesionalmente mientras sigo aprendiendo nuevas tecnologías.`;

  return (
    <section id="sobremi" ref={ref} className="py-5">

      <div className="container">

        <div className="card shadow border-0 rounded-4 mb-5 p-4">
          <h2 className="text-center mb-4">Sobre Mí</h2>

          <p className="text-center text-muted" style={{ whiteSpace: "pre-line" }}>
            {aboutMeContent}
          </p>

          <div className="text-center text-primary fs-2 mt-3">
            <FaCode />
          </div>
        </div>

        <div className="row g-4">

          <div className="col-md-6">
            <h2 className="text-center mb-4">Educación</h2>

            {educationData.map((edu, index) => (
              <div
                key={index}
                className="card shadow-sm border-0 rounded-4 p-4 mb-4"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease ${index * 0.2}s`
                }}
              >
                <div className="text-center text-primary fs-2 mb-3">
                  <FaGraduationCap />
                </div>

                <h5 className="text-center text-primary">
                  {edu.degree} - {edu.institution}
                </h5>

                <p className="text-center text-muted">
                  {edu.period}
                </p>

                <p className="text-center">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          <div className="col-md-6">
            <h2 className="text-center mb-4">Experiencia Laboral</h2>

            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="card shadow-sm border-0 rounded-4 p-4 mb-4"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease ${index * 0.2}s`
                }}
              >
                <div className="text-center text-primary fs-2 mb-3">
                  <FaBriefcase />
                </div>

                <h5 className="text-center text-primary">
                  {exp.position} - {exp.company}
                </h5>

                <p className="text-center text-muted">
                  {exp.period}
                </p>

                <p className="text-center">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        <div className="card shadow border-0 rounded-4 mt-5 p-5 bg-white">
          <h2 className="text-center mb-4">Objetivos Profesionales</h2>

          <p className="text-center text-muted" style={{ whiteSpace: "pre-line" }}>
            {objectivesContent}
          </p>
        </div>

      </div>
    </section>
  );
}

export default Section4;