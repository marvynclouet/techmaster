import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

function About() {
  const domains = [
    {
      id: 1,
      title: "Tech",
      icon: "💻",
      description: "Développement (web, mobile, IA, DevOps), cybersécurité, cloud computing"
    },
    {
      id: 2,
      title: "Création numérique",
      icon: "🎨",
      description: "Design graphique, montage vidéo, UX/UI, modélisation 3D"
    },
    {
      id: 3,
      title: "Business digital",
      icon: "💼",
      description: "E-commerce, marketing digital, SaaS, entrepreneuriat en ligne"
    },
    {
      id: 4,
      title: "FinTech",
      icon: "💰",
      description: "Cryptomonnaies, trading, blockchain, DeFi"
    },
    {
      id: 5,
      title: "Freelance",
      icon: "🚀",
      description: "Copywriting, traduction, gestion administrative"
    },
    {
      id: 6,
      title: "Création de contenu",
      icon: "🎥",
      description: "Podcasts, vidéos, musique, écriture"
    },
    {
      id: 7,
      title: "Enseignement",
      icon: "📚",
      description: "Coaching, création de cours interactifs"
    }
  ];

  const features = [
    {
      id: 1,
      title: "Formations en direct",
      icon: "📺",
      description: "Cours interactifs type Twitch avec des experts"
    },
    {
      id: 2,
      title: "Abonnements flexibles",
      icon: "🎯",
      description: "Accès personnalisé aux cours selon vos besoins"
    },
    {
      id: 3,
      title: "Monétisation",
      icon: "💎",
      description: "Opportunités de revenus pour les formateurs"
    },
    {
      id: 4,
      title: "Collaboration",
      icon: "🤝",
      description: "Échanges en direct et exercices pratiques"
    }
  ];

  return (
    <Container className="about-container">
      <section className="hero-section text-center">
        <h1>À propos de Tech Master</h1>
        <p className="lead">
          Une plateforme de formation en ligne interactive couvrant les domaines numériques les plus recherchés
        </p>
      </section>

      <section className="concept-section">
        <h2>Notre Vision</h2>
        <p>
          Tech Master est née d'une vision simple : créer une plateforme éducative polyvalente, 
          interactive et accessible qui permet aux utilisateurs de développer des compétences 
          monétisables et de construire leur indépendance financière.
        </p>
      </section>

      <section className="domains-section">
        <h2>Nos Domaines de Formation</h2>
        <Row>
          {domains.map(domain => (
            <Col key={domain.id} md={6} lg={4} className="mb-4">
              <Card className="domain-card">
                <Card.Body>
                  <div className="domain-icon">{domain.icon}</div>
                  <Card.Title>{domain.title}</Card.Title>
                  <Card.Text>{domain.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="features-section">
        <h2>Fonctionnalités Principales</h2>
        <Row>
          {features.map(feature => (
            <Col key={feature.id} md={6} lg={3} className="mb-4">
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">{feature.icon}</div>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="target-section">
        <h2>Public Cible</h2>
        <div className="target-content">
          <p>
            Notre plateforme s'adresse aux :
          </p>
          <ul>
            <li>Freelances en quête d'évolution</li>
            <li>Entrepreneurs du digital</li>
            <li>Créateurs de contenu</li>
            <li>Étudiants ambitieux</li>
            <li>Professionnels en reconversion</li>
          </ul>
        </div>
      </section>
    </Container>
  );
}

export default About; 