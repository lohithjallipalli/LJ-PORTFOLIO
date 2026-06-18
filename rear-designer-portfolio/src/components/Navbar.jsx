import React from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

export default function Navbar({ isDropped, activeSection, darkMode, setDarkMode, setSidebarOpen }) {
  return (
    <>
      {/* Floating Logo Badge */}
      <a href="#header" className={`floating-logo-badge ${isDropped ? 'drop' : ''}`}>
        <div className="avatar-circle">L</div>
        <span className="logo-name">Lohith</span>
      </a>

      {/* Navbar Start */}
      <nav id="navbar" className={`flex__center ${isDropped ? 'drop' : ''}`}>
        <div className="flex nav__routes">
          <a href="#header" className={`route ${activeSection === 'header' ? 'active' : ''}`}>
            Home
          </a>
          <a href="#about" className={`route ${activeSection === 'about' ? 'active' : ''}`}>
            About
          </a>
          <a href="#skills" className={`route ${activeSection === 'skills' ? 'active' : ''}`}>
            Skills
          </a>
          <a href="#projects" className={`route ${activeSection === 'projects' ? 'active' : ''}`}>
            Projects
          </a>
          <a href="#journey" className={`route ${activeSection === 'journey' ? 'active' : ''}`}>
            Journey
          </a>
          <a href="#contact" className={`route ${activeSection === 'contact' ? 'active' : ''}`}>
            Contact
          </a>
        </div>
        <div className="flex__center">
          <label className="theme__toggle">
            <input
              type="checkbox"
              id="theme-checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="icon__container">
              <Sun className="sun" />
              <Moon className="moon" />
            </div>
          </label>
          <div className="icon__container menu__btn" id="menu__btn" onClick={() => setSidebarOpen(true)}>
            <Menu />
          </div>
        </div>
      </nav>
    </>
  );
}
