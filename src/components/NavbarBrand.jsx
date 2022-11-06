import Navbar from 'react-bootstrap/Navbar';
import { AiFillClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const NavbarBrand = () => {
  const { isRunning } = useSelector(state => state.timer);

  if (isRunning) {
    return (
      <Navbar.Brand>
        <span className='text-muted fs-4 fw-bold d-flex align-items-center gap-1'>
          <AiFillClockCircle /> Time App
        </span>
      </Navbar.Brand>
    );
  }

  return (
    <Navbar.Brand>
      <Link
        to='/'
        className='text-decoration-none text-primary fs-4 fw-bold d-flex align-items-center gap-1'
      >
        <AiFillClockCircle /> Time App
      </Link>
    </Navbar.Brand>
  );
};
