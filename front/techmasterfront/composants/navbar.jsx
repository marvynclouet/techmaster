import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './navbar.css';
import logo from '../assets/logo.png'; // Assurez-vous que le chemin est correct

function BasicExample() {
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
                  <NavDropdown.Item as="div" className="category-header">Développement</NavDropdown.Item>
                  <NavDropdown.Item href="#dev/web">Développement Web</NavDropdown.Item>
                  <NavDropdown.Item href="#dev/backend">Backend</NavDropdown.Item>
                  <NavDropdown.Item href="#dev/mobile">Mobile</NavDropdown.Item>
                  <NavDropdown.Item href="#dev/fullstack">Full-Stack</NavDropdown.Item>
                  <NavDropdown.Item href="#dev/games">Jeux Vidéo</NavDropdown.Item>
                </div>
                
                <div className="menu-column">
                  <NavDropdown.Item as="div" className="category-header">Data & IA</NavDropdown.Item>
                  <NavDropdown.Item href="#ia/machine-learning">Machine Learning</NavDropdown.Item>
                  <NavDropdown.Item href="#ia/deep-learning">Deep Learning</NavDropdown.Item>
                  <NavDropdown.Item href="#ia/nlp">NLP</NavDropdown.Item>
                  <NavDropdown.Item href="#data/big-data">Big Data</NavDropdown.Item>
                  <NavDropdown.Item href="#data/analysis">Analyse de données</NavDropdown.Item>
                </div>

                <div className="menu-column">
                  <NavDropdown.Item as="div" className="category-header">Design & Créativité</NavDropdown.Item>
                  <NavDropdown.Item href="#design/ui-ux">UI/UX Design</NavDropdown.Item>
                  <NavDropdown.Item href="#design/graphic">Design Graphique</NavDropdown.Item>
                  <NavDropdown.Item href="#design/3d">3D & Animation</NavDropdown.Item>
                  <NavDropdown.Item href="#design/motion">Motion Design</NavDropdown.Item>
                </div>

                <div className="menu-column">
                  <NavDropdown.Item as="div" className="category-header">Business & Marketing</NavDropdown.Item>
                  <NavDropdown.Item href="#marketing/digital">Marketing Digital</NavDropdown.Item>
                  <NavDropdown.Item href="#business/ecommerce">E-commerce</NavDropdown.Item>
                  <NavDropdown.Item href="#business/entrepreneuriat">Entrepreneuriat</NavDropdown.Item>
                  <NavDropdown.Item href="#business/fintech">FinTech</NavDropdown.Item>
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
          <Button 
            variant="primary" 
            className="login-btn" 
            as={Link} 
            to="/login"
          >
            Connexion
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;