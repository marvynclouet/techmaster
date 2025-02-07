// front/techmasterfront/composants/Footer.jsx
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Importer les icônes de react-icons
import logo from '../assets/logo.png'; // Remplacez par le chemin de votre logo
import androidStore from '../assets/Google_Play_Store_badge_FR.svg.png'; // Remplacez par le chemin de votre image Android Store
import appStore from '../assets/Download_on_the_App_Store_Badge_FRCA_RGB_blk.svg.png'; // Remplacez par le chemin de votre image App Store

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark' style={{ backgroundColor: '#003366' }}>
      <MDBContainer className='p-4'>
        {/* Logo du site */}
        <section className='mb-4'>
          <img src={logo} alt="Logo de mon site" style={{ width: '300px' }} /> {/* Augmenté à 200px */}
        </section>

        {/* Section des icônes de réseaux sociaux */}
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button' style={{ fontSize: '1.5rem' }}>
            <FaFacebookF />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button' style={{ fontSize: '1.5rem' }}>
            <FaTwitter />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button' style={{ fontSize: '1.5rem' }}>
            <FaInstagram />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button' style={{ fontSize: '1.5rem' }}>
            <FaLinkedinIn />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button' style={{ fontSize: '1.5rem' }}>
            <FaGithub />
          </MDBBtn>
        </section>

     

        {/* Section de description */}
        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

      
        {/* Section des boutons de téléchargement */}
        <section className='mb-4'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size="auto">
              <a href='https://play.google.com/' target="_blank" rel="noopener noreferrer">
                <img src={androidStore} alt="Télécharger sur Android" style={{ width: '180px', margin: '5px' }} /> {/* Augmenté à 180px */}
              </a>
            </MDBCol>
            <MDBCol size="auto">
              <a href='https://www.apple.com/app-store/' target="_blank" rel="noopener noreferrer">
                <img src={appStore} alt="Télécharger sur App Store" style={{ width: '180px', margin: '5px' }} /> {/* Augmenté à 180px */}
              </a>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      {/* Section de copyright */}
    
    </MDBFooter>
  );
}