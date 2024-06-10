import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Navbar.css';
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

const Navbar = ({ theme, setTheme }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    // Load the theme from local storage or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, [setTheme]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  }

  const toggle_mode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save the new theme to local storage
  }

  return (
    <div className={`navbar ${theme} ${menuActive ? 'menu-toggle-active' : ''}`}>
      <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className='logo' />

      <FaBars className="menu-toggle" onClick={toggleMenu} />

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li className={`dropdown ${showDropdown ? 'active' : ''}`} onClick={toggleDropdown}>
          <span className="dropbtn">Collection</span>
          <div className="dropdown-content">
            <Link to="/men" className="collection-category">Men</Link>
            <Link to="/women" className="collection-category">Women</Link>
            <Link to="/accessories" className="collection-category">Accessories</Link>
          </div>
        </li>
      </ul>

      <div className='search-box'>
        <input type="text" placeholder="Search..." className="search-input" />
        <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="Search" />
      </div>

      <div className="right-section">
        <ul>
          <li><Link to="/cart"><FaShoppingCart /></Link></li>
          <li><button className='login'>Login</button></li>
        </ul>
      </div>

      <img onClick={toggle_mode} src={theme === 'light' ? toggle_light : toggle_dark} alt="Toggle Theme" className='toggle-icon' />
    </div>
  )
}

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
}

export default Navbar;
