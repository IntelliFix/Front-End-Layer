import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'; // Import BrowserRouter
import { Chatbot } from '../Chatbot/Chatbot'; // Import Chatbot component
import './NavBar.css';
import {Link} from 'react-router-dom';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink} // Use NavLink from react-router-dom
              to="/"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink} // Use NavLink from react-router-dom
              to="/codefixer"
              className={activeLink === 'CodeFixer' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('CodeFixer')}
            >
              Codefixer
            </Nav.Link>
            <Nav.Link
              as={NavLink} // Use NavLink from react-router-dom
              to="/Chatbot"
              className={activeLink === 'Chatbot' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('Chatbot')}
            >
              Chatbot
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>

            <Link to="/Authentication">
              <button className="vvd"><span>Let’s Code!</span></button>
            </Link>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
