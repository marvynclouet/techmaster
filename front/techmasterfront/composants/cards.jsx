import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';
import './cards.css';

function VideoCards() {
  const [activeCategory, setActiveCategory] = useState('all');

  const videos = [
    {
      id: 1,
      title: "Formation Complete JavaScript",
      image: "../assets/maxresdefault.jpg",
      description: "Apprenez JavaScript de A à Z avec des exercices pratiques",
      duration: "12h20min",
      level: "Débutant",
      category: "dev"
    },
    {
      id: 2,
      title: "React.js pour les Débutants",
      image: "../assets/maxresdefault (1).jpg",
      description: "Maîtrisez React.js et créez des applications web modernes",
      duration: "8h45min",
      level: "Intermédiaire",
      category: "dev"
    },
    {
      id: 3,
      title: "Python Data Science",
      image: "../assets/FR_506_bg_player_large.png",
      description: "Analyse de données et machine learning avec Python",
      duration: "15h30min",
      level: "Avancé",
      category: "data"
    },
    {
      id: 4,
      title: "UX/UI Design Masterclass",
      image: "../assets/hq720 (3).jpg",
      description: "Créez des interfaces utilisateur modernes et intuitives",
      duration: "10h15min",
      level: "Intermédiaire",
      category: "design"
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les formations' },
    { id: 'dev', name: 'Développement' },
    { id: 'design', name: 'Design' },
    { id: 'data', name: 'Data Science' }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <Container className="video-section">
      <h2 className="text-center mb-4">Formations Recommandées</h2>
      
      {/* Boutons de filtrage */}
      <div className="filter-buttons text-center mb-4">
        <ButtonGroup>
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "primary" : "outline-primary"}
              onClick={() => setActiveCategory(category.id)}
              className="mx-2"
            >
              {category.name}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <Row>
        {filteredVideos.map((video) => (
          <Col key={video.id} xs={12} sm={6} lg={3} className="mb-4">
            <Card className="video-card">
              <Card.Img variant="top" src={video.image} />
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <Card.Text>{video.description}</Card.Text>
                <div className="video-info">
                  <span className="duration">⏱ {video.duration}</span>
                  <span className="level">📚 {video.level}</span>
                </div>
                <Button variant="primary" className="w-100">Voir le cours</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Bouton Voir toutes les formations */}
      <div className="text-center mt-5">
        <Button 
          variant="outline-primary" 
          size="lg" 
          className="see-all-button"
          href="/formations"
        >
          VOIR TOUTES LES FORMATIONS
        </Button>
      </div>
    </Container>
  );
}

export default VideoCards;