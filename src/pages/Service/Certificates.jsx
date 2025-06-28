import React from 'react';
import './Certificates.css';

/* Components */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Certificates loader */
const certificatesImg = require.context('./', false, /\.jpg$/);

const certificateFiles = [
  'certificate1',
  'certificate2',
  'certificate3',
  'certificate4',
  'certificate5',
  'certificate7',
  'certificate8',
  'certificate9',
  'certificate10',
  'certificate11',
  'certificate12',
  'certificate13',
];

const Certifications = () => {
  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main className="certifications-section">
        <h1 className="certifications-heading">My Certifications</h1>
        <div className="certifications-grid">
          {certificateFiles.map((file, index) => (
            <div className="certificate-card" key={index}>
              <img
                src={certificatesImg(`./${file}.jpg`)}
                alt={`Certificate ${index + 1}`}
                className="certificate-img"
              />
            </div>
          ))}
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Certifications;
