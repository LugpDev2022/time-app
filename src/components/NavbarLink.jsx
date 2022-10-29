import { NavLink, useLocation } from 'react-router-dom';

export const NavbarLink = ({ to, children }) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      className={`text-primary fs-5 nav-link ${
        pathname === to ? 'text-decoration-underline' : 'text-decoration-none'
      }`}
      to={to}
    >
      {children}
    </NavLink>
  );
};
