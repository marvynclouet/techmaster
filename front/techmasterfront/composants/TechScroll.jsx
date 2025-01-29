import React from 'react';
import './TechScroll.css';

function TechScroll() {
  const technologies = [
    { icon: '../assets/Figma-logo.svg.png' },
    { icon: '../assets/Go-Logo_Blue.png' },
    { icon: '../assets/JavaScript-logo.png' },
    { icon: '../assets/Logo_C_sharp.svg.png' },
    { icon: '../assets/React-icon.svg.png' },
    { icon: '../assets/Tux.svg.png' },
    { icon: '../assets/docker.svg' },
    { icon: '../assets/SHOP-020ea41a.png' },
    { icon: '../assets/swift-15.svg' },
    { icon: '../assets/Bitcoin.svg.png' }
  ];

  return (
    <div className="tech-scroll-container">
      <div className="scroll-track">
        <div className="scroll-content">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-icon">
                <img src={tech.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechScroll; 