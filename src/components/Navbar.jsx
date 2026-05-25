import { useState } from 'react'
import { Icon } from '@iconify/react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <Icon icon="mdi:code-tags" className="logo-icon" />
          Portfolio
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              <Icon icon="mdi:account" className="nav-icon" />
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              <Icon icon="mdi:briefcase" className="nav-icon" />
              Projects
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => setIsMenuOpen(false)}>
              <Icon icon="mdi:book-open" className="nav-icon" />
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Icon icon="mdi:email" className="nav-icon" />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
