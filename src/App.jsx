// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import Header globally
import Home from './pages/Home';
import Packages from './pages/Packages';
import Blog from './pages/BlogPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Header /> {/* Header is displayed on all pages */}
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer /> 
        </Router>
    );
}

export default App;