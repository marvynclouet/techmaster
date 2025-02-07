// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from '../composants/navbar';
import LiveStreamPage from '../pages/LiveStreamPage';
import CategorySelect from '../composants/categorislect';
import VideoCards from '../composants/cards';
import About from '../pages/About';
import QuickIntro from '../composants/QuickIntro';
import TopFormateurs from '../composants/TopFormateurs';
import LiveFormations from '../composants/LiveFormations';
import TechScroll from '../composants/TechScroll';
import LoginPage from '../pages/LoginPage';
import Review from '../composants/Review';
import Footer from '../composants/Footer';
import ProfilViewForma from '../pages/ProfilViewForma';
import AllFormation from '../composants/AllFormation';
import RegisterPage from '../pages/RegisterPage';
import ProfilUserView from '../pages/ProfilUserView';


function App() {
  return (
    <Router>
      <div className="App">
        <BasicExample />
        <Routes>
          <Route path="/" element={
            <>
              <QuickIntro />
              <LiveFormations />
              <TopFormateurs />
              <VideoCards />
              <CategorySelect />
              <Review />
              <TechScroll />
              <Footer />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/live" element={<LiveStreamPage />} />
          <Route path="/formateur/:id" element={<ProfilViewForma />} />
          <Route path="/formations" element={<AllFormation />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profil" element={<ProfilUserView />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
