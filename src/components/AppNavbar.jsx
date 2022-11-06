import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavbarBrand, NavbarLink } from './';

export const AppNavbar = () => (
  <Navbar expand='md' bg='dark' variant='dark'>
    <Container>
      <NavbarBrand />
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
