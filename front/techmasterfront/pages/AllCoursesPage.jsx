import React from 'react';
import VideoCards from '../composants/cards';
import { Container } from 'react-bootstrap';


function AllCoursesPage() {
  return (
    <div className="all-courses-page">
      <Container>
        <h1 className="text-center mb-4">Toutes les Formations</h1>
        <VideoCards /> {/* Intégrez le composant VideoCards ici */}
      </Container>
    </div>
  );
}

export default AllCoursesPage;