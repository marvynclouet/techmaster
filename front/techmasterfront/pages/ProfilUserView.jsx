import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';
import './ProfilUserView.css';
import axios from 'axios';

function ProfilUserView() {
  const [formData, setFormData] = useState({
    pseudo: '',
    photo: ''
  });
  const [dragActive, setDragActive] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setFormData({
          pseudo: response.data.pseudo || '',
          photo: response.data.photo || ''
        });
        if (response.data.photo) {
          setPreviewImage(`http://localhost:5000${response.data.photo}`);
        }
      } catch (error) {
        console.error('Erreur lors du chargement du profil:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
      setFormData(prev => ({ ...prev, photo: file }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const formDataToSend = new FormData();
      
      if (formData.pseudo) {
        formDataToSend.append('pseudo', formData.pseudo);
      }
      
      if (formData.photo instanceof File) {
        formDataToSend.append('photo', formData.photo);
      }

      const response = await axios.put('/api/users/profile', formDataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.photo) {
        setPreviewImage(`http://localhost:5000${response.data.photo}`);
      }

      console.log('Profil mis à jour:', response.data);
      alert('Profil mis à jour avec succès !');
      
      window.dispatchEvent(new Event('user-profile-updated'));
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      alert('Erreur lors de la mise à jour du profil: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <Container className="profile-container py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="profile-card">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="profile-title">Mon Profil</h2>
                <Button 
                  variant="outline-danger" 
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Se déconnecter
                </Button>
              </div>

              <Form onSubmit={handleSubmit}>
                <div className="text-center mb-4">
                  <div 
                    className={`photo-upload-area ${dragActive ? 'drag-active' : ''}`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current.click()}
                  >
                    {previewImage ? (
                      <Image 
                        src={previewImage} 
                        roundedCircle 
                        className="profile-photo"
                      />
                    ) : (
                      <div className="upload-placeholder">
                        <i className="fas fa-cloud-upload-alt"></i>
                        <p>Glissez votre photo ici ou cliquez pour sélectionner</p>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileInput}
                      accept="image/*"
                      className="file-input"
                      hidden
                    />
                  </div>
                </div>

                <Form.Group className="mb-4">
                  <Form.Label>Pseudo</Form.Label>
                  <Form.Control
                    type="text"
                    name="pseudo"
                    value={formData.pseudo}
                    onChange={handleChange}
                    placeholder="Entrez votre pseudo"
                    className="form-input"
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 update-btn"
                >
                  Mettre à jour le profil
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilUserView;