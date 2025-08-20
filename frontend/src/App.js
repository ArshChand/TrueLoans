import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import KnowledgeCenter from './components/KnowledgeCenter';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/knowledge-center" element={<KnowledgeCenter />} />
        <Route path="/knowledge-center/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;