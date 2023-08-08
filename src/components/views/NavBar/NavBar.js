import styles from './NavBar.module.scss'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
            <Container>
                <Navbar.Brand href="/">Blog.app</Navbar.Brand>
                <Nav>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="mainMenu">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;