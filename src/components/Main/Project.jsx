import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./EDA.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Student Narcission Analysis</h3>
                            <p>
                                EDA/ML project
                            </p>
                            <p className="tecnologias">
                                <span> -</span> Python
                                <span> -</span> Seaborn
                                <span> -</span> Pandas

                            </p>
                            <a href="" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Prashantuppar618/student-Narcissism-prediction.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./eeg.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Brainwave Insights</h3>
                            <p>
                                EEG Analysis
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> React
                                <span> -</span> Bootstrap
                                <span> -</span> Tenserflow
                                <span> -</span> Flask
                            </p>
                            <a href="https://github.com/Prashantuppar618/brainwave-insights.git/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Prashantuppar618/brainwave-insights.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./ems.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Event management</h3>
                            <p>
                                Event Management system-DSA approach
                            </p>
                            <p className="tecnologias">
                                DSA
                                <span> -</span> React
                                <span> -</span> CSS
                                <span> -</span> NodeJS
                                <span> -</span> MongoDB
                                <span> -</span> Express
                                <span> -</span> AI/ML
                                <span> -</span> Postman

                            </p>
                            <a href="https://github.com/Prashantuppar618/Event_management_System_DSA_approach.git/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Prashantuppar618/Event_management_System_DSA_approach.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Himrakshak.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Himrakshak</h3>
                            <p>
                                National level compition
                            </p>
                            <p className="tecnologias">
                                C++
                                <span> -</span> React
                                <span> -</span> CSS
                                <span> -</span> NodeJS
                                <span> -</span> MongoDB
                                <span> -</span> Arduino
                            </p>
                            <a href="https://github.com/Prashantuppar618/HimRakshak_CANSAT.git/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Prashantuppar618/HimRakshak_CANSAT.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./spam_detection.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Spam Message Detection</h3>
                            <p>
                                ML.NLP project
                            </p>
                            <p className="tecnologias">
                                Tenserflow
                                <span> -</span> React
                                <span> -</span> CSS
                                <span> -</span> SciKit-Learn
                                <span> -</span> Tensorflow
                                <span> -</span> Flask
                            </p>
                            <a href="https://github.com/Prashantuppar618/spam-detection-app.git/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Prashantuppar618/spam-detection-app.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./cisco.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Smart and Secure healthcare Network</h3>
                            <p>
                                Mini project
                            </p>
                            <p className="tecnologias">
                                Cisco packet tracer
                            </p>
                            <a href="https://github.com/Prashantuppar618/smart_and_secured_healthcare_network.git/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Prashantuppar618/smart_and_secured_healthcare_network.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./IICS.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>eBay Analysis</h3>
                            <p>
                                Informatica cloud project
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> React
                                <span> -</span> Mysql

                            </p>
                            <a href="https://ebay-analysis.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Prashantuppar618/eBay-sales-analysis.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./stair_glider.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Stair Glider</h3>
                            <p>
                                Micro-controller project
                            </p>
                            <p className="tecnologias">
                                <span> -</span> Microchip-studio
                                <span> -</span> C++
                            </p>
                            <a href="https://github.com/Prashantuppar618/atmega32-stair-glider.git/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Prashantuppar618/atmega32-stair-glider.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet />
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);