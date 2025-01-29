import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { BsFillCircleFill } from 'react-icons/bs';
import './LiveFormations.css';

function LiveFormations() {
  const liveFormations = [
    {
      id: 1,
      title: "Introduction à React.js",
      formateur: "Alex Dev",
      avatar: "../assets/mbappe.jpg",
      participants: 145,
      startTime: "14:00",
      duration: "2h",
      niveau: "Débutant",
      thumbnail: "../assets/Les-nouveaux-concepts-proposes-par-les-YouTubeurs-Pour-cette-rentree-2022.-4.png",
      tags: ["React", "JavaScript", "Frontend"]
    },
    {
      id: 2,
      title: "Workshop UX Design",
      formateur: "Sarah Design",
      avatar: "../assets/rihanna.jpg",
      participants: 89,
      startTime: "15:30",
      duration: "1h30",
      niveau: "Intermédiaire",
      thumbnail: "../assets/maxresdefault (2).jpg",
      tags: ["UX", "Design", "Figma"]
    },
    {
      id: 3,
      title: "Machine Learning en pratique",
      formateur: "Marc Data",
      avatar: "../assets/Steve_Jobs_Headshot_2010-CROP2.jpg",
      participants: 167,
      startTime: "16:00",
      duration: "2h30",
      niveau: "Avancé",
      thumbnail: "../assets/fd198c019313fe77706a512006875dbcad35053a68cbb1dc62d2db59e20a9c46.png",
      tags: ["Python", "ML", "Data Science"]
    }
  ];

  return (
    <section className="live-formations">
      <Container>
        <div className="section-header">
          <h2 className="text-center">
            <BsFillCircleFill className="live-dot" /> En Direct
          </h2>
          <p className="text-center text-muted mb-5">
            Rejoignez nos formations interactives en direct et échangez avec nos experts
          </p>
        </div>

        <Row>
          {liveFormations.map((formation) => (
            <Col key={formation.id} lg={4} md={6} className="mb-4">
              <Card className="live-card">
                <div className="thumbnail-container">
                  <Card.Img variant="top" src={formation.thumbnail} />
                  <div className="live-badge">
                    <BsFillCircleFill className="live-dot" /> LIVE
                  </div>
                  <div className="participants-count">
                    👥 {formation.participants} participants
                  </div>
                </div>

                <Card.Body>
                  <div className="formateur-info">
                    <img 
                      src={formation.avatar} 
                      alt={formation.formateur} 
                      className="formateur-avatar"
                    />
                    <span>{formation.formateur}</span>
                  </div>

                  <Card.Title>{formation.title}</Card.Title>
                  
                  <div className="formation-meta">
                    <Badge bg="primary">{formation.niveau}</Badge>
                    <span>⏱ {formation.duration}</span>
                    <span>🕒 {formation.startTime}</span>
                  </div>

                  <div className="tags-container">
                    {formation.tags.map((tag, index) => (
                      <Badge key={index} bg="light" text="dark">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="primary" className="w-100 mt-3">
                    Rejoindre le live
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default LiveFormations; 