import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import './Section4.css';

const educationData = [
  {
    institution: 'Las Americas IED',
    degree: 'Bachillerato',
    period: '2006 - 2018',
    description:
      'Cursé mi bachillerato en Las Americas IED, donde desarrollé habilidades fundamentales.',
  },
  {
    institution: 'Universae',
    degree: 'Desarrollo de Aplicaciones Multiplataforma',
    period: '2022 - 2024',
    description:
      'Realice mi grado superior en este centro especializado en formacion profesional.',
  },
];

const experienceData = [
  {
    company: 'High Education',
    position: 'Prácticas',
    period: '3 meses',
    description:
      'Realicé prácticas en High Education SL, donde adquirí experiencia práctica en el desarrollo de software y web.',
  },
];

const Section4 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const aboutMeContent = `
    Soy un estudiante que se aventura en el mundo del desarrollo de aplicaciones multiplataforma. Me encanta sumergirme en nuevas tecnologías y tengo una obsesión saludable por encontrar soluciones innovadoras a los problemas más complejos.\n

    Como desarrollador junior, mi meta es seguir aprendiendo y creciendo en este campo. Estoy buscando oportunidades para aplicar mis habilidades técnicas y creativas en proyectos que me permitan aprender y desarrollarme aún más.

    ¡Estoy aquí para absorber conocimiento como una esponja! 🚀`;

  const objectivesContent = `
    Mis objetivos profesionales incluyen:
    - Convertirme en un desarrollador de software versátil y eficiente.
    - Especializarme en el desarrollo de aplicaciones multiplataforma y web.`;

  return (
    <section className="section4" ref={ref} id='sobremi'>
      <div className="container-section4 container">
        <div className={`container bg-white py-5 mb-5 sobremi-item ${inView ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title text-center mb-5">Sobre Mí</h2>
              <div className="about-me-content text-center">
                <p className="about-me-text">
                  {aboutMeContent}
                </p>
                <div className="about-me-icons">
                  <FaCode className={`about-me-icon ${inView ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="education">
              <h2 className="section-title text-center mb-5">Educación</h2>
              {educationData.map((education, index) => (
                <div
                  key={index}
                  className={`education-item ${inView ? 'fade-in' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="education-content">
                    <h3 className="education-title">
                      {education.degree} - {education.institution}
                    </h3>
                    <p className="education-period">{education.period}</p>
                    <p className="education-description">{education.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="experience">
              <h2 className="section-title text-center mb-5">Experiencia Laboral</h2>
              {experienceData.map((experience, index) => (
                <div
                  key={index}
                  className={`experience-item ${inView ? 'fade-in' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="experience-icon">
                    <FaBriefcase />
                  </div>
                  <div className="experience-content">
                    <h3 className="experience-title">{experience.position} - {experience.company}</h3>
                    <p className="experience-period">{experience.period}</p>
                    <p className="experience-description">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`container bg-light py-5 mt-5 objetivos-item ${inView ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title text-center mb-5">Objetivos Profesionales</h2>
              <div className="objectives-content text-center">
                <p className="objectives-text">
                  {objectivesContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
