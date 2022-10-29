import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavbarLink } from './NavbarLink';

export const AppNavbar = () => (
  <Navbar expand='md' bg='dark'>
    <Container>
      <Navbar.Brand>
        <Link to='/' className='text-decoration-none text-primary fs-4'>
          Time App
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar-nav' />
      <Navbar.Collapse id='navbar-nav'>
        <Nav>
          <NavbarLink to='/'>Clock</NavbarLink>
          <NavbarLink to='/world-clock'>World Clock</NavbarLink>
          <NavbarLink to='/timer'>Timer</NavbarLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
