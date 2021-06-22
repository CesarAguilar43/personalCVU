import {
    Navbar,
} from 'react-bootstrap';
import '../../assets/css/Header.css';
import CarouselHeader from '../carousel/Carousel';
import { rutas } from '../../config/NavBarRoutes';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <CarouselHeader />
            <Navbar bg="dark" variant="dark" expand="xl">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand className="mr-auto">
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Brand className="mr-auto">
                        { rutas.map((ruta, i)=>{
                            return(
                                <Link key={i} exact={true} to={ruta.path}>{ruta.title}</Link>
                            );
                        })}
                    </Navbar.Brand>
                </ Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;