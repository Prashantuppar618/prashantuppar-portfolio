import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/Prashantuppar_resume.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Prashant uppar , I am a full stack developer, Network Designer and AIoT Enthusiast'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='A passionate and solution-oriented engineering student specializing in Computer Science, seeking an opportunity to contribute to innovative software products. Eager to apply strong coding skills, software design knowledge, and a collaborative mindset in a high-performing team environment.'
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age:'
                                />
                            </span>
                            20
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                            Chess, Story telling, Reading and Programming
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> prashantuppar2004@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            Belagavi Karnataka,India
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    <div className='mas-info-btn'>
                        <Link to="/about">
                            <ButtomGet />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>Skills</h3>

                <h4>Languages</h4>
                <div className="skill">
                    <div><img alt="C" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" /><h5>C</h5></div>
                    <div><img alt="C++" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" /><h5>C++</h5></div>
                    <div><img alt="Python" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" /><h5>Python</h5></div>
                    <div><img alt="JavaScript" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" /><h5>JavaScript</h5></div>
                </div>

                <h4>Front-End</h4>
                <div className="skill">
                    <div><img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" /><h5>HTML</h5></div>
                    <div><img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" /><h5>CSS</h5></div>
                    <div><img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" /><h5>Bootstrap</h5></div>
                    <div><img alt="React" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" /><h5>React</h5></div>
                </div>

                <h4>Back-End</h4>
                <div className="skill">
                    <div><img alt="Node.js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" /><h5>Node.js</h5></div>
                    <div><img alt="Flask" className="icons-skils" src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" /><h5>Flask</h5></div>
                    <div><img alt="MongoDB" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" /><h5>MongoDB</h5></div>
                    <div><img alt="MySQL" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" /><h5>MySQL</h5></div>
                </div>

                <h4>Data Science & ML</h4>
                <div className="skill">
                    <div><img alt="Pandas" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" /><h5>Pandas</h5></div>
                    <div><img alt="Scikit-learn" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" /><h5>Scikit-learn</h5></div>
                    <div><img alt="Seaborn" className="icons-skils" src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" /><h5>Seaborn</h5></div>
                    <div><img alt="TensorFlow" className="icons-skils" src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" /><h5>TensorFlow</h5></div>
                </div>

                <h4>Tools</h4>
                <div className="skill">
                    <div><img alt="Git" className="icons-skils" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" /><h5>Git</h5></div>
                    <div><img alt="Postman" className="icons-skils" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" /><h5>Postman</h5></div>
                    <div><img alt="Linux" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" /><h5>Linux</h5></div>
                    <div><img alt="Arduino" className="icons-skils" src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" /><h5>Arduino</h5></div>
                </div>
            </div>

        </div>
    </section>
);

export default React.memo(About);