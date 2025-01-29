import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import logo from '../assets/logo.png';
// Import des nouveaux logos
import googleLogo from '../assets/google.png';
import linkedinLogo from '../assets/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.webp';
import appleLogo from '../assets/Apple_logo_grey.svg.png';
import './LoginPage.css';

function LoginPage() {
  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="login-card">
            <Card.Body>
              <div className="text-center mb-4">
                <img 
                  src={logo} 
                  alt="Tech Master Logo" 
                  className="login-logo mb-4"
                />
                <h2>Connexion</h2>
              </div>
              
              <Form>
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Entrez votre email"
                    size="lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Entrez votre mot de passe"
                    size="lg"
                  />
                  <Form.Text className="text-end d-block mt-2">
                    <a href="#forgot">Mot de passe oublié ?</a>
                  </Form.Text>
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100" 
                  size="lg"
                >
                  Se connecter
                </Button>
              </Form>

              <div className="divider">
                <span>ou continuer avec</span>
              </div>

              <Row className="social-buttons g-3">
                <Col xs={12} md={4}>
                  <Button variant="light" className="w-100 social-btn">
                    <img 
                      src={googleLogo} 
                      alt="Google" 
                      className="social-icon"
                    />
                    <span className="d-none d-md-inline ms-2">Google</span>
                  </Button>
                </Col>
                <Col xs={12} md={4}>
                  <Button variant="light" className="w-100 social-btn">
                    <img 
                      src={linkedinLogo} 
                      alt="LinkedIn" 
                      className="social-icon"
                    />
                    <span className="d-none d-md-inline ms-2">LinkedIn</span>
                  </Button>
                </Col>
                <Col xs={12} md={4}>
                  <Button variant="light" className="w-100 social-btn">
                    <img 
                      src={appleLogo} 
                      alt="Apple" 
                      className="social-icon"
                    />
                    <span className="d-none d-md-inline ms-2">Apple</span>
                  </Button>
                </Col>
              </Row>

              <p className="text-center mt-4">
                Pas encore de compte ? {' '}
                <a href="#signup">Créer un compte</a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
