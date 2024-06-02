import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import newLogo from "../../LOGO.png";
import { BrowserRouter as Router, NavLink, Link, useNavigate } from "react-router-dom"; // Import BrowserRouter
import "./NavBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to home page on logout
  };


  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={newLogo} alt="IntelliFix-Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink} // Use NavLink from react-router-dom
              to="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            {isAuthenticated && (
              <>
                <Nav.Link
                  as={NavLink} // Use NavLink from react-router-dom
                  to="/codefixer"
                  className={
                    activeLink === "CodeFixer"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("CodeFixer")}
                >
                  Codefixer
                </Nav.Link>
                <Nav.Link
                  as={NavLink} // Use NavLink from react-router-dom
                  to="/Chatbot"
                  className={
                    activeLink === "Chatbot" 
                      ? "active navbar-link" 
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("Chatbot")}
                > 
                  Chatbot
                </Nav.Link>
              </>
            )}
          </Nav>
          <span className="navbar-text">
            {/* <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div> */}

            {
              isAuthenticated ? (
                <button ClassName="vvd" onClick={handleLogout}>
                  <span>Logout</span>
                </button>
              ) : (
                <Link to="/Authentication">
                  <button className="vvd">
                    <span>Sign Up or Login</span>
                  </button>
                </Link>
              )}  
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
