import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/Prashantuppar_resume.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />

              <a href={cv} target="_blank" rel="noopener noreferrer" download="Prashantuppar_resume.pdf" className="btn-codigo cv buttonDownload">
                <FormattedMessage
                  id='btn-cv'
                  defaultMessage='Download CV'
                />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="Hi, I'm Prashant Uppar, a passionate Full-Stack Developer and AI/ML + IoT Engineer from India. I build intelligent, connected systems that blend sleek interfaces, powerful backends, and embedded smart technologies to deliver practical solutions."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage="From crafting responsive web experiences with React, Node.js, and Flask to building predictive AI models and programming embedded systems with Arduino, my goal is to create seamless digital-physical integrations that drive real-world impact."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="I also enjoy working on network design and DevOps tooling, bringing scalable infrastructure and automation into the mix. I'm always learning—be it the latest in cloud-native deployments, generative AI, or optimizing system design for performance and clarity."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-4'
                    defaultMessage="Let’s build tech that solves problems, inspires creativity, and makes a difference in how we connect with the world."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}>
                  <span>Read more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">

              {/* C */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="C" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" />
                <h2 className="skill-name">C</h2>
                <p className="skill-info">
                  3 years of experience building Data Structures & Algorithms projects using C.
                </p>
              </div>

              {/* C++ */}
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="C++" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" />
                <h2 className="skill-name">C++</h2>
                <p className="skill-info">
                  2 years of experience, used for competitive programming and Arduino integration.
                </p>
              </div>

              {/* Python */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Python" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
                <h2 className="skill-name">Python</h2>
                <p className="skill-info">
                  1.5 years of experience using Python for data analysis and AI/ML applications.
                </p>
              </div>

              {/* HTML & CSS */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                <h2 className="skill-name">HTML & CSS</h2>
                <p className="skill-info">
                  2 years of experience creating responsive and accessible web interfaces.
                </p>
              </div>

              {/* JavaScript */}
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="JavaScript" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
                <h2 className="skill-name">JavaScript</h2>
                <p className="skill-info">
                  Used in various projects for frontend interactivity and backend development.
                </p>
              </div>

              {/* React */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="React" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                <h2 className="skill-name">React</h2>
                <p className="skill-info">
                  1 year of experience building frontend interfaces for minor web projects.
                </p>
              </div>

              {/* Bootstrap */}
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                  Used for styling and layout in multiple responsive web apps.
                </p>
              </div>

              {/* Node.js */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Node.js" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" />
                <h2 className="skill-name">Node.js</h2>
                <p className="skill-info">
                  Used for backend logic and server-side scripting in full stack projects.
                </p>
              </div>

              {/* Flask */}
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Flask" className="skills-img" src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" />
                <h2 className="skill-name">Flask</h2>
                <p className="skill-info">
                  Used Flask to integrate ML models with web UI and RESTful APIs.
                </p>
              </div>

              {/* MongoDB */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="MongoDB" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" />
                <h2 className="skill-name">MongoDB</h2>
                <p className="skill-info">
                  Used in full-stack projects for flexible NoSQL data storage.
                </p>
              </div>

              {/* MySQL */}
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="MySQL" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" />
                <h2 className="skill-name">MySQL</h2>
                <p className="skill-info">
                  3 years experience with SQL for queries and enterprise data management.
                </p>
              </div>

              {/* Pandas */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Pandas" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" />
                <h2 className="skill-name">Pandas</h2>
                <p className="skill-info">
                  Used for data wrangling, cleaning, and transformation in ML projects.
                </p>
              </div>

              {/* Seaborn */}
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Seaborn" className="skills-img" src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" />
                <h2 className="skill-name">Seaborn</h2>
                <p className="skill-info">
                  Utilized for statistical data visualization and insights.
                </p>
              </div>

              {/* Scikit-learn */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Scikit-learn" className="skills-img" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" />
                <h2 className="skill-name">Scikit-learn</h2>
                <p className="skill-info">
                  Used to train and evaluate traditional ML models efficiently.
                </p>
              </div>

              {/* TensorFlow */}
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="TensorFlow" className="skills-img" src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" />
                <h2 className="skill-name">TensorFlow</h2>
                <p className="skill-info">
                  Experience in building and deploying deep learning models.
                </p>
              </div>

              {/* Postman */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Postman" className="skills-img" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
                <h2 className="skill-name">Postman</h2>
                <p className="skill-info">
                  Used for testing and documenting APIs in full-stack applications.
                </p>
              </div>

              {/* Git */}
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Git" className="skills-img" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
                <h2 className="skill-name">Git</h2>
                <p className="skill-info">
                  Used for version control and collaboration with GitHub repositories.
                </p>
              </div>

              {/* Linux */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Linux" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" />
                <h2 className="skill-name">Linux</h2>
                <p className="skill-info">
                  1 year experience using Linux for networking, DevOps, and cloud tasks.
                </p>
              </div>

              {/* Arduino */}
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Arduino" className="skills-img" src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" />
                <h2 className="skill-name">Arduino</h2>
                <p className="skill-info">
                  Experience in programming microcontrollers for IoT and hardware projects.
                </p>
              </div>

              {/* Mininet & DevOps */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="DevOps" className="skills-img" src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" />
                <h2 className="skill-name">DevOps</h2>
                <p className="skill-info">
                  Recently started exploring DevOps tools for CI/CD workflows.
                </p>
              </div>

            </div>
          </div>

        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;