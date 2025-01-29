import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './QuickIntro.css';

function QuickIntro() {
  return (
    <div className="quick-intro">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="mx-auto text-center">
            <h2 className="intro-title">Bienvenue sur Tech Master</h2>
            <p className="intro-text">
              Découvrez une plateforme de formation interactive unique qui vous permet 
              d'acquérir des compétences numériques recherchées. Nos cours en direct, 
              nos formateurs experts et notre approche pratique vous garantissent une 
              expérience d'apprentissage optimale.
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default QuickIntro; 