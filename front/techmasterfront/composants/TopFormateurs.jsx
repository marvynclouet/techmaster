import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './TopFormateurs.css';

function TopFormateurs() {
  const navigate = useNavigate();
  
  const formateurs = [
    {
      id: 1,
      name: "Alex Dev",
      avatar: "../assets/Tom_Hanks_at_the_Elvis_Premiere_2022.jpg",
      specialite: "Expert React & Node.js"
    },
    {
      id: 2,
      name: "Sarah Design",
      avatar: "../assets/rihanna.jpg",
      specialite: "UI/UX Designer"
    },
    {
      id: 3,
      name: "Marc Data",
      avatar: "../assets/drake.jpg",
      specialite: "Data Scientist"
    },
    {
      id: 4,
      name: "Steve Jobs",
      avatar: "../assets/Steve_Jobs_Headshot_2010-CROP2.jpg",
      specialite: "IA & Machine Learning"
    },
    {
      id: 5,
      name: "Thomas Cyber",
      avatar: "../assets/mbappe.jpg",
      specialite: "Expert Cybersécurité"
    },
    {
      id: 6,
      name: "Emma Marketing",
      avatar: "../assets/Sur-Instagram-Ariana-grande-s-affiche-sans-maquillage.jpg",
      specialite: "Growth Hacker"
    }
    
  ];

  const handleFormateurClick = (formateurId) => {
    console.log('Navigation vers le formateur:', formateurId);
    try {
      navigate(`/formateur/${formateurId}`);
    } catch (error) {
      console.error('Erreur de navigation:', error);
    }
  };

  return (
    <section className="top-formateurs">
      <Container fluid>
        <h2 className="text-center mb-5">Nos Top Formateurs</h2>
        <div className="formateurs-wrapper">
          <div className="scroll-track">
            <div className="scroll-content">
              {[...formateurs, ...formateurs].map((formateur, index) => (
                <div 
                  key={`${formateur.id}-${index}`} 
                  className="formateur-item"
                  onClick={() => handleFormateurClick(formateur.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="formateur-avatar">
                    <img src={formateur.avatar} alt={formateur.name} />
                  </div>
                  <h3>{formateur.name}</h3>
                  <p>{formateur.specialite}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TopFormateurs; 