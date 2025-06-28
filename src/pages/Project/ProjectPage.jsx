import React, { useState } from 'react';
import './ProjectPage.css';
import Modal from './Modal';
import { NavLink } from 'react-router-dom';
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from '../../components/ParticlesBg/ParticleBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { FormattedMessage } from 'react-intl';

const proyectsImg = require.context('../../img', true);

const techIcons = {
  HTML5: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  CSS3: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  JS: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
  React: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  NodeJS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  Express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Cplusplus: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  Arduino: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
  ScikitLearn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  Cisco: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg',
  Microchip: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
};

const Project = () => {
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />
      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id='projects' defaultMessage='Projects' />
          </h1>
        </section>
        <section className="projects__grid paginas-web">
          {[
            { src: 'ems.png', toggle: cambiarEstadoModal13 },
            { src: 'Himrakshak.png', toggle: cambiarEstadoModal12 },
            { src: 'spam_detection.png', toggle: cambiarEstadoModal11 },
            { src: 'cisco.png', toggle: cambiarEstadoModal10 },
            { src: 'eeg.png', toggle: cambiarEstadoModal9 },
            { src: 'stair_glider.jpg', toggle: cambiarEstadoModal8 },
            { src: 'EDA.jpg', toggle: cambiarEstadoModal7 },
            { src: 'IICS.png', toggle: cambiarEstadoModal6 }
          ].map((item, index) => (
            <div className="projects__item" key={index}>
              <a onClick={() => item.toggle(prev => !prev)}>
                <img src={proyectsImg(`./${item.src}`)} alt="Project" className="projects__img" />
              </a>
            </div>
          ))}
        </section>
      </main>

      <Modal estado={estadoModal13} cambiarEstado={cambiarEstadoModal13}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./ems.png`)} alt="EMS" />
            </div>
            <div className="eins-modal-text">
              <p><strong>Event Management System – DSA & AIML Approach</strong></p>
              <p>A smart, AI-powered platform designed to automate and optimize event planning — from venue discovery to booking confirmation — integrating classical algorithms and modern web technologies.</p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/Prashantuppar618/Event_management_System_DSA_approach.git" target="_blank">GitHub</a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img src={techIcons.React} alt="React" />
                  <img src={techIcons.CSS3} alt="CSS" />
                  <img src={techIcons.NodeJS} alt="NodeJS" />
                  <img src={techIcons.MongoDB} alt="MongoDB" />
                  <img src={techIcons.Express} alt="Express" />
                  <img src={techIcons.Python} alt="AI/ML" />
                  <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* Modal for Himrakshak */}
      <Modal estado={estadoModal12} cambiarEstado={cambiarEstadoModal12}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./Himrakshak.png`)} alt="Himrakshak" />
            </div>
            <div className="eins-modal-text">
              <p><strong>🛰️ HimRakshak – Border Surveillance CanSAT System</strong></p>
              <p>Project HimRakshak is a rugged, modular, and autonomous monitoring system designed for the Indian Border Security Forces, deployed via a CanSAT (Can-sized Satellite) prototype. It continuously monitors environmental conditions, tracks location, detects motion anomalies, and displays real-time sensor data on a full-stack web application.</p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/Prashantuppar618/HimRakshak_CANSAT.git" target="_blank">GitHub</a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img src={techIcons.React} alt="React" />
                  <img src={techIcons.CSS3} alt="CSS" />
                  <img src={techIcons.Cplusplus} alt="C++" />
                  <img src={techIcons.Arduino} alt="Arduino" />
                  <img src={techIcons.NodeJS} alt="NodeJS" />
                  <img src={techIcons.MongoDB} alt="MongoDB" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal for Spam Detection */}
      <Modal estado={estadoModal11} cambiarEstado={cambiarEstadoModal11}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./spam_detection.png`)} alt="Spam Detection" />
            </div>
            <div className="eins-modal-text">
              <p><strong>📦 Spam / Ham Message Detection and Domain Classifier</strong></p>
              <p>This project is a full-stack application that classifies user-input messages into Spam or Ham (not spam) and further categorizes spam into subdomains like promotion, phishing, advertisement, lottery, and more.</p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/Prashantuppar618/spam-detection-app.git" target="_blank">GitHub</a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img src={techIcons.React} alt="React" />
                  <img src={techIcons.CSS3} alt="CSS" />
                  <img src={techIcons.TensorFlow} alt="TensorFlow" />
                  <img src={techIcons.ScikitLearn} alt="Scikit-Learn" />
                  <img src={techIcons.Flask} alt="Flask" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal for Smart Healthcare Network */}
      <Modal estado={estadoModal10} cambiarEstado={cambiarEstadoModal10}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./cisco.png`)} alt="Healthcare Network" />
            </div>
            <div className="eins-modal-text">
              <p><strong>🏥 Smart and Secure Healthcare Network</strong></p>
              <p>This project presents an integrated Smart and Secured Healthcare Network that combines IoT automation with secure networking protocols to address the pressing challenges of:

                Securing sensitive patient data

                Enabling encrypted staff communication

                Automating fire, smoke, and temperature detection

                Ensuring network resilience using VPN, firewalls, and OSPF routing
                The solution was designed and tested using Cisco Packet Tracer, featuring a modular, scalable architecture tailored to hospital operations.</p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/Prashantuppar618/smart_and_secured_healthcare_network.git" target="_blank">GitHub</a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img src={techIcons.Cisco} alt="Cisco" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal for EEG Signal Processing */}
      <Modal estado={estadoModal9} cambiarEstado={cambiarEstadoModal9}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./eeg.png`)} alt="EEG Signal" />
            </div>
            <div className="eins-modal-text">
              <p><strong>🧠 EEG Signal Processing for Movement Prediction</strong></p>
              <p>A powerful web-based and notebook-driven tool for analyzing .rd EEG files to predict mental health indicators including Seizure, Attention, Emotion, and Anxiety Levels using machine learning models and visualizing EEG brain topographic maps.</p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/Prashantuppar618/brainwave-insights.git" target="_blank">GitHub</a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img src={techIcons.Python} alt="Python" />
                  <img src={techIcons.ScikitLearn} alt="Scikit-Learn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal for Stair Glider */}
      <Modal estado={estadoModal8} cambiarEstado={cambiarEstadoModal8}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./stair_glider.jpg`)} alt="Stair Glider" />
            </div>
            <div className="eins-modal-text">
              <p><strong>♿ Stair Glider for Physically Challenged People</strong></p>
              <p>A smart assistive stair glider designed to help physically challenged and elderly people navigate residential staircases with ease, using an ATmega32 microcontroller, sensors, display, and actuators.</p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/Prashantuppar618/atmega32-stair-glider.git" target="_blank">GitHub</a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img src={techIcons.Microchip} alt="Microcontroller" />
                  <img src={techIcons.Cplusplus} alt="C++" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal for EDA */}
      <Modal estado={estadoModal7} cambiarEstado={cambiarEstadoModal7}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./EDA.jpg`)} alt="EDA" />
            </div>
            <div className="eins-modal-text">
              <p><strong>📊 Exploratory Data Analysis on Medical Dataset</strong></p>
              <p>This project aims to explore and understand the patterns behind anxiety disorders using Exploratory Data Analysis (EDA) and data preprocessing techniques. The dataset used is sourced from Kaggle and focuses on the impact of gaming behavior on anxiety levels, narcissism, and related psychological factors.</p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/Prashantuppar618/student-Narcissism-prediction.git" target="_blank">GitHub</a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img src={techIcons.Python} alt="Python" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal for IICS */}
      <Modal estado={estadoModal6} cambiarEstado={cambiarEstadoModal6}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./IICS.png`)} alt="IICS" />
            </div>
            <div className="eins-modal-text">
              <p><strong>💼 IICS Department Website</strong></p>
              <p>eBay conpany sales analysis to increase regional sales </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://ebay-analysis.netlify.app/" target="_blank">Site</a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img src={techIcons.HTML5} alt="HTML" />
                  <img src={techIcons.CSS3} alt="CSS" />
                  <img src={techIcons.React} alt="React" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>


      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Project;
