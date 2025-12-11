import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contacts } from './pages'

// const Home = () => <h1>Home</h1>;
// const About = () => <h1>About</h1>;
// const Projects = () => <h1>Projects</h1>;
// const Contact = () => <h1>Contact</h1>;

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;


// Navbar just add the page URLS
// Router catches the URL changes and does action