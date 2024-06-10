
export default function App() {
  return 

// App.jsx

import { useState , useEffect} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar"

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import PopularCollection from './components/product/PopularCollection';

import Footer from './components/Footer';
import CollectionPage from './components/collections/CollectionPage';
import MenPage from './components/collections/MenPage';
import WomenPage from './components/collections/WomenPage';
import AccessoriesPage from './components/collections/AccessoriesPage';
import About from './components/about/About';
import Login from "./components/login/Login";


function App() {
    const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      // Load the theme from local storage or default to 'light'
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
  
      // Set the initial theme class on the root HTML element
      document.documentElement.className = savedTheme;
    }, []);
  
    const location = useLocation();
    console.log('App Component Rendered');

    return (
      <div className={`App ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
          </Routes>
          {!(location.pathname === '/men' || location.pathname === '/women' || location.pathname === '/accessories') && <PopularCollection className="PopularCollection" />}

        </div>
        <Footer className="footer" />
        <Login />
      </div>
    );
}

