import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllFormation = () => {
  const formations = [
    {
      id: 1,
      title: "Formation React Hooks",
      image: "../assets/maxresdefault.jpg",
      description: "Session live sur les hooks React et les bonnes pratiques",
      duration: "2h30",
      level: "Intermédiaire",
      instructor: "Alex Dev",
      category: "Développement Web"
    },
    {
      id: 2,
      title: "Workshop UX Design",
      image: "../assets/hq720 (3).jpg",
      description: "Création d'une interface utilisateur moderne en direct",
      duration: "1h45",
      level: "Tous niveaux",
      instructor: "Emma Design",
      category: "Design"
    },
    {
      id: 3,
      title: "Python Data Science",
      image: "../assets/FR_506_bg_player_large.png",
      description: "Analyse de données en temps réel avec Python",
      duration: "3h",
      level: "Avancé",
      instructor: "Marc Data",
      category: "Data Science"
    },
    {
      id: 4,
      title: "Node.js Avancé",
      image: "../assets/maxresdefault (1).jpg",
      description: "Architecture microservices avec Node.js",
      duration: "2h",
      level: "Avancé",
      instructor: "Sarah Code",
      category: "Backend"
    },
    {
      id: 5,
      title: "Formation Complete JavaScript",
      image: "../assets/maxresdefault.jpg",
      description: "Les fondamentaux de JavaScript avec des exercices",
      duration: "4h",
      level: "Débutant",
      instructor: "Alex Dev",
      category: "Développement Web"
    }
  ];

  const FormationCard = ({ formation }) => (
    <Col xs={12} sm={6} lg={4} className="mb-4">
      <Card className="video-card h-100">
        <Card.Img variant="top" src={formation.image} />
        <Card.Body>
          <Card.Title>{formation.title}</Card.Title>
          <Card.Text>{formation.description}</Card.Text>
          <div className="video-info mb-3">
            <span className="duration">⏱ {formation.duration}</span>
            <span className="level">📚 {formation.level}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">Par {formation.instructor}</small>
            <Link to="/live">
              <Button variant="primary">
                Voir le cours
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Nos Formations</h2>
      <Row>
        {formations.map((formation) => (
          <FormationCard key={formation.id} formation={formation} />
        ))}
      </Row>
    </Container>
  );
};

export default AllFormation;
