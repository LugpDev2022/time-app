import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
          <Nav.Link>
            <NavLink
              className='text-decoration-none text-primary fs-5'
              to='/clock'
            >
              Local Clock
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              className='text-decoration-none text-primary fs-5'
              to='/world-clock'
            >
              World Clock
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              className='text-decoration-none text-primary fs-5'
              to='/timer'
            >
              Timer
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
