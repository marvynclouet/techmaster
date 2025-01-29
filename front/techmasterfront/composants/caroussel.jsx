import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types'; // Pour gérer la validation des props

// Exemple d'image pour chaque slide
function ExampleCarouselImage({ src }) {
  return (
    <img
      src={src}
      alt="carousel slide"
      style={{
        height: '600px', // Hauteur augmentée pour un meilleur impact visuel
        width: '100%',
        objectFit: 'cover',
      }}
    />
  );
}

// Ajout de la validation des props
ExampleCarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
};

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-wrapper">
    
      
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ExampleCarouselImage 
            src="../assets/1.jpg" // Remplacez par le chemin de votre première image
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage 
            src="../assets/1.jpg" // Remplacez par le chemin de votre deuxième image
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage 
            src="../assets/2.jpg" // Remplacez par le chemin de votre troisième image
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;