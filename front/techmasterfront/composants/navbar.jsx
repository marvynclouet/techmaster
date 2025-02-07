import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './navbar.css';
import logo from '../assets/logo.png'; // Assurez-vous que le chemin est correct

function BasicExample() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem('token');

  const fetchUserData = async () => {
    if (token) {
      try {
        const response = await axios.get('/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération du profil:', error);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
    
    // Écouter les mises à jour du profil
    const handleProfileUpdate = () => {
      fetchUserData();
    };
    
    window.addEventListener('user-profile-updated', handleProfileUpdate);
    
    return () => {
      window.removeEventListener('user-profile-updated', handleProfileUpdate);
    };
  }, [token]);

  const handleProfileClick = () => {
    navigate('/profil');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserData(null);
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="navbar bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <NavDropdown title="Formations" id="formations-dropdown" className="mega-menu">
              <div className="formations-mega-menu">
                <div className="menu-column">
                  <NavDropdown.Item as={Link} to="/formations" className="category-header">Développement</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Développement Web</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Backend</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Mobile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Full-Stack</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Jeux Vidéo</NavDropdown.Item>
                </div>
                
                <div className="menu-column">
                  <NavDropdown.Item as={Link} to="/formations" className="category-header">Data & IA</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Machine Learning</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Deep Learning</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">NLP</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Big Data</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Analyse de données</NavDropdown.Item>
                </div>

                <div className="menu-column">
                  <NavDropdown.Item as={Link} to="/formations" className="category-header">Design & Créativité</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">UI/UX Design</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Design Graphique</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">3D & Animation</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Motion Design</NavDropdown.Item>
                </div>

                <div className="menu-column">
                  <NavDropdown.Item as={Link} to="/formations" className="category-header">Business & Marketing</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Marketing Digital</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">E-commerce</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">Entrepreneuriat</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/formations">FinTech</NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">À propos</Nav.Link>
          </Nav>
          <Form className="d-flex me-2">
            <FormControl
              type="search"
              placeholder="Rechercher une formation..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Rechercher</Button>
          </Form>
          {token && userData ? (
            <div className="d-flex align-items-center ms-auto">
              <NavDropdown 
                title={
                  <div className="d-flex align-items-center">
                    <span className="me-3" style={{ fontSize: '1.1rem' }}>{userData.pseudo || userData.name}</span>
                    <div className="d-flex align-items-center position-relative">
                      {userData.photo ? (
                        <img
                          src={`http://localhost:5000${userData.photo}`}
                          alt="Profile"
                          className="profile-pic"
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid #fff',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                          }}
                        />
                      ) : (
                        <div 
                          className="profile-placeholder"
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#e9ecef',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            border: '2px solid #fff',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                          }}
                        >
                          {userData.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="dropdown-toggle-icon ms-2"></span>
                    </div>
                  </div>
                }
                id="profile-dropdown"
                align="end"
              >
                <NavDropdown.Item onClick={handleProfileClick} style={{ fontSize: '1.1rem' }}>
                  Mon Profil
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout} style={{ fontSize: '1.1rem' }}>
                  Se déconnecter
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          ) : (
            <Button 
              variant="primary" 
              className="login-btn ms-auto"
              as={Link} 
              to="/login"
            >
              Connexion
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;