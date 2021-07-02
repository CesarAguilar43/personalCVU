import {
    Navbar,
} from 'react-bootstrap';
import '../../assets/css/Header.css';
//import CarouselHeader from '../carousel/Carousel';
import { rutas } from '../../config/NavBarRoutes';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar-header">
            {/* <CarouselHeader /> */}
            <Navbar expand="xl">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggle" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand><Link to="/" className="navbar-title">Master Roush</Link></Navbar.Brand>
                    <Navbar.Brand className="mr-auto">
                        {rutas.map((ruta, i) => {
                            return (
                                <NavLink key={i} exact={true} to={ruta.path} className="navlink" activeClassName="active">{ruta.title}</NavLink>
                            );
                        })}
                    </Navbar.Brand>
                </ Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;