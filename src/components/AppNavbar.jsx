import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillClockCircle } from 'react-icons/ai';
import { NavbarLink } from './NavbarLink';

export const AppNavbar = () => (
  <Navbar expand='md' bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand>
        <Link
          to='/'
          className='text-decoration-none text-primary fs-4 fw-bold d-flex align-items-center gap-1'
        >
          <AiFillClockCircle /> Time App
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
