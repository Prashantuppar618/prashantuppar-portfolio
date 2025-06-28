import React from 'react';
import './service.css';
/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Services'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='Design UX/UI'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Web development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-chart-bar"></i>
                <h3>
                    <FormattedMessage
                        id='data-analysis'
                        defaultMessage='Data Analysis'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='data-analysis-info'
                        defaultMessage='Extracting insights from structured and unstructured data using tools like Python, Excel, and visualization libraries to support data-driven decision making.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-brain"></i>
                <h3>
                    <FormattedMessage
                        id='ai-ml'
                        defaultMessage='AI/ML Model Building'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='ai-ml-info'
                        defaultMessage='Building and training machine learning and deep learning models to solve real-world problems like prediction, classification, and pattern recognition.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-network-wired"></i>
                <h3>
                    <FormattedMessage
                        id='network-design'
                        defaultMessage='Network Design & Analysis'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='network-design-info'
                        defaultMessage='Designing efficient network topologies, analyzing performance, and proposing secure, scalable solutions tailored to organizational infrastructure needs.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-microchip"></i>
                <h3>
                    <FormattedMessage
                        id='hardware-coding'
                        defaultMessage='Hardware Coding (Arduino & Microcontrollers)'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='hardware-coding-info'
                        defaultMessage='Programming embedded systems like Arduino, ESP32, and microcontrollers to create IoT prototypes, automation systems, and electronic solutions.'
                    />
                </p>
            </div>
        </div>
    </section>
);

export default React.memo(Service);
