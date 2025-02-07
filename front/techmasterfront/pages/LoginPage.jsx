import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
import './LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', formData);
      console.log('Connexion réussie:', response.data);

      // Stocker le token
      localStorage.setItem('token', response.data.token);

      // Rediriger l'utilisateur
      navigate('/profil');
    } catch (error) {
      console.error('Erreur lors de la connexion:', error.response.data);
      setMessage('Erreur lors de la connexion. Veuillez réessayer.');
    }
  };

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
              
              {message && <p className="text-center">{message}</p>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Entrez votre email"
                    size="lg"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Entrez votre mot de passe"
                    size="lg"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
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

              <p className="text-center mt-4">
                Pas encore de compte ? {' '}
                <Link to="/register">Créer un compte</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;