import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/corporate">Corporate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/corporate">Home</Nav.Link>
            <Nav.Link href="/corporate/about">About</Nav.Link>
            <Nav.Link href="/corporate/services">Services</Nav.Link>
            <Nav.Link href="/corporate/works">Works</Nav.Link>
            <Nav.Link href="/corporate/teams">Teams</Nav.Link>
            <Nav.Link href="/corporate/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/corporate/pricing">Pricing</Nav.Link>
            <Nav.Link href="/corporate/blog">Blog</Nav.Link>
            <Nav.Link href="/corporate/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
