import { Navbar } from 'react-bootstrap';
import '../../assets/css/Header.css';
import { rutas } from '../../config/NavBarRoutes';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar expand="xl" fixed="top" className="navbar-header">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand>
            <Link to="/" className="navbar-title">
              Master Roush
            </Link>
          </Navbar.Brand>
          <Navbar.Brand className="mr-auto">
            {rutas.map(({ path, title, id }) => {
              return (
                <NavLink key={id} to={path} className="navlink" activeClassName="active" exact>
                  {title}
                </NavLink>
              );
            })}
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
