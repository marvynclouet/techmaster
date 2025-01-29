import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import './categorislect.css';

function CategorySelect() {
  const categories = [
    {
      id: 1,
      title: "Développement et programmation",
      icon: "💻",
      subcategories: [
        { name: "Développement web", tech: "HTML, CSS, JavaScript, React.js, Vue.js, Angular" },
        { name: "Développement backend", tech: "Node.js, Python, Ruby on Rails, PHP, Go" },
        { name: "Développement mobile", tech: "Flutter, React Native, Swift, Kotlin" },
        { name: "DevOps", tech: "Docker, Kubernetes, CI/CD, Ansible" },
        { name: "Développement de jeux", tech: "Unity, Unreal Engine, Godot" }
      ]
    },
    {
      id: 2,
      title: "Intelligence Artificielle & ML",
      icon: "🤖",
      subcategories: [
        { name: "Fondamentaux de l'IA", tech: "Algorithmes, réseaux de neurones" },
        { name: "Deep Learning", tech: "TensorFlow, PyTorch, Keras" },
        { name: "NLP", tech: "ChatGPT, BERT, Traitement du langage" },
        { name: "IA générative", tech: "DALL·E, MidJourney, Stable Diffusion" }
      ]
    },
    {
      id: 3,
      title: "Data & Cloud",
      icon: "☁️",
      subcategories: [
        { name: "Big Data", tech: "Hadoop, Spark, ETL" },
        { name: "Cloud Computing", tech: "AWS, Google Cloud, Azure" },
        { name: "Bases de données", tech: "SQL, MongoDB, Firebase" }
      ]
    },
    {
      id: 4,
      title: "Cybersécurité",
      icon: "🔒",
      subcategories: [
        { name: "Sécurité des réseaux", tech: "Firewalls, VPN, Pentesting" },
        { name: "Hacking éthique", tech: "Kali Linux, Metasploit" },
        { name: "Cryptographie", tech: "Blockchain, RSA/AES" }
      ]
    },
    {
      id: 5,
      title: "Design & Créativité",
      icon: "🎨",
      subcategories: [
        { name: "UX/UI Design", tech: "Figma, Adobe XD, Sketch" },
        { name: "Création graphique", tech: "Photoshop, Illustrator, Canva" },
        { name: "Motion Design", tech: "After Effects, Blender, Cinema 4D" }
      ]
    },
    {
      id: 6,
      title: "Marketing Digital",
      icon: "📈",
      subcategories: [
        { name: "SEO/SEA", tech: "Google Ads, Analytics" },
        { name: "Social Media", tech: "Facebook Ads, TikTok Ads" },
        { name: "E-commerce", tech: "Shopify, WooCommerce" }
      ]
    }
  ];

  return (
    <Container className="category-section">
      <h2 className="text-center mb-5">Explorez nos domaines de formation</h2>
      <Row>
        {categories.map((category) => (
          <Col key={category.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="category-card">
              <Card.Body>
                <div className="category-icon">{category.icon}</div>
                <Card.Title>{category.title}</Card.Title>
                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Voir les spécialités</Accordion.Header>
                    <Accordion.Body>
                      {category.subcategories.map((sub, index) => (
                        <div key={index} className="subcategory-item">
                          <h6>{sub.name}</h6>
                          <p className="tech-stack">{sub.tech}</p>
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategorySelect;
