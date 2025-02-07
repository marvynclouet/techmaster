import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './QuickIntro.css';
import logo from '../assets/logo.png';
import TechScroll from '../composants/TechScroll';

function QuickIntro() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="quick-intro">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="mx-auto text-center">
            <h2 className="intro-title">Devenez Digital Nomade avec Tech Master</h2>
            <p className="intro-text">
              Tech Master est la plateforme qui vous permet de devenir digital nomade en apprenant des compétences 
              dans les domaines de la tech, de l'audiovisuel et bien plus encore. Nos formations interactives et nos 
              formateurs experts vous offrent une expérience d'apprentissage pratique et flexible, adaptée à vos 
              ambitions professionnelles.
            </p>
            <div className="intro-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Formations</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Experts</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Étudiants</span>
              </div>
            </div>
            <button onClick={scrollToNextSection} className="discover-button">
              Découvrir
              <span className="discover-arrow">↓</span>
            </button>
          </Col>
        </Row>
      </Container>
      <TechScroll />
    </div>
  );
}

export default QuickIntro;
