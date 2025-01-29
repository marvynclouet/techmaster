// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from '../composants/navbar';
import ControlledCarousel from '../composants/caroussel';
import CategorySelect from '../composants/categorislect';
import VideoCards from '../composants/cards';
import About from '../pages/About';
import QuickIntro from '../composants/QuickIntro';
import TopFormateurs from '../composants/TopFormateurs';
import LiveFormations from '../composants/LiveFormations';
import TechScroll from '../composants/TechScroll';
import LoginPage from '../pages/LoginPage';


function App() {
  return (
    <Router>
      <div>
        <BasicExample />
        <Routes>
          <Route path="/" element={
            <>
              <ControlledCarousel />
              <QuickIntro />
              <VideoCards />
              <TechScroll />
              <CategorySelect />
              <TopFormateurs />
              <LiveFormations />
              
              
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
