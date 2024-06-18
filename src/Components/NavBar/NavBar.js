import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import newLogo from "../../LOGO.png";
import { NavLink, Link, useNavigate } from "react-router-dom"; // Import NavLink and other necessary components
import "./NavBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  // const [userName, setUserName] = useState(null); // State to store user's name
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
  const userName = localStorage.getItem("name");
  console.log(userName);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to home page on logout
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container className="nav-container">
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
            {isAuthenticated ? (
              <>
                <button className="vvd" onClick={handleLogout}>
                  <span>Logout</span>
                </button>
                <span className="welcome-text">Hi, <span className="navbar-username">{userName}</span></span>
              </>
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
