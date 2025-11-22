import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Location from './components/Location';
import Booking from './components/Booking';
import About from './components/About';
import Footer from './components/Footer';
import ServiceDetails from './components/ServiceDetails';
import BackgroundElements from './components/BackgroundElements';

const Home = () => (
  <>
    <Hero />
    <Services />
    <Location />
    <Booking />
    <About />
  </>
);

const AdminRedirect = () => {
  React.useEffect(() => {
    window.location.href = "/admin/index.html";
  }, []);
  return null;
};

function App() {
  return (
    <Router>
      <BackgroundElements />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/admin" element={<AdminRedirect />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
