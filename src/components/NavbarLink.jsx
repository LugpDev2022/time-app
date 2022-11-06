import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

export const NavbarLink = ({ to, children }) => {
  const { pathname } = useLocation();
  const { isRunning } = useSelector(state => state.timer);

  return (
    <NavLink
      className={`${
        isRunning ? 'text-muted disabled' : 'text-primary'
      } fs-5 nav-link ${
        pathname === to ? 'text-decoration-underline' : 'text-decoration-none'
      }`}
      to={to}
    >
      {children}
    </NavLink>
  );
};
