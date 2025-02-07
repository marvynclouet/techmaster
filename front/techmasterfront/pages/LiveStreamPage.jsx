import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LiveStreamPage.css'; // Assurez-vous que le chemin est correct

function LiveStreamPage() {
  const currentTime = new Date();
  const liveStartTime = new Date();
  liveStartTime.setHours(11, 0, 0); // 11h00

  const isLiveAvailable = currentTime >= liveStartTime;

  // Informations sur le live
  const liveInfo = {
    
    streamer: "Jean Dupont",
    theme: "Développement Frontend",
    streamerImage: "../assets/drake.jpg",
    participants: 150,
    experience: "10 ans d'expérience",
    specialite: "Expert React & Node.js",
    description: "Découvrez les meilleures pratiques du développement React et apprenez à créer des applications web modernes et performantes."
  };

  // Données pour les rediffusions suggérées
  const suggestedReplays = [
    {
      id: 1,
      title: "Introduction à React Hooks",
      thumbnail: "../assets/Les-nouveaux-concepts-proposes-par-les-YouTubeurs-Pour-cette-rentree-2022.-4.png",
      duration: "1h 30min",
      views: "1.2k vues"
    },
    {
      id: 2,
      title: "State Management avec Redux",
      thumbnail: "../assets/hq720 (3).jpg",
      duration: "2h 15min",
      views: "856 vues"
    },
    {
      id: 3,
      title: "React Performance Tips",
      thumbnail: "../assets/fd198c019313fe77706a512006875dbcad35053a68cbb1dc62d2db59e20a9c46.png",
      duration: "1h 45min",
      views: "2.1k vues"
    }
  ];

  return (
    <div className="live-stream-page">
      <Container>
        <Row className="text-center">
          <Col>
            <h1 className="mb-4">{liveInfo.title}</h1>
            
            {/* Message de réservation */}
            <div className="live-message-container">
              <div className="live-message">
                <h2>🎥 Le Live n'a pas encore commencé</h2>
                <p className="time-info">Rendez-vous à 11h00</p>
                <div className="message-content">
                  <p>Ne manquez pas ce live exceptionnel avec {liveInfo.streamer} !</p>
                  <p className="spots-left">Places limitées disponibles</p>
                </div>
                <Link to="/reservation">
                  <Button className="reserve-button">
                    Réserver ma place gratuitement
                  </Button>
                </Link>
              </div>
            </div>

            {/* Section Informations modifiée */}
            <div className="streamer-info mt-5">
              <div className="streamer-card">
                <div className="streamer-image-container">
                  <img src={liveInfo.streamerImage} alt={liveInfo.streamer} className="streamer-image" />
                </div>
                <div className="streamer-details">
                  <h3>{liveInfo.streamer}</h3>
                  <p className="specialite">{liveInfo.specialite}</p>
                  <p className="experience">{liveInfo.experience}</p>
                  <div className="info-tags">
                    <span className="theme-tag">{liveInfo.theme}</span>
                    <span className="participants-count">
                      <i className="fas fa-users"></i> {liveInfo.participants} participants
                    </span>
                  </div>
                  <p className="description">{liveInfo.description}</p>
                  
                  {/* Section des rediffusions suggérées */}
                  <div className="suggested-replays">
                    <h4>Rediffusions suggérées</h4>
                    <div className="replay-cards">
                      {suggestedReplays.map(replay => (
                        <div key={replay.id} className="replay-card">
                          <div className="replay-thumbnail">
                            <img src={replay.thumbnail} alt={replay.title} />
                            <span className="duration">{replay.duration}</span>
                          </div>
                          <div className="replay-info">
                            <h5>{replay.title}</h5>
                            <span className="views">{replay.views}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LiveStreamPage;